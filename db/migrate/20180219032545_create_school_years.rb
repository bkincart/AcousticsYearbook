class CreateSchoolYears < ActiveRecord::Migration[5.1]
  def change
    create_table :school_years do |t|
      t.string :year_name, null: false

      t.timestamps null: false
    end
  end
end
