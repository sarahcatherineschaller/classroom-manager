class ClassroomsController < ApplicationController
	before_action :set_classroom, only: [:show, :edit, :update, :destroy]

	def index 
		@classrooms = User.find(params[:user_id]).classrooms 
		@students = Student.all
		@classroom = @classrooms.first

		render 'show'
	end 
	

	def new 
		@classroom = Classroom.new
		@user = current_user
	end

	def create 
		@classroom = Classroom.new(classroom_params)
		@user = current_user
		@classroom.user_id = @user.id
		if @classroom.valid?
			@classroom.save
			render 'classrooms/show', :layout => false
		else 
			render 'users/index'
		end
	end

	def most_students
		@classrooms = Classroom.all 
		@students = Student.all 
		@classroom = @classrooms.find_by(params[:number_of_students])
	end


	def show 
		@user = current_user
		@user.id = @classroom.user_id
	end 

	def edit 
		@user = current_user
		@classroom.user_id = @user.id
	end

	def update 
		@user = current_user
		if @classroom.valid?
			@classroom.update(classroom_params)
			redirect_to user_classroom_path(@user.id,@classroom.id)
		else 
			render 'edit'
		end
	end

	def destroy
		@user = current_user
		@classroom.user_id = @user.id
		@classroom.destroy
		redirect_to user_classroom_path
	end

	def classroom_data
		classroom = Classroom.find(params[:id])
		render json: classroom.to_json
	end

	private 

	def set_classroom 
		@classroom = Classroom.find(params[:id])
	end 

	def classroom_params 
		params.require(:classroom).permit(:subject, :user_id, student_ids:[])
	end
end