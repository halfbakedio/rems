def find_or_create_user(account:, email:, username:, password:, confirm: false)
  user = User.find_by_email(email)

  if user.nil?
    user = User.create(
      account: account,
      email: email,
      username: username,
      password: password,
    )
    user.confirm if confirm
    user.save
  end

  user
end

def find_or_create_property(account:, address:, image:)
  property = Property.find_by_address(address)
  property = Property.create(address: address, image: image) if property.nil?
  property
end

def first_or_create_listing(account:, property:)
  listing = property.listings.first
  listing = Listing.create(account: account, property: property) if listing.nil?
  listing
end

def first_or_create_open_house(account:, listing:, start_at:, end_at:)
  open_house = listing.open_houses.first
  open_house = OpenHouse.create(
    account: account,
    listing: listing,
    start_at: start_at,
    end_at: end_at,
  )
  open_house
end
