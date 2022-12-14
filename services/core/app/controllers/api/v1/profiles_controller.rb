module Api
  module V1
    class ProfilesController < ApplicationController
      before_action :authenticate_user!

      def show
        @user = User.find_by_username(params[:username])
      end
    end
  end
end
