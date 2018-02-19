class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :file, null: false
      t.string :caption
      t.belongs_to :school_year

      t.timestamps null: false
    end
  end
end
