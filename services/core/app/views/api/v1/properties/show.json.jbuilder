json.property do |json|
  json.partial! "api/v1/properties/property", property: @property
end
