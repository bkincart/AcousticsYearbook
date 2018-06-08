class Api::V1::PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def create
    params.each do |param_key, param_value|
      if param_key.include?('photo')
        photo = Photo.new(file: params[param_key], school_year_id: params[:year_id])
        render json: {errors: photo.errors}, status: :unprocessable_entity if !photo.save!
      end
    end
    render json: {message: 'Your photos have been saved!'}, status: :created
  end
end
