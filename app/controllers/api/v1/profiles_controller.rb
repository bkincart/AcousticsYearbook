class Api::V1::ProfilesController < ApiController
  skip_before_action :verify_authenticity_token, only: :create

  def create
    @profile = Profile.new(profile_params)
    @profile.user = current_user

    if params[:profile][:industry_id]
      industry = Industry.find(params[:profile][:industry_id])
    else
      industry = Industry.create(name: params[:profile][:new_industry])
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
    params.require(:profile).permit(:address, :audition_song, :blurb, :city, :country, :email_hidden, :family, :graduation_year, :high_school, :hometown, :last_name_bc, :major, :occupation, :phone, :solos, :state, :zip)
  end
end
