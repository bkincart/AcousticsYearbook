class Photo < ApplicationRecord
  belongs_to :school_year, optional: true

  validates_presence_of :file
end
