class OpenHouse < ApplicationRecord
  acts_as_tenant(:account)

  belongs_to :account
  belongs_to :listing
end
