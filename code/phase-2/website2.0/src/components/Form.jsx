// [<0>]
import { useState } from "react";

function Form({ onAddNewUser }) {
	//
	let initialValues = {
		name: "",
		username: "",
		email: "",
		phone: "",
	};

	// useState
	const [formData, setFormData] = useState(initialValues);
	const { name, username, email, phone } = formData;
	// useState

	// event handlers
	function handleSubmit(e) {
		e.preventDefault();
		onAddNewUser(formData);

		// POST
		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify(formData),
		};

		// Add POST Fetch Request
		fetch("http://localhost:5173/", configObj) //
			.then((res) => res.json())
			.then((newUser) => {
				// Reset Form Values via State Change (Single Source of Truth)
				setFormData(initialValues);
			});
	}

	//// pass as onChange={handleOnChange} ////

	const handleOnChange = (e) => {
		// Object Destructuring Assignment
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	//// pass as onChange={handleOnChange} ////

	return (
		<form onSubmit={handleSubmit}>
			<h2>Submit New User</h2>
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={handleOnChange}
				// onChange={(e) =>
				// 	setFormData({ ...formData, name: e.target.value })
				// }
			/>
			<br />
			<label htmlFor="username">Username: </label>
			<input
				type="text"
				id="username"
				name="username"
				value={username}
				onChange={handleOnChange}
				// onChange={(e) =>
				// 	setFormData({ ...formData, username: e.target.value })
				// }
			/>
			<br />
			<label htmlFor="email">Email: </label>
			<input
				type="text"
				id="email"
				name="email"
				value={email}
				onChange={handleOnChange}
				// onChange={(e) =>
				// 	setFormData({ ...formData, email: e.target.value })
				// }
			/>
			<br />
			<label htmlFor="email">Phone #: </label>
			<input
				type="text"
				id="phone"
				name="phone"
				value={phone}
				onChange={handleOnChange}
				// onChange={(e) =>
				// 	setFormData({ ...formData, phone: e.target.value })
				// }
			/>
			<br />
			<input type="submit" />
		</form>
	);
}

export default Form;
