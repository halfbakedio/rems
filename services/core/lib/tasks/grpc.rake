# frozen_string_literal: true

namespace :grpc do
  # Example:
  #   rake grpc:get_property[1]
  #
  # @param [Rake::TaskArguments] args
  #
  # @raise [Gruf::Client::Error]
  task :get_property, %i[id] => :environment do |_, args|
    client = test_grpc_build_client(args)

    begin
      property = client.call(:GetProperty, id: args[:id].to_i)
      puts property.message.inspect
    rescue Gruf::Client::Error => e
      puts e.error.inspect
    end
  end

  # @param [Rake::TaskArguments] args
  # @param [Hash] defaults
  #
  # @return [Gruf::Client]
  def test_grpc_build_client(args, defaults = {})
    host = ENV.fetch("GRPC_SERVER_HOST", "0.0.0.0")
    port = ENV.fetch("GRPC_SERVER_PORT", 10_541)
    token = ENV.fetch("GRPC_AUTH_TOKEN", "austin")

    args.with_defaults(
      defaults.merge(
        hostname: "#{host}:#{port}",
        password: token.to_s.strip,
      )
    )

    Gruf::Client.new(
      service: Rpc::Core,
      options: {
        hostname: args[:hostname],
        username: "test",
        password: args[:password],
        client_options: {
          timeout: ENV.fetch("GRPC_TIMEOUT", 10),
        },
      }
    )
  end
end
