require "rails_helper"

RSpec.describe Api::V1::ProfilesController, type: :controller do
  let(:parsed_response) { JSON.parse(response.body) }

  before(:each) {
    @request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in user
  }

  describe "GET #show" do
    let(:user) { create :user }
    it "shows the information for the current user" do
      get :index

      expect(response.status).to eq 200
      expect(parsed_response["user"]["id"]).to eq user.id
      expect(parsed_response["user"]["email"]).to eq user.email
      expect(parsed_response["user"]["first_name"]).to eq user.first_name
      expect(parsed_response["user"]["last_name"]).to eq user.last_name
    end
  end

  describe "POST #create" do
    let(:user) { create :user }

    let(:payload) {
      {
        profile: {
          address: '42 Wallaby Way',
          audition_song: 'Killing Me Softly',
          blurb: 'Always singer, now developer',
          city: 'Boston',
          email_visible: true,
          family: 'Father Neenan',
          graduation_year: 2011,
          high_school: 'BC High',
          hometown: 'Seattle',
          industry_id: 2,
          last_name_bc: 'Natchez',
          location_id: 5,
          major: 'Music',
          occupation: 'Software Developer',
          phone: '867-5309',
          solos: 'Life is a Highway, Kyrie Eleison',
          state: 'MA',
          zip: '02467'
        }
      }
    }

    it "successfully creates a profile for the user" do
      post :create, params: payload
    end
  end
end
