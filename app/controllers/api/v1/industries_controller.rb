class Api::V1::IndustriesController < ApplicationController
  def index
    render json: Industry.all
  end
end
