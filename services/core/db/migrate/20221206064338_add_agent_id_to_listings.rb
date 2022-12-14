class AddAgentIdToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :agent_id, :integer
  end
end
