// $(function(){
// 	$(".js-next").on("click", function(){
// 		var nextId = parseInt($(".js-next").attr("data-id")) + 1;
// 		debugger
// 	})
// })

$(function() {
	$(".js-next").on("click", function() {
		var nextId = parseInt($(".js-next").attr("data-id")) + 1;
		$.getJSON("/users/:user_id/classrooms/" + nextId + "/classroom_data", function(data) {
			$(".classroomSubject").text(data["subject"]);
			$(".js-next").attr("data-id", data["id"]);
		});
	});
});