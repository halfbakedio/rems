# frozen_string_literal: true

class PropertiesController < Gruf::Controllers::Base
  bind Rpc::Core::Service

  def initialize(kwargs)
    @received_properties = Hash.new { |h, k| h[k] = [] }
    super(**kwargs)
  end

  # Returns a property.
  #
  # @return [Rpc::GetPropertyResponse]
  def get_property
    property = Property.find(request.message.id.to_i)

    Rpc::GetPropertyResponse.new(
      property: Rpc::Property.new(
        id: property.id,
        name: "hi",
        price: 1234.00,
      ),
    )
  rescue ActiveRecord::RecordNotFound => _e
    fail!(:not_found, :property_not_found, "Failed to find Property with ID: #{request.message.id}")
  rescue StandardError => e
    set_debug_info(e.message, e.backtrace[0..4])
    fail!(:internal, :internal, "ERROR: #{e.message}")
  end
end
