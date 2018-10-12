class Api::V1::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def create
