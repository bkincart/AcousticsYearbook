require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:first_name).when("Brianna", "Brian") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Kincart", "Crowley") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when(nil, "", "test@test", "test.com", "test") }

  it { should have_valid(:password).when("password", "password123") }
  it { should_not have_valid(:password).when(nil, "", "pass") }

  describe "uniqueness" do
    subject{ create(:user) }
    it { should validate_uniqueness_of(:email) }
  end

  describe "#create_from_omniauth" do
    let(:valid_auth) {
      {
        "provider"=>"facebook",
        "uid"=> SecureRandom.hex,
        "info"=> {
          "email"=>"alfred@bc.edu",
          "first_name"=>"Alfred",
          "last_name"=>"Alien"
        }
      }
    }

    let(:invalid_auth) {
      {
        "provider"=> "facebook",
        "uid"=> SecureRandom.hex,
        "info"=> {
          "email"=> "alfred@bc",
          "first_name"=> "Alfred"
        }
      }
    }

    it "should successfully create a user if given valid auth data" do
      expect{User.create_from_omniauth(valid_auth)}.to change{User.count}.by(1)
      expect(User.last).to have_attributes(first_name: "Alfred", last_name: "Alien", email: "alfred@bc.edu")
    end

    it "should not create a user if given invalid auth data" do
      expect{User.create_from_omniauth(invalid_auth)}.to change{User.count}.by(0)
    end
  end
end
