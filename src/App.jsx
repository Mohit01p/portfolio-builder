import { useState, useEffect } from "react";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  // Load saved data from localStorage on first render
  const savedData = JSON.parse(localStorage.getItem("portfolioData") || "{}");

  // Personal info
  const [name, setName] = useState(savedData.name || "");
  const [avatar, setAvatar] = useState(savedData.avatar || "");
  const [email, setEmail] = useState(savedData.email || "");
  const [phone, setPhone] = useState(savedData.phone || "");
  const [location, setLocation] = useState(savedData.location || "");
  const [about, setAbout] = useState(savedData.about || "");

  // Arrays
  const [skills, setSkills] = useState(savedData.skills || []);
  const [education, setEducation] = useState(savedData.education || []);
  const [projects, setProjects] = useState(savedData.projects || []);

  // Social links
  const [github, setGithub] = useState(savedData.github || "");
  const [linkedin, setLinkedin] = useState(savedData.linkedin || "");
  const [website, setWebsite] = useState(savedData.website || "");

  // Dark mode
  const [darkMode, setDarkMode] = useState(savedData.darkMode || false);

  // Save to localStorage every time any value changes
  useEffect(() => {
    localStorage.setItem(
      "portfolioData",
      JSON.stringify({
        name,
        avatar,
        email,
        phone,
        location,
        about,
        skills,
        education,
        projects,
        github,
        linkedin,
        website,
        darkMode,
      }),
    );
  }, [
    name,
    avatar,
    email,
    phone,
    location,
    about,
    skills,
    education,
    projects,
    github,
    linkedin,
    website,
    darkMode,
  ]);

  return (
    <div className="app-container" data-theme={darkMode ? "dark" : "light"}>
      <Form
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        location={location}
        setLocation={setLocation}
        about={about}
        setAbout={setAbout}
        skills={skills}
        setSkills={setSkills}
        education={education}
        setEducation={setEducation}
        projects={projects}
        setProjects={setProjects}
        github={github}
        setGithub={setGithub}
        linkedin={linkedin}
        setLinkedin={setLinkedin}
        website={website}
        setWebsite={setWebsite}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Portfolio
        name={name}
        avatar={avatar}
        email={email}
        phone={phone}
        location={location}
        about={about}
        skills={skills}
        education={education}
        projects={projects}
        github={github}
        linkedin={linkedin}
        website={website}
      />
    </div>
  );
}

export default App;
