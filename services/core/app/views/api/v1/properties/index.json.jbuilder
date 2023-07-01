json.array! @properties do |property|
  json.partial! "api/v1/properties/property", property: property
end
