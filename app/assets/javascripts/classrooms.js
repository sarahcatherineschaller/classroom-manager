

$(function() {

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

	$(".js-next").on("click", function(e) {
		var id = $(".js-next").attr("data-id") 
		var userId = parseInt(window.location.pathname.split("/")[2])
		$.get("/users/" + userId + "/classrooms/" + id + "/next", function(data) {
			loadClassroom(data);
		});
		e.preventDefault();
	});

	$(".js-previous").on("click", function(e) {
		var id = $(".js-previous").attr("data-id")
		var userId = parseInt(window.location.pathname.split("/")[2])
		$.get("/users/" + userId + "/classrooms" + id + "/previous", function(data) {
			loadClassroom(data);
		});
		e.preventDefault();
	});

});



