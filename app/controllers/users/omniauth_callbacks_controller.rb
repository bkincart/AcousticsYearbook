class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
     @user = User.create_from_omniauth(request.env["omniauth.auth"])
     sign_in_and_redirect @user
  end
end
