# frozen_string_literal: true

module Types
  class ListingType < Types::BaseObject
    field :id, ID, null: false
    field :account_id, Integer, null: false
    field :property_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :agent_id, Integer
  end
end
