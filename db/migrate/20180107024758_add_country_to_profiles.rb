class AddCountryToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :country, :string
  end
end
