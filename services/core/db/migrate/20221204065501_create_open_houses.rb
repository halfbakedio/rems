class CreateOpenHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :open_houses do |t|
      t.references :account, null: false, foreign_key: true
      t.references :listing, null: false, foreign_key: true

      t.datetime :start_at
      t.datetime :end_at

      t.timestamps
    end
  end
end
