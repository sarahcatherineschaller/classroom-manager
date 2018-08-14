class Student < ApplicationRecord
	has_many :users, through: :classrooms 
	has_many :student_classrooms 
	has_many :classrooms, through: :student_classrooms

	validates :first_name, :last_name, :grade, presence: true 

	before_validation :make_title_case 

	scope :elementary_school, -> { where(grade: [1,2,3,4,5]) }
	scope :middle_school, -> { where(grade: [6,7,8]) }
	scope :high_school, -> { where(grade: [9,10,11,12]) }

	def make_title_case 
		self.first_name = self.first_name.titlecase 
		self.last_name = self.last_name.titlecase 
	end

	def full_name
		"#{first_name} #{last_name}"
	end

	def last_name_first_name
		"#{last_name}, #{first_name}"
	end

end
