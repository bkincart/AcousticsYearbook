class AddUserToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :user_id, :bigint
    add_index :profiles, :user_id
  end
end
