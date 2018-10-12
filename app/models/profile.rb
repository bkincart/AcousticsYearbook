class Profile < ApplicationRecord
  mount_uploader :picture, ProfilePhotoUploader

  belongs_to :industry
  belongs_to :user

  validates_presence_of :major, :occupation
  validates :graduation_year, numericality: { greater_than: 1992, less_than: 10000 }, presence: true
  validates :zip,
    numericality: { only_integer: true },
    length: { is: 5 },
    allow_blank: true

  validates_uniqueness_of :graduation_year
end
