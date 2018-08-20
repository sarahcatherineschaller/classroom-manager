class AddStudentIdToClassrooms < ActiveRecord::Migration[5.2]
  def change
    add_column :classrooms, :student_id, :integer
  end
end
