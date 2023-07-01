class UpdateUserId < ActiveRecord::Migration[7.0]
  def change
    remove_column(:listings, :agent_id)
    add_column(:contacts, :user_id, :string, limit: 64)
    add_column(:listings, :user_id, :string, limit: 64)
    add_column(:open_houses, :user_id, :string, limit: 64)
    add_column(:properties, :user_id, :string, limit: 64)
  end
end
