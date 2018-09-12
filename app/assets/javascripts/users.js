$(function() {
	$("a.my_classrooms").on("click", function(e) {
		$.ajax({
			method: "GET",
			url: this.href
		}).done(function(data) {
			$("div.classrooms").html(data)
		})


		e.preventDefault();
	});
});