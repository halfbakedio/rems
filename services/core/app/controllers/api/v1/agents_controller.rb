module Api
  module V1
    class AgentsController < ApplicationController
      before_action :authenticate_user!

      # test with:
      # curl -H "accept: application/vnd.agents+json" \
      #   http://localhost:3000/api/v1/agents.json
      def index
        agents = [
          { id: 1, name: "First" },
          { id: 2, name: "Second" },
        ]

        render json: { agents: agents }
      end
    end
  end
end
