# frozen_string_literal: true

require "clerk/authenticatable"

class ApplicationController < ActionController::Base
  include ActionController::RequestForgeryProtection
  include Clerk::Authenticatable
  include Pagy::Backend
  include Pundit::Authorization

  protect_from_forgery with: :null_session

  # respond_to :json

  before_action :underscore_params!

  helper_method :current_user
  helper_method :current_organization

  private

  def authenticate_user!(_options = {})
    head :unauthorized unless signed_in?
  end

  def current_user
    @current_user ||= clerk_user
  end

  def current_organization
    @current_organization ||= current_user.try(:organization)
  end

  def signed_in?
    clerk_user_signed_in?
  end

  def underscore_params!
    params.deep_transform_keys!(&:underscore)
  end
end
