module AuthHelpers
  def auth_headers(user)
    secret = Rails.application.secrets.secret_key_base
    payload = { id: user.id }
    token = JWT.encode payload, secret

    {
      Authorization: "Bearer #{token}",
    }
  end
end
