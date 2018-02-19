class Api::V1::SchoolYearsController < ApplicationController
  def index
    render json: SchoolYear.all
  end
end
