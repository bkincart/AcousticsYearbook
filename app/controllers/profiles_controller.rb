class ProfilesController < ApplicationController
  def edit
    @profile = Profile.find(params[:id])
    if Rails.env.production?
      @bucket = ENV["PRODUCTION_S3_BUCKET"]
    else
      @bucket = ENV["DEVELOPMENT_S3_BUCKET"]
    end
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update_attributes(profile_params)
      redirect_to "/profiles/#{@profile.id}"
    else
      render :edit
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:picture)
  end
end
