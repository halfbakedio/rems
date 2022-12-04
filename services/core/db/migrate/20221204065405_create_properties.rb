class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.references :account, null: false, foreign_key: true
      t.string :address
      t.string :image

      t.timestamps
    end
  end
end
