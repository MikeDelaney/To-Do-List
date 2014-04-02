
var addTask = function() {
	if (event.keyCode == 13) {
		// read task list
		var task_list = document.getElementById("task list");
		// get first element of list
		var firstChild = task_list.firstChild
		// read value of text input
		var new_task = document.getElementById("new_task").value;
		// clear text from input
		document.getElementById("new_task").value="";
		// create new list item
		var li = document.createElement("li");
		// append text value from input
		li.appendChild(document.createTextNode(new_task));
		// insert in front of task list
		task_list.insertBefore(li, firstChild);
	}
}
