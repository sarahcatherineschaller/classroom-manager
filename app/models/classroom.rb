class Classroom < ApplicationRecord
	belongs_to :user
	belongs_to :student
	has_many :student_classrooms 
	has_many :students, through: :student_classrooms 

	validates :subject, presence: true, uniqueness: true 

	before_validation :make_title_case 

	# scope :most_students, -> { where(classroom_id: id).group(‘subject’) }

	def make_title_case 
		self.subject = self.subject.titlecase 
	end
end
