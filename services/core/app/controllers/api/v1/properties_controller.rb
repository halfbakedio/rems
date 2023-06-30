module Api
  module V1
    class PropertiesController < ApplicationController
      before_action :authenticate_user!

      def index
        @pagy, @properties = pagy(
          Property.all,
          page: params[:page],
        )

        render formats: :json
      end

      def show
        @property = Property.find(params[:id])

        render formats: :json
      end
    end
  end
end
