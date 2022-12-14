class Contact < ApplicationRecord
  acts_as_tenant(:account)
end
