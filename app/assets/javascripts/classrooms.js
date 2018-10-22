

$(function() {

	function Classroom(id, students, subject, user) {
		this.id = id 
		this.students = students 
		this.subject = subject 
		this.user = user 
	}

	Classroom.prototype.loadClassroom = function() {
		$(".js-next").attr("data-id", this.id);
		$(".js-previous").attr("data-id", this.id);

		let $subject = $(".classroomSubject").html('');
		$subject.append("<h3>" + this.subject + "</h3>");

		let $students = $(".classroomStudents").html(''); 
		let students = this.students
		students.forEach(function(student) {
			first_name = student.first_name 
			last_name = student.last_name 
			$students.append(`<tr><td>${first_name} ${last_name}`);
		})
	}

	//next button
	$(".js-next").on("click", function(e) {
		var id = $(".js-next").attr("data-id") 
		var userId = parseInt(window.location.pathname.split("/")[2])
		$.get("/users/" + userId + "/classrooms/" + id + "/next", function(data) {

			let classroom = new Classroom(data.id, data.students, data.subject, data.user)

			classroom.loadClassroom()
		});
		e.preventDefault();
	});

	//previous button
	$(".js-previous").on("click", function(e) {
		var id = $(".js-previous").attr("data-id")
		var userId = parseInt(window.location.pathname.split("/")[2])
		$.get("/users/" + userId + "/classrooms/" + id + "/previous", function(data) {
			
			let classroom = new Classroom(data.id, data.students, data.subject, data.user)

			classroom.loadClassroom()
		});
		e.preventDefault();
	});


	//new classroom form on user index page
	$("#new_classroom").on("submit", function(e) {

		var userId = parseInt(this["data-user_id"])
		var values = $(this).serialize(); 

		var posting = $.post('/users/' + userId + '/classrooms', values)


		posting.done(function(data) {

			var classroom = data;
			$(".subject").append('<a href="users/' + classroom.user_id + '/classrooms/' + classroom.id + '">' + classroom.subject + "</a><br>");
			$("#classroom_subject").val("");
		});
		e.preventDefault();
	});

	//load classroom on user index page
	$("a.load_classrooms").on("click", function(e) {

		$.get(this.href).done(function(data) {

			
		
			var $classrooms = $("div.classrooms")
			$classrooms.html("")
			data.forEach(function(classroom) {
				$classrooms.append('<a href="users/' + classroom.user_id + '/classrooms/' + classroom.id + '">' + classroom.subject + "</a><br>");
			});

		});
		e.preventDefault();
	});

	//alphabetize button
	$(".alphabetize").on("click", function(e) {
		var userId = $(this).attr("data-id")
		$.get('/users/' + userId + '/classrooms').done(function(data) {
			var $classrooms = $("div.classrooms") 
			$classrooms.html("")

			var list = []

			data.forEach(function(classroom) {
				list.push(classroom.subject + "<br>")
				list.sort()
			})

			$classrooms.append(list)
			

		})
		

		e.preventDefault();
	})




});



