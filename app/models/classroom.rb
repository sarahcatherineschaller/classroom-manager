class Classroom < ApplicationRecord
	belongs_to :user
	has_many :student_classrooms 
	has_many :students, through: :student_classrooms 

	validates :subject, presence: true

	before_validation :make_title_case 

	scope :most_students, -> { order("classrooms.student_id DESC").limit(1) }

	def make_title_case 
		self.subject = self.subject.titlecase 
	end
end
