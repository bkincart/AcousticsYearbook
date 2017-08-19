class AddCustomColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :last_name_at_bc, :string
    add_column :users, :provider, :string
    add_column :users, :uid, :string
  end
end
