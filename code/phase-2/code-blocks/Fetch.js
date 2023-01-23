// POST
fetch(url, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(newItem),
})
	.then((res) => res.json())
	.then((newItem) => console.log(newItem));

// PATCH
fetch(`${url}/${id}`, {
	method: "PATCH",
	headers: { "Content-type": "application/json" },

	body: JSON.stringify({ likes: likes + 1 }),
})
	.then((res) => res.json())
	.then((editedData) => {
		onReRenderAfterUpdate(editedData);
	});

// DELETE
fetch(`${url}/${id}`, {
	method: "DELETE",
})
	.then((res) => res.json())
	.then((empty) => {
		console.log("data back", empty);
	});
onDeleteToy(itemToDelete);
