require "rails_helper"

module Queries
  module Accounts
    describe Account, type: :request do
      let!(:account1) { create(:account) }
      let!(:account2) { create(:account) }
      let!(:account3) { create(:account) }
      let!(:super_admin) { create(:super_admin, account: account1) }
      let!(:admin1) { create(:admin, account: account1) }
      let!(:admin2) { create(:admin, account: account2) }
      let!(:admin3) { create(:admin, account: account3) }
      let!(:agent1) { create(:agent, account: account1) }
      let!(:agent2) { create(:agent, account: account2) }
      let!(:auth_user) { nil }
      let(:query) {}
      let(:variables) { {} }

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

      def query_account(id:)
        <<~GQL
          query {
            account(id: #{id}) {
              id
            }
          }
        GQL
      end

      def query_accounts
        <<~GQL
          query {
            accounts(first: 3) {
              nodes {
                id
              }
            }
          }
        GQL
      end


      subject(:result) do
        post "/api/v2/graphql",
          params: { query: query },
          headers: auth_headers(auth_user)

        JSON.parse(response.body)
      end

      describe ".resolve" do
        describe "#super_admin?" do
          let!(:auth_user) { super_admin }

          context "when retrieving a single account" do
            let(:query) { query_account(**variables) }

            context "when the user belongs to the account" do
              let(:variables) { { id: account1.id } }

              it "returns an account by ID" do
                expect(result.dig("data", "account", "id")).to eql(account1.id.to_s)
              end
            end

            context "when the user does not belong to the account" do
              let(:variables) { { id: account2.id } }

              it "returns an account by ID" do
                expect(result.dig("data", "account", "id")).to eql(account2.id.to_s)
              end
            end
          end

          context "when retrieving all account connections" do
            let(:query) { query_accounts }

            it "returns all accounts" do
              expect(result.dig("data", "accounts", "nodes"))
                .to match_array(
                  [
                    { "id" => account1.id.to_s },
                    { "id" => account2.id.to_s },
                    { "id" => account3.id.to_s },
                  ]
                )
            end
          end
        end

        describe "#admin?" do
          let!(:auth_user) { admin1 }

          context "when retrieving a single account" do
            let(:query) { query_account(**variables) }

            context "when the user belongs to the account" do
              let(:variables) { { id: account1.id } }

              it "returns an account by ID" do
                expect(result.dig("data", "account", "id")).to eql(account1.id.to_s)
              end
            end

            context "when the user does not belong to the account" do
              let(:variables) { { id: account2.id } }

              it "raises a record not found exception" do
                expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
              end
            end
          end

          context "when retrieving all account connections" do
            let(:query) { query_accounts }

            it "returns only the account they belong to" do
              expect(result.dig("data", "accounts", "nodes"))
                .to match_array(
                  [
                    { "id" => account1.id.to_s },
                  ]
                )
            end
          end
        end
      end
    end
  end
end
