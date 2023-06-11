class AddOrganizationId < ActiveRecord::Migration[7.0]
  def change
    add_column(:contacts, :organization_id, :string, limit: 64)
    add_column(:listings, :organization_id, :string, limit: 64)
    add_column(:open_houses, :organization_id, :string, limit: 64)
    add_column(:properties, :organization_id, :string, limit: 64)
  end
end
