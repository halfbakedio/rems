class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :validatable,
    :confirmable,
    :trackable

  belongs_to :account

  has_many :assignments
  has_many :roles, through: :assignments
  has_many :listings

  validates :username,
    uniqueness: { case_sensitive: true },
    format: { with: /\A[a-zA-Z0-9]+\z/ },
    presence: true,
    allow_blank: false

  def role?(role)
    roles.any? { |r| r.name.underscore.to_sym == role }
  end

  def generate_jwt
    JWT.encode(
      {
        id: id,
        exp: 60.days.from_now.to_i,
      },
      Rails.application.secrets.secret_key_base,
    )
  end
end
