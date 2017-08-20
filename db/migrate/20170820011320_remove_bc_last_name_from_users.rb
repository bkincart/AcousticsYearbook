class RemoveBcLastNameFromUsers < ActiveRecord::Migration[5.1]
  def up
    remove_column :users, :last_name_at_bc
  end

  def down
    add_column :users, :last_name_at_bc, :string
  end
end
