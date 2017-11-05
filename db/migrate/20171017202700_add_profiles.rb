class AddProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.integer :graduation_year, null: false
      t.string :major, null: false
      t.string :occupation, null: false

      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone
      t.string :email_visible
      t.string :last_name_bc
      t.string :blurb
      t.string :high_school
      t.string :audition_song
      t.string :solos
      t.string :hometown
      t.string :family

      t.belongs_to :location
      t.belongs_to :industry
    end
  end
end
