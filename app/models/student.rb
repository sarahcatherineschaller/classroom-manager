class Student < ApplicationRecord
	has_many :users, through: :classrooms 
	has_many :student_classrooms 
	has_many :classrooms, through: :student_classrooms

	validates :first_name, :last_name, :grade, presence: true 

	before_validation :make_title_case 

	def make_title_case 
		self.first_name = self.first_name.titlecase 
		self.last_name = self.last_name.titlecase 
	end
end
