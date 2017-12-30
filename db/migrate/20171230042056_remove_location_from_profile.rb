class RemoveLocationFromProfile < ActiveRecord::Migration[5.1]
  def up
    remove_column :profiles, :location_id
  end

  def down
    add_belongs_to :profiles, :location
  end
end
