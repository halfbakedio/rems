FactoryBot.define do
  factory :account do
    name Faker::Name.unique.name
  end
end
