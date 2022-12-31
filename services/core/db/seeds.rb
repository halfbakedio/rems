# frozen_string_literal: true

require_relative "seed_helpers.rb"

if Rails.env.development?
  begin
    account = Account.find_or_create_by(name: "REMS")

    role_su = Role.create(name: "su")
    role_admin = Role.create(name: "admin")

    # user setup
    admin = find_or_create_user(
      account: account,
      email: "admin@rems.com",
      username: "admin",
      password: "remsrems",
      confirm: true,
    )

    admin.roles = [role_su, role_admin]
    admin.save!

    # property setup
    property = find_or_create_property(
      account: account,
      address: "123 Fake St.",
      image: "123-fake-st.png",
    )
    listing = first_or_create_listing(
      account: account,
      property: property,
      agent: admin,
    )
    first_or_create_open_house(
      account: account,
      listing: listing,
      start_at: DateTime.parse("2022-12-01T10:30 PST"),
      end_at: DateTime.parse("2022-12-01T14:30 PST"),
    )
  rescue ActiveRecord::RecordNotUnique => error
    Rails.logger.info("Something went wrong: #{error}")
  end
end
