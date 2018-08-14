class CreateClassrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :classrooms do |t|
      t.integer :user_id
      t.string :subject

      t.timestamps
    end
  end
end
