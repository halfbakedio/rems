# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    scope :v1 do
      # devise_scope :user do
      #   get "users", to: "devise/sessions#new"
      # end

      devise_for :users,
                 controllers: { sessions: :sessions },
                 path_names: { sign_in: :login }

      resource :user, only: %i[show update]
    end
  end

  concern :api_base do
    resources :agents
    # resources :contacts
    # resources :listings
    # resources :open_houses
    # resources :properties
  end

  namespace :api do
    namespace :v1 do
      concerns :api_base
    end
  end
end
