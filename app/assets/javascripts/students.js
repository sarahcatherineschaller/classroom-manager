// $(function() {
// 	$("a.student-info").on("click", function(e) {

// 		var id = $(this).data("id");
// 		$.get("/students/" + id + ".json", function(data) {
// 			var student = data;

// 			var gradeText = "<p>Grade: " + student["grade"] + "</p>";

// 			var classrooms = student["classrooms"];
// 			var classroomList = "";
// 			classrooms.forEach(function(classroom) {
// 				classroomList += classroom["subject"] + "<br>"
// 			});
			


// 			$("#student-" + id + "-grade").html(gradeText);
// 			$("#student-" + id + "-classrooms").html(classroomList);
		


// 		});
// 		e.preventDefault();
// 	});
// }); 