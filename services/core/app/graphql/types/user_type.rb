# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :username, String
    field :image, String

    field :account, Types::AccountType, null: false
    field :roles, [Types::RoleType], null: false
  end
end
