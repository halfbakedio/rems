class CreateTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :tokens do |t|
      t.string :user_id, null: false
      t.string :hash, null: false
      t.datetime :expires_at, default: DateTime.now + 2.weeks

      t.timestamps
    end
  end
end
