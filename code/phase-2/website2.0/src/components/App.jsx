// [<0>]

import "../App.css";
import {useState, useEffect} from "react"
import Header from "./Header"; // html only
import NavBar from "./NavBar"; // html only
import Form from "./Form"; // eventHandler 
import UserCard from "./UserCard"; // only contains html 

// steps
// - import data -
// 1. render <UserCard/>
// 2. import <UserCard/> to App
// 3. data.map() using <UserCard/>
// 4. call .map() const 
// <Form />
// 1. render <Form />



function App() {
    // useState
    const [usersData, setUsersData] = useState([])

    // useEffect
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            setUsersData(users)
        })
    }, [])

    if (!usersData) {
        <h1>Loading...</h1>
    }

    function addNewUser(userForm) {
        setUsersData([...usersData, userForm])
    }

    const displayUsers = usersData.map((userData => (
        <UserCard 
        key={userData.id}
        userData={userData}/>
        )));

	return (
		<div className="App">
            <Form onAddNewUser={addNewUser}/>
            {displayUsers}
		</div>
	);
}

export default App;
