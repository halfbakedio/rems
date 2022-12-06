module Api
  module V1
    class OpenHousesController < ApplicationController
      before_action :authenticate_user!

      def show
        @open_house = OpenHouse.find(params[:id])
      end
    end
  end
end
