class Property < ApplicationRecord
  acts_as_tenant(:account)

  belongs_to :account

  has_many :listings
end
