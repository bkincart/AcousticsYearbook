FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@test.com" }
    first_name "Alfred"
    last_name "Alien"
    password "password"

    factory :facebook do
      provider "facebook"
      uid SecureRandom.hex
    end
  end
end
