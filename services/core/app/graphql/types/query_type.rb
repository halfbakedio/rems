module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :me, Types::UserType, null: true
    field :user, Types::UserType, null: true do
      argument :id, ID, required: true
    end
    field :users,
      Types::UserType.connection_type,
      null: false,
      description: "Returns a list of users"

    def me
      context[:current_user]
    end

    def user(id:)
      User.find(id)
    end

    def users
      User.all
    end
  end
end
