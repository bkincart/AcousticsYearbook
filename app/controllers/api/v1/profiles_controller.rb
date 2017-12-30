class Api::V1::ProfilesController < ApplicationController
  def index
    render json: current_user
  end

  def create
    @profile = Profile.new(profile_params)
    @profile.user = current_user

    if create_industry
      industry = Industry.create(name: params[:new_industry])
    else
      industry = Industry.find(params[:industry_id])
    end

    @profile.industry = industry
    if @profile.save
      render json: @profile, status: :created
    else
      render json: { error: @profile.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:address, :audition_song, :blurb, :city, :email_visible, :family, :graduation_year, :high_school, :hometown, :last_name_bc, :location_id, :major, :occupation, :phone, :solos, :state, :zip)
  end
end
