# frozen_string_literal: true

require_relative "boot"

require "rails/all"
# require "sprockets/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# Require any middleware in lib
Dir[File.join(__dir__, "../lib/middleware/**/*.rb")].each { |f| require f }

module Core
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # TODO: revisit these, GraphQL needed/needs it
    config.session_store :cookie_store, key: "_interslice_session"

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use config.session_store, config.session_options

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true

    # application middleware
    config.middleware.insert_before 0, Middleware::ClerkSession

    # setup generators to use rspec and skip auto-generated specs
    config.generators do |g|
      g.test_framework :rspec
      g.helper_specs false
      g.controller_specs false
      g.view_specs false
      g.routing_specs false
      g.request_specs false
    end
  end
end
