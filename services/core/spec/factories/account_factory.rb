FactoryBot.define do
  factory :account do
    name { Faker::Company.unique.name }
    subdomain { Faker::Name.unique.name }
  end

  factory :account_with_users do
    transient do
      users_count { 3 }
    end

    after(:create) do |account, evaluator|
      create_list(:user, evaluator.users_count, account: account)

      account.reload
    end
  end
end
