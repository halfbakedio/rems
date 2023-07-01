# frozen_string_literal: true

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine,
      at: "/api/v2/graphiql",
      graphql_path: "/api/v2/graphql"
  end

  concern :api_base do
    resources :open_houses, path: "/open-houses", only: %i[show index]
    resources :properties, only: %i[show index]
  end

  namespace :api do
    namespace :v1 do
      concerns :api_base
    end

    namespace :v2 do
      post "/graphql", to: "graphql#execute"
    end
  end
end
