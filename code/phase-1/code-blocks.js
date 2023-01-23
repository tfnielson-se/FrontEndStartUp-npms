/// DOM Manipulation
const variable = document.querySelector('id>class>element')

/// Event Listener
variable.addEventListener('action', handleEvent)

function handleEvent(e) {
	// `body`
	/// submit needs e.preventDefault();
	let dataObj = {};/// assign {}, [], value, to const /// e.target
	renderHTML(dataObj); // in this case dataObj will be the argument for objData
	postJSON(dataOBJ);
}

/// render HTML with DOM
function renderHTML(objData) {
	/// render HTML doc using DOM
	/// append!!
}

/// fetch () GET
function getJSON() {
	fetch("url")
	.then(res => res.json())
	.then('obj var' => 'obj var'.forEach((objData) => renderOneToy(objData))) 
}

/// fetch() POST
function postJSON() {
	fetch("url", {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json',
		},
		body: JSON.stringify(dataObj)
	}) 
	.then(res => res.json())
	.then('obj var' => 'obj var')
}

/// initialize
function initialize() {
	getJSON();
}

initialize();
