class CreateClassrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :classrooms do |t|
    	t.integer :user_id 
    	t.integer :student_id 
    	t.string :subject
    end
  end
end
