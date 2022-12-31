class AccountPolicy < ApplicationPolicy
  def create?
    user.role? :super_admin
  end

  def update?
    user.role? :admin
  end
end
