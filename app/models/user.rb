class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook]

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_one :profile

  def self.create_from_omniauth(auth)
    where(provider: auth["provider"], uid: auth["uid"]).first_or_create do |user|
      user.email = auth["info"]["email"]
      user.password = Devise.friendly_token[0,20]
      user.first_name = auth["info"]["first_name"]
      user.last_name = auth["info"]["last_name"]
    end
  end
end
