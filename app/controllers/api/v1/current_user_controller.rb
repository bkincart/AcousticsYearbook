class Api::V1::CurrentUserController < ApplicationController
  def index
    if current_user
      render json: current_user
    else
      render status: :unprocessable_entity, json: { error: 'There is no user signed in.' }
    end
  end
end
