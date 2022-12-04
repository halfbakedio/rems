class OpenHouse < ApplicationRecord
  belongs_to :account
  belongs_to :listing
end
