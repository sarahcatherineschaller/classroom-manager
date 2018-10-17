$(function() {
	//load student index on users page
	$("a.load_students").on("click", function(e) {
		$.get(this.href).done(function(data) {

			var $students = $("div.students")
			$students.html("")
			data.forEach(function(student) {
				$students.append('<a href="students/' + student.id +'">' + student.last_name + ", " + student.first_name + "</a><br>");
			});
		});
		e.preventDefault();

	});

	//load classroom index on users page
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


	//submit student via AJAX
	// $("#new_student").on("submit", function(e) {
	// 	alert("you clicked submit!");

	// 	e.preventDefault();
	// });

});