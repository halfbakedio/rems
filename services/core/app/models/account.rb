class Account < ApplicationRecord
  # acts_as_tenant

  has_many :users
  has_many :properties

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :subdomain, presence: true, uniqueness: { case_sensitive: false }
end
