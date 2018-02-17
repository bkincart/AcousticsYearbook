class ChangeProfileEmailVisibleToEmailHidden < ActiveRecord::Migration[5.1]
  def change
    rename_column :profiles, :email_visible, :email_hidden
  end
end
