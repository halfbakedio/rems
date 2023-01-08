# frozen_string_literal: true

require_relative "seed_helpers"

if Rails.env.development?
  begin
    account = Account.find_or_create_by(name: "REMS")
    if account.id.nil? || account.subdomain.nil?
      account.subdomain = "app"
      account.save
    end

    role_su = Role.find_or_create_by(name: "super_admin")
    role_admin = Role.find_or_create_by(name: "admin")
    role_agent = Role.find_or_create_by(name: "agent")

    # user setup
    admin = find_or_create_user(
      account: account,
      email: "admin@rems.com",
      username: "admin",
      password: "remsrems",
      confirm: true,
    )

    admin.roles = [role_su, role_admin, role_agent]
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
  rescue ActiveRecord::RecordNotUnique => e
    Rails.logger.info("Something went wrong: #{e}")
  end
elsif Rails.env.test?
  Role.destroy_all
  Role.create(name: "super_admin")
  Role.create(name: "admin")
  Role.create(name: "agent")
end
