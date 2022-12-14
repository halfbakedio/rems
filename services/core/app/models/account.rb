class Account < ApplicationRecord
  has_many :users
  has_many :properties

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
