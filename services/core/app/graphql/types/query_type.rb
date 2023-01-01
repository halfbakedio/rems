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
          description: "Returns a list of users" do
      argument :role_id, ID, required: false
    end

    field :account, Types::AccountType, null: true do
      argument :id, ID, required: true
    end
    field :accounts,
          Types::AccountType.connection_type,
          null: false,
          description: "Returns a list of accounts"

    field :contact, Types::ContactType, null: true do
      argument :id, ID, required: true
    end
    field :contacts,
          Types::ContactType.connection_type,
          null: false,
          description: "Returns a list of contacts"

    field :listing, Types::ListingType, null: true do
      argument :id, ID, required: true
    end
    field :listings,
          Types::ListingType.connection_type,
          null: false,
          description: "Returns a list of listings"

    field :open_house, Types::OpenHouseType, null: true do
      argument :id, ID, required: true
    end
    field :open_houses,
          Types::OpenHouseType.connection_type,
          null: false,
          description: "Returns a list of open houses"

    field :property, Types::PropertyType, null: true do
      argument :id, ID, required: true
    end
    field :properties,
          Types::PropertyType.connection_type,
          null: false,
          description: "Returns a list of properties"

    def me
      context[:current_user]
    end

    def user(id:)
      policy_scope(User).find(id)
    end

    def users(role_id: nil)
      if role_id
        policy_scope(User).where(
          id: Assignment.where(role_id: role_id).select(:user_id)
        )
      else
        policy_scope(User)
      end
    end

    def account(id:)
      policy_scope(Account).find(id)
    end

    def accounts
      policy_scope(Account)
    end

    def contact(id:)
      policy_scope(Contact).find(id)
    rescue ActiveRecord::RecordNotFound
      nil
    end

    def contacts
      policy_scope(Contact)
    end

    def listing(id:)
      policy_scope(Listing).find(id)
    end

    def listings
      policy_scope(Listing)
    end

    def open_house(id:)
      policy_scope(OpenHouse).find(id)
    end

    def open_houses
      policy_scope(OpenHouse)
    end

    def property(id:)
      policy_scope(Property).find(id)
    end

    def properties
      policy_scope(Property)
    end

    private

    def policy_scope(*args)
      context[:policy_scope].call(*args)
    end
  end
end
