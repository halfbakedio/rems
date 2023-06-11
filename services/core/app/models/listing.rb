class Listing < ApplicationRecord
  belongs_to :property

  has_many :open_houses
end
