require "rails_helper"

RSpec.describe Api::V1::ProfilesController, type: :controller do
  let(:parsed_response) { JSON.parse(response.body) }

  before(:each) {
    @request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in user
  }

  describe "POST #create" do
    let(:user) { create :user }

    it "successfully creates a profile for the user when given all necessary information" do
      valid_payload = {
        address: '42 Wallaby Way',
        audition_song: 'Killing Me Softly',
        blurb: 'Always singer, now developer',
        city: 'Boston',
        inventory_id: nil,
        new_industry: 'Software Development',
        email_hidden: true,
        family: 'Father Neenan',
        graduation_year: 2011,
        high_school: 'BC High',
        hometown: 'Seattle',
        last_name_bc: 'Natchez',
        major: 'Music',
        occupation: 'Software Developer',
        phone: '867-5309',
        solos: 'Life is a Highway, Kyrie Eleison',
        state: 'MA',
        zip: '02467'
      }

      post :create, params: valid_payload

      expect(response.status).to eq 201
      expect(parsed_response["user_id"]).to eq user.id
      expect(parsed_response["blurb"]).to eq valid_payload[:blurb]
    end

    it "returns an error when required info isn't provided" do
      incomplete_payload = {
        inventory_id: nil,
        new_industry: 'Software Development',
        phone: '867-5309',
        zip: '2467'
      }
      post :create, params: incomplete_payload

      expect(response.status).to eq 422
      expect(parsed_response["error"]).to include "Graduation year can't be blank"
      expect(parsed_response["error"]).to include "Graduation year is not a number"
      expect(parsed_response["error"]).to include "Major can't be blank"
      expect(parsed_response["error"]).to include "Occupation can't be blank"
      expect(parsed_response["error"]).to include "Zip is the wrong length (should be 5 characters)"
    end
  end
end
