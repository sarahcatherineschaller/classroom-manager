$(function() {
	$("a.my_classrooms").on("click", function(e) {
		$.get(this.href).done(function(json) {
			var $classrooms = $("div.classrooms")
			$classrooms.html("") 

			json.forEach(function(classroom) {
				$classrooms.append("<li>" + classroom.subject + "</li>");
			})

		})

		e.preventDefault();
	});

	$('#new_classroom').on("submit", function(e) {
		e.preventDefault();
		debugger

		$.ajax({
			type: "POST",
			url: this.action,
			data: $(this).serialize(),
			dataType: "json",
			success: function(response) {
				
				// var $subject = $("div.subject").html("");
				// $subject.append("<li>" + response.subject + "</li>")

			}
		// })

		// var posting = $.post(this.action, values);

		// posting.done(function(data) {
		// 	var classroom = data;
		// 	$("#subject").text(classroom["subject"]);
		// });
		})


	})

});

