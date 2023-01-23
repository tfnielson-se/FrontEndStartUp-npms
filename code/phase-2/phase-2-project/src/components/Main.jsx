import { useState } from "react";
import Form from "./Form";
import AboutUs from "./About";
import Experiences from "./Experiences";

const Main = ({logs, logsUpdate}) => {
    // console.log("1",logs)
    const [showAboutUs, setShowAboutUs] = useState(false)
    const [showExperiences, setShowExperiences] = useState(true)
    const [showForm, setShowForm] = useState(false)

    // can improve to collapse others
    const toggleAboutUs = showAboutUs ? <AboutUs /> : null;
    const toggleForm = showForm ? <Form logsUpdate={logsUpdate}/> : null;
    const toggleExperiences = showExperiences ? <Experiences logs={logs} logsUpdate={logsUpdate} /> : null;

    const handleAboutUsToggle = () => {
        setShowAboutUs(showAboutUs => !showAboutUs)
        setShowExperiences(false)
        setShowForm(false)
    }
    const handleFormToggle = () => {
        setShowForm(showForm => !showForm)
        setShowAboutUs(false)
        setShowExperiences(false)

    }
    const handleExperiencesToggle = () => {
        setShowExperiences(showExperiences => !showExperiences)
        setShowAboutUs(false)
        setShowForm(false)
    }

    return (
        <div>
            <button onClick={handleAboutUsToggle}>About Us</button>
            <br />
            <button onClick={handleFormToggle}>Share!</button>
            
            <br />
            <button onClick={handleExperiencesToggle}>Experiences</button>
            {toggleAboutUs}
            {toggleForm}
            {toggleExperiences}
        </div>
    )
}

export default Main;