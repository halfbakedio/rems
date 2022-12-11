class Listing < ApplicationRecord
  acts_as_tenant(:account)

  belongs_to :account
  belongs_to :property
  belongs_to :agent, class_name: "User"

  has_many :open_houses
end
