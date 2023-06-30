# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_11_193828) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.boolean "lead"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id", limit: 64
    t.string "organization_id", limit: 64
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "property_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id", limit: 64
    t.string "organization_id", limit: 64
    t.index ["property_id"], name: "index_listings_on_property_id"
  end

  create_table "open_houses", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id", limit: 64
    t.string "organization_id", limit: 64
    t.index ["listing_id"], name: "index_open_houses_on_listing_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "address"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id", limit: 64
    t.string "organization_id", limit: 64
  end

  create_table "tokens", force: :cascade do |t|
    t.string "user_id", null: false
    t.string "uuid", null: false
    t.string "token_hash", null: false
    t.datetime "expires_at", default: "2023-07-01 19:08:35"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "listings", "properties"
  add_foreign_key "open_houses", "listings"
end
