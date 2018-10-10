

$(function() {
	$("a.load_students").on("click", function(json) {
		var $students = $("div.students")
		$students.html("")

		json.forEach(function(classroom) {
			$students.append("<li>" + classroom.students + "</li>");
		});

	})

	$(".js-next").on("click", function() {
		var nextId = parseInt($(".js-next").attr("data-id")) + 1;
		$.getJSON("/users/:user_id/classrooms/" + nextId + "/classroom_data", function(data) {
			 
			$(".classroomSubject").text(data["subject"]);			

			$(".js-next").attr("data-id", data["id"]);
		});
	});

	$(".js-previous").on("click", function() {
		var previousId = parseInt($".js-previous").attr("data-id") - 1;
		$.getJSON("/users/:user_id/classrooms/" + previousId + "/classroom_data", function(data) {
			 
			$(".classroomSubject").text(data["subject"]);			

			$(".js-previous").attr("data-id", data["id"]);
		});
	});

});

