# frozen_string_literal: true

module Types
  class OpenHouseType < Types::BaseObject
    field :id, ID, null: false
    field :account_id, Integer, null: false
    field :listing_id, Integer, null: false
    field :start_at, GraphQL::Types::ISO8601DateTime
    field :end_at, GraphQL::Types::ISO8601DateTime
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
