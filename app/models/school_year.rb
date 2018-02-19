class SchoolYear < ApplicationRecord
  has_many :photos

  validates :year_name, presence: true
end
