import { useState } from "react";

// [<0>]
const ExperienceCard = ({ log, logsUpdate }) => {
	const {
		id,
		activity,
		name,
		date,
		state,
		location,
		description,
		notes,
		likes,
	} = log;

	const [count, setCount] = useState(likes);
    //
	const handleLikeCount = () => {
		setCount((count) => count + 1);
		console.log(log.id);
		fetch(`http://localhost:3000/data/${log.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: likes + 1 }),
		})
			.then((res) => res.json())
			.then((updatedExperience) => logsUpdate(updatedExperience));
	};

	return (
		<div className="exp-div">
			<h3>{activity}</h3>
			<p>Date: {date}</p>
			<p>Location: {location}</p>
			<p>State: {state}</p>
			<h4>Description:</h4>
			<p>{description}</p>
			<span>NOTES: {notes}</span>
			<h4> - {name}</h4>
			<button onClick={handleLikeCount} className="likes-btn">
				{likes} Likes
			</button>
		</div>
	);
};

export default ExperienceCard;
