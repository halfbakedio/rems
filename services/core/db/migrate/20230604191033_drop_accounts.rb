class DropAccounts < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :account_id
    remove_column :open_houses, :account_id
    remove_column :properties, :account_id
    drop_table :accounts
  end
end
