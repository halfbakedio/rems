Clerk.configure do |c|
  c.logger = Logger.new($stdout)
  c.middleware_cache_store = ActiveSupport::Cache::FileStore.new("/tmp/clerk_middleware_cache")
end
