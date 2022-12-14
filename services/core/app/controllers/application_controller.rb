# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include ActionController::RequestForgeryProtection
  include Pagy::Backend
  include Pundit::Authorization

  protect_from_forgery with: :null_session

  respond_to :json

  before_action :underscore_params!
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  def authenticate_user
    return if request.headers["Authorization"].blank?

    authenticate_or_request_with_http_token do |token|
      jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
      @current_user_id = jwt_payload["id"]
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      head :unauthorized
    end
  end

  def authenticate_user!(_options = {})
    head :unauthorized unless signed_in?
  end

  def current_user
    @current_user ||= super || User.find(@current_user_id)
  end

  def current_account
    @current_account ||= current_user.try(:account)
  end
  helper_method :current_account

  def signed_in?
    @current_user_id.present?
  end

  def underscore_params!
    params.deep_transform_keys!(&:underscore)
  end
end
