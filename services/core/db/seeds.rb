# frozen_string_literal: true

if Rails.env.development?
  admin = User.create(
    email: "admin@rems.com",
    username: "admin",
    password: "remsrems",
  )
  admin.confirm
end
