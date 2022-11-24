# frozen_string_literal: true

Rails.application.routes.draw do
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
