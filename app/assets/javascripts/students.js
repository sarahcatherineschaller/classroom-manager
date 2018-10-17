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



	$("#new_student").on("submit", function(e) {
		var values = $(this).serialize(); 
		var posting = $.post('/students', values);

		posting.done(function(data) {
			
			var student = data;
			$(".studentName").append('<a href="students/' + student.id +'">' + student.last_name + ", " + student.first_name + "</a><br>");
			$("#student_first_name").val("");
			$("#student_last_name").val("");
			$("#student_grade").val("");
		});
		e.preventDefault();
	});

});

