// [<0>]
// import { useState } from "react";
import "../App.css";
import { useState } from "react";
import Header from "./Header"; // html only
import NavBar from "./NavBar"; // html only
import Form from "./Form"; // eventHandler
import UserCard from "./UserCard"; // only contains html

import { users } from "./data"; // imports data

// steps
// - import data -
// 1. render <UserCard/>
// 2. import <UserCard/> to App
// 3. data.map() using <UserCard/>
// 4. call .map() const
// <Form />
// 1. render <Form />

function App() {
	// usersData = users
	const [usersData, setUsersData] = useState(users);
	const [url, setUrl] = useState("");

	// data GET
	useEffect(() => {
		fetch("url-here")
			.then((res) => res.json())
			.then((data) => setUsersData(data.obj)); // change data.obj
	}, []);

	// displays loading while fetch occurs
	if (!url) {
		return <p>Loading...</p>;
	}
	// maps throught usersData
	// creates <UserCard/> for each
	const renderUsersCards = usersData.map((userData) => (
		<UserCard
			key={userData.id}
			firstName={userData.firstName}
			age={userData.age}
			gender={userData.gender}
		/>
	));

	// this is how to pass data from child to parent
	// this fn is passed to <Form /> as a prop
	function addNewUser(userForm) {
		// copy array to newUserData
		let newUserData = [...usersData, userForm];
		//re-render App()
		setUsersData(newUserData);
	}

	return (
		<div className="App">
			<div>
				{showClock ? <Clock /> : null}
				<button onClick={() => setShowClock(!showClock)}>
					Toggle Clock
				</button>
			</div>
			<Header />
			<NavBar />
			<main>{renderUsersCards}</main>
			<Form onAddNewUser={addNewUser} />
		</div>
	);
}

export default App;
