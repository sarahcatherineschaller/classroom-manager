class UsersController < ApplicationController 
	def index 
		@classrooms = current_user.classrooms
		@classroom = current_user.classrooms.build

		@students = Student.all 
		@student = @students.build 
	end 

end