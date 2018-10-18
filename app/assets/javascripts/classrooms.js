

$(function() {

	//append classroom info to show page
	function loadClassroom(data) {
		$(".js-next").attr("data-id", data["id"]);
		$(".js-previous").attr("data-id", data["id"]);
		var $subject = $(".classroomSubject").html('');
		$subject.append("<h3>" + data.subject + "</h3>");
		
		var $students = $(".classroomStudents").html(''); 
		data['students'].forEach(function(student) {
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
			loadClassroom(data);
		});
		e.preventDefault();
	});

	//previous button
	$(".js-previous").on("click", function(e) {
		var id = $(".js-previous").attr("data-id")
		var userId = parseInt(window.location.pathname.split("/")[2])
		$.get("/users/" + userId + "/classrooms/" + id + "/previous", function(data) {
			loadClassroom(data);
		});
		e.preventDefault();
	});


	//new classroom form on user index page
	$("#new_classroom").on("submit", function(e) {
		var userId = parseInt(this.action.split("/")[4])
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


	//make classroom object
	function Classroom(id, subject, students) {
		this.id = id 
		this.subject = subject 
		this.students = students
	}



});



