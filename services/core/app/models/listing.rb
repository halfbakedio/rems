class Listing < ApplicationRecord
  belongs_to :account
  belongs_to :property

  has_many :open_houses
end
