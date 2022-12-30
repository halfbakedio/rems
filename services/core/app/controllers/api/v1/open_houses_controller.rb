module Api
  module V1
    class OpenHousesController < ApplicationController
      before_action :authenticate_user!

      def show
        @open_house = OpenHouse.find(params[:id])

        render formats: :json
      end

      def index
        @pagy, @open_houses = pagy(
          OpenHouse.all,
          page: params[:page],
        )

        render formats: :json
      end
    end
  end
end
