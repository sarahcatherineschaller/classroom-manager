class StudentsController < ApplicationController
	def index 
		@students = Student.all
		render json: @students.to_json
	end 

	def new 
		@student = Student.new 
		@user = current_user
	end

	def create 
		@student = Student.new(student_params)
		@classroom = Classroom.find_by(id:params[:id])
		if @student.valid? 
			@student.save 
			redirect_to student_path(@student)
		else 
			render 'new'
		end
	end

	def show 
		@student = Student.find_by(id:params[:id])
		@user = current_user
		@classrooms = @student.classrooms 
		respond_to do |format|
			format.html {render :show}
			format.json do 
				render json: @student.to_json 
			end 
		end
		
	end 


	def edit 
		@student = Student.find_by(id:params[:id])
	end 

	def update 
		@student = Student.find_by(id:params[:id])
		@classroom = Classroom.find_by(id:params[:id])
		if @student.valid? 
			@student.update(student_params)
			redirect_to student_path(@student)
		else 
			render 'edit'
		end
	end

	def destroy 
		@user = current_user
		@student = Student.find_by(id:params[:id])
		@student.destroy
		redirect_to root_path
	end

	def next_student 
		@student = Student.find(params[:id])
		@next_student = @student.next 
		render json: @next_student
	end 

	def previous_student
		@student = Student.find(params[:id])
		@previous_student = @student.previous 
		render json: @previous_student
	end



	private
	def student_params 
		params.require(:student).permit(:first_name, :last_name, :grade, classroom_ids:[])
	end 

end