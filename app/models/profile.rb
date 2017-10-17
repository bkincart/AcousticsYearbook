class Profile < ApplicationRecord
  belongs_to :industry
  belongs_to :location
  belongs_to :user

  validates_presence_of :graduation_year, :major, :occupation
  validates :graduation_year, numericality: { greater_than: 1993 }
  validates_numericality_of :zip, :phone
end
