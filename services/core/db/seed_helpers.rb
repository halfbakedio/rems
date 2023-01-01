def find_or_create_user(account:, email:, username:, password:, confirm: false)
  user = User.find_by(email: email)

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
  property = Property.find_by(address: address)
  if property.nil?
    property = Property.create(
      account: account,
      address: address,
      image: image,
    )
  end
  property
end

def first_or_create_listing(account:, property:, agent:)
  listing = property.listings.first
  if listing.nil?
    listing = Listing.create(
      account: account,
      property: property,
      agent: agent,
    )
  end
  listing
end

def first_or_create_open_house(account:, listing:, start_at:, end_at:)
  open_house = listing.open_houses.first
  OpenHouse.create(
    account: account,
    listing: listing,
    start_at: start_at,
    end_at: end_at,
  )
end
