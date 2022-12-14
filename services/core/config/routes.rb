# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    scope :v1 do
      devise_for :users,
        controllers: { sessions: :sessions },
        path_names: { sign_in: :login }
    end
  end

  concern :api_base do
    resource :user, only: %i[show update]
    resources :profiles, param: :username, only: [:show]
    resources :agents
    resources :contacts
    # resources :listings
    resources :open_houses, only: [:show]
    # resources :properties
  end

  namespace :api do
    namespace :v1 do
      concerns :api_base
    end
  end
end
