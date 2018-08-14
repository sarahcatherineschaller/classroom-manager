class Classroom < ApplicationRecord
	belongs_to :user
	has_many :student_classrooms 
	has_many :students, through: student_classrooms 
end
