class ListingPolicy < ApplicationPolicy
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
        @scope.where(account_id: @user.account_id)
      end
    end
  end
end
