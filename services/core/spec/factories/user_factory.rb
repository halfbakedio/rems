FactoryBot.define do
  factory :user do
    transient do
      first_name { Faker::Name.unique.first_name }
      last_name { Faker::Name.unique.last_name }
    end

    email { "#{first_name}.#{last_name}@domain.com" }
    username { first_name }
    password { "areallygoodpassword!" }

    trait :super_admin do
      after(:create) do |user|
        user.roles << Role.where(name: "super_admin")
      end
    end

    trait :admin do
      after(:create) do |user|
        user.roles << Role.where(name: "admin")
      end
    end

    trait :agent do
      after(:create) do |user|
        user.roles << Role.where(name: "agent")
      end
    end

    factory :super_admin, traits: %i[super_admin admin agent]
    factory :admin, traits: [:admin]
    factory :agent, traits: [:agent]
  end
end
