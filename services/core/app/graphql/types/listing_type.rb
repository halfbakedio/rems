# frozen_string_literal: true

module Types
  class ListingType < Types::BaseObject
    field :id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :agent, Types::UserType, null: false
    field :property, Types::PropertyType, null: false
    field :open_houses, Types::OpenHouseType.connection_type
  end
end
