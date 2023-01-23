//[<0>]
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experiences = ({ logs, logsUpdate }) => {
	const [activityFilter, setActivityFilter] = useState(null);

	const displayExperiences =
		(activityFilter === null
			? logs.map((log) => (
					<ExperienceCard
						key={log.id}
						log={log}
						logsUpdate={logsUpdate}
					/>
			  ))
			: 
            activityFilter !== null
			? logs.filter((log) => (
                logs.activity === activityFilter ?
					<ExperienceCard
						key={log.id}
						log={log}
						logsUpdate={logsUpdate}
					/> : null
            )): null)


	const filterButtons = logs.map((log) => (
		<option value={log.activity}>{log.activity}</option>
	));

	return (
		<>
			<br />
			<select
				name="activity"
				value={logs.activity}
				onChange={(e) => console.log("here", e.target.value)}
			>
				<option value="pick one">Choose an Activity</option>
				{filterButtons}
			</select>
			{displayExperiences}
		</>
	);
};

export default Experiences;
