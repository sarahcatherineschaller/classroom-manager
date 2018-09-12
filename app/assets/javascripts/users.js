$(function() {
	// $("a.my_classrooms").on("click", function(e) {
	// 	// $.ajax({
	// 	// 	method: "GET",
	// 	// 	url: this.href
	// 	// }).done(function(data) {
	// 	// 	$("div.classrooms").html(data)
	// 	// })

	// 	// $.get(this.href).success(function(data) {
	// 	// 	$("div.classrooms").html(data)
	// 	// })

	// 	$.get(this.href).done(function(json) {
	// 		var $classrooms = $("div.classrooms")
	// 		$classrooms.html("") 

	// 		json.forEach(function(classroom) {
	// 			$classrooms.append("<li>" + classroom.subject + "</li>");
	// 		})

	// 	})

	// 	e.preventDefault();
	// });

	$("#new_classroom").on("submit", function(e) {
		

		e.preventDefault();
	})
});

