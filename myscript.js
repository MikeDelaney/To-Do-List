
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
		// create new label
		var label = document.createElement("label");
		label.className = "lbl";
		// create new checkbox
		var checkbox = document.createElement("input");
		checkbox.className = "cb";
		checkbox.type = "checkbox";
		checkbox.name = "tasks";
		checkbox.value = "tasks";
		checkbox.addEventListener("click", removeTask, false);
		// append checkbox to label
		label.appendChild(checkbox);
		// append text value from input
		label.appendChild(document.createTextNode(new_task));
		// append to list item
		li.appendChild(label);
		// insert in front of task list
		task_list.insertBefore(li, firstChild);		
	}
}

var removeTask = function() {
	// get all checkboxes and labels
	var boxes = document.getElementsByClassName("cb");
	var labels = document.getElementsByClassName("lbl");
	// iterate through items, remove clicked elements
	for (var i=0; i<boxes.length; i++) {
		box = boxes[i];
		label = labels[i];
		if (box.checked) {
			box.parentNode.removeChild(box);
			label.parentNode.removeChild(label);
		}
	}
}