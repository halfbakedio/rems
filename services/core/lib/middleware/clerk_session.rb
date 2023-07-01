module Middleware
  class ClerkSession
    def initialize(app)
      @app = app
    end

    def call(env)
      @req = ActionDispatch::Request.new(env)

      @status, @headers, @response = @app.call(env)
      original_call = [@status, @headers, @response]
      return original_call unless public_open_house_request?
      return original_call if @req.cookies && @req.cookies["__session"].present?

      auth_token = @req.headers[:authorization]&.gsub(/Bearer /, "")

      return original_call unless auth_token.present? && auth_token.length == 32

      uuid = token_to_uuid(auth_token)
      token = Token.find_by(uuid: uuid)

      return original_call if token.blank?

      session = create_session(token.user_id)
      @req.cookies["__session"] = session
      @req.headers["X-Token-Session"] = "ALLOW"

      @app.call(env)
    end

    private

    def public_open_house_request?
      [
        @req.get?,
        (@req.path =~ %r{^/api/v1/open-houses/}).present?,
        @req.headers[:authorization].present?,
      ].all?
    end

    def token_to_uuid(token)
      # this assumes 8-4-4-4-12 format
      [
        token[0..7],
        token[8..11],
        token[12..15],
        token[16..19],
        token[20..31],
      ].join("-")
    end

    def create_session(user_id)
      clerk = Clerk::SDK.new

      body = {
        user_id: user_id,
        actor: {
          sub: user_id,
        },
      }

      actor = clerk.request(:post, "/v1/actor_tokens", body: body)
      actor["token"]
    end
  end
end
