# frozen_string_literal: true

require "gruf"

proto_dir = Rails.root.join("lib", "proto")
$LOAD_PATH.unshift(proto_dir)

require "rpc/core_services_pb"

Gruf.configure do |c|
  c.interceptors.use(
    Gruf::Interceptors::Instrumentation::RequestLogging::Interceptor,
    formatter: :logstash,
  )
  c.error_serializer = Gruf::Serializers::Errors::Json

  unless Rails.env.test? # no need for auth in dev
    token = ENV.fetch("GRPC_AUTH_TOKEN", "austin").to_s.strip
    c.interceptors.use(Gruf::Interceptors::Authentication::Basic, credentials: [{ password: token }]) if token.present?
  end
end
