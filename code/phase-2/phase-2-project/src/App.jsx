import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [logs, setLogs] = useState([]);
	const [update, setUpdate] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/data")
			.then((res) => res.json())
			.then((data) => setLogs(data));
	}, []);

	// console.log(logs);

	const logsUpdate = (experience) => {
		setLogs([...logs, experience]);
	};

	const Button = ({ textContent }) => {
		const handleClick = () => {
            console.log('working')
        };
		return (
			<button onClick={handleClick}> Button {/* textContent */}</button>
		);
	};

	return (
		<div className="App">
			{/* <Header />
			<Main logs={logs} logsUpdate={logsUpdate} /> */}
			<Button />
		</div>
	);
}

export default App;
