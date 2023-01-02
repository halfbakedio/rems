class AccountPolicy < ApplicationPolicy
  def create?
    user.role? :super_admin
  end

  def update?
    user.role? :super_admin || (user.role? :admin && user.account == account)
  end

  class Scope < AccountPolicy
    attr_reader :user, :scope

    def initialize(user, scope)
      super(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      if user.role? :super_admin
        @scope.all
      else
        @scope.where(id: @user.account_id)
      end
    end
  end
end
