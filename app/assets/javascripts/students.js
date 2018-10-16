$(function() {

	function loadStudent(data) {
		
		$(".js-next-student").attr("data-id", data["id"]);
		$(".js-previous-student").attr("data-id", data["id"]);
		var $student_name = $(".studentName").html('');
		$student_name.append("<h3>" + data.first_name + " " + data.last_name + "</h3>");
		
		var $classrooms = $(".studentClassrooms").html(''); 
		data['classrooms'].forEach(function(classroom) {
			subject = classroom.subject
			$classrooms.append(`<tr><td>${subject}`);
		});
	}

	$(".js-next-student").on("click", function(e) {
		
		var id = $(".js-next-student").attr("data-id") 
		$.get("/students/" + id + "/next", function(data) {
			

			loadStudent(data);
		});
		e.preventDefault();
	});

	$(".js-previous-student").on("click", function(e) {
		var id = $(".js-previous-student").attr("data-id")
		$.get("/students/" + id + "/previous", function(data) {
			loadStudent(data);
		});
		e.preventDefault();
	});

});

