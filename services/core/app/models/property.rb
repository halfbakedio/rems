class Property < ApplicationRecord
  belongs_to :account

  has_many :listings
end
