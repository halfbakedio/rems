json.array! @open_houses do |open_house|
  json.partial! "api/v1/open_houses/open_house", open_house: open_house
  json.property do
    json.address open_house.listing.property.address
  end
  json.agent do
    json.name open_house.listing.agent.email
  end
end
