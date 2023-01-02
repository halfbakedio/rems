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
    Property.create(
      account: account,
      address: address,
      image: image,
    )
  else
    property
  end
end

def first_or_create_listing(account:, property:, agent:)
  listing = property.listings.first
  if listing.nil?
    Listing.create(
      account: account,
      property: property,
      agent: agent,
    )
  else
    listing
  end
end

def first_or_create_open_house(account:, listing:, start_at:, end_at:)
  open_house = listing.open_houses.first
  if open_house.nil?
    OpenHouse.create(
      account: account,
      listing: listing,
      start_at: start_at,
      end_at: end_at,
    )
  else
    open_house
  end
end
