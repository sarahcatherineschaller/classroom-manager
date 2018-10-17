class ClassroomsController < ApplicationController
	before_action :set_classroom, only: [:show, :edit, :update, :destroy]

	def index 
		@classrooms = User.find(params[:user_id]).classrooms 
		@user = current_user
		render json: @classrooms.to_json
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
			render json: @classroom, status: 201
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
		@students = @classroom.students

		respond_to do |format| 
			format.html {render :show}
			format.json do 
				render json: @classroom.to_json 
			end 
		end
	end

	def edit 
		@user = current_user
		@classroom.user_id = @user.id
	end

	def update 
		@user = current_user
		if @classroom.valid?
			@classroom.update(classroom_params)
			redirect_to root_path
		else 
			render 'edit'
		end
	end

	def destroy
		@user = current_user
		@classroom.user_id = @user.id
		@classroom.destroy
		redirect_to root_path
	end

	def next_classroom 
		@classroom = Classroom.find(params[:id])
		@next_classroom = @classroom.next 
		render json: @next_classroom 
	end 

	def previous_classroom 
		@classroom = Classroom.find(params[:id])
		@previous_classroom = @classroom.previous 
		render json: @previous_classroom 
	end



	private 

	def set_classroom 
		@classroom = Classroom.find(params[:id])
	end 

	def classroom_params 
		params.require(:classroom).permit(:subject, :user_id, student_ids:[])
	end
end