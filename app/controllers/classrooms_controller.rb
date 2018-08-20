class ClassroomsController < ApplicationController
	def index 
		@classrooms = User.find(params[:user_id]).classrooms 
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
			redirect_to user_classroom_path(@user.id, @classroom.id)
		else 
			render 'new'
		end
	end


	def show 
		@user = current_user
		@classroom = Classroom.find_by(id:params[:id])
		@user.id = @classroom.user_id
	end 

	def edit 
		@user = current_user
		@classroom = Classroom.find_by(id:params[:id])
		@classroom.user_id = @user.id
	end

	def update 
		@user = current_user
		@classroom = Classroom.find_by(id:params[:id])
		if @classroom.valid?
			@classroom.update(classroom_params)
			redirect_to user_classroom_path(@user.id,@classroom.id)
		else 
			render 'edit'
		end
	end

	def destroy
		@user = current_user
		@classroom = Classroom.find_by(id:params[:id])
		@classroom.user_id = @user.id
		@classroom.destroy
		redirect_to user_path 
	end

	private 
	def classroom_params 
		params.require(:classroom).permit(:subject, :user_id, student_ids:[])
	end
end