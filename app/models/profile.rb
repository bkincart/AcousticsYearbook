class Profile < ApplicationRecord
  belongs_to :industry
  belongs_to :user

  validates_presence_of :graduation_year, :major, :occupation
  validates :graduation_year, numericality: { greater_than: 1992, less_than: 10000 }
  validates :zip, numericality: true, length: { is: 5 }
end
