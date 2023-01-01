module Types
  describe AccountType do
    let!(:accounts) { create_list(:account, 3) }
    let(:query) {}
    let(:variables) {}

    # account 1
    #  - user with super admin role
    #  - user with admin role
    #  - user with agent role
    # account 2
    #  - user with admin role
    #  - user with agent role
    # account 3
    #  - user with admin role
    #  - user with agent role
    #
    # super admin gets all 3 accounts
    # super admin gets one account by ID that they belong to
    # super admin gets either account by ID that they don't belong to
    #
    # account 1 admin gets their own account when requesting all
    # account 1 admin gets their own account by ID
    # account 1 admin does not get either other account by ID
    # account 1 agent gets nothing
    #
    # account 2 repeat same
    # account 3 repeat same

    subject(:result) do
      Grow::Schema.execute(query, variables: variables).as_json
    end

    describe "when the querying user has the super admin role" do
      context "retrieving a single account" do
        let(:query) do
          %(query($id: Int!) {
            account(id: $id) {
              id
            }
          })
        end
        let(:variables) { { "id" => accounts.first.id } }

        it "returns an account by ID" do
          expect(result.dig("data", "account", "id")).to eql(accounts.first.id)
        end
      end

      context "retrieve all account connections" do
        let(:query) do
          %(query {
            accounts(first: 3) {
              edges {
                node {
                  id
                }
              }
            }
          })
        end

        it "returns all accounts" do
          expect(result.dig("data", "accounts", "edges")).to match_array(
            accounts.map { |account| { "node" => { "id" => account.id } } }
          )
        end
      end
    end

    describe "when the querying user doesn't not have the super admin role" do
    end
  end
end
