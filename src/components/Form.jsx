import { useState } from "react";

function Form({
  name,
  setName,
  avatar,
  setAvatar,
  email,
  setEmail,
  phone,
  setPhone,
  location,
  setLocation,
  about,
  setAbout,
  skills,
  setSkills,
  education,
  setEducation,
  projects,
  setProjects,
  github,
  setGithub,
  linkedin,
  setLinkedin,
  website,
  setWebsite,
  darkMode,
  setDarkMode,
}) {
  // ✅ useState goes INSIDE the function body, AFTER the closing }) of props
  const [skillInput, setSkillInput] = useState("");

  // ✅ Helper functions also go here, inside the function body
  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
    }
    setSkillInput("");
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, i) => i !== indexToRemove));
  };

  const addEducation = () => {
    setEducation([...education, { college: "", degree: "", year: "" }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu,
    );
    setEducation(updated);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", githubLink: "" }]);
  };

  const updateProject = (index, field, value) => {
    const updated = projects.map((proj, i) =>
      i === index ? { ...proj, [field]: value } : proj,
    );
    setProjects(updated);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  // ✅ return comes last, still inside the function body
  return (
    <div className="form-panel">
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          style={{ marginLeft: "8px", color: "#e53e3e" }}
        >
          🗑️ Clear Data
        </button>
      </div>
      <h2>Build Your Portfolio</h2>

      {/* Personal Info */}
      <section>
        <h3>Personal Info</h3>

        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <label>Profile Picture URL</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="https://example.com/photo.jpg"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="xyz@example.com"
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 XXXXXXXXX"
        />

        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Pune , Maharashtra"
        />

        <label>About Me</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="A few sentences about yourself..."
          rows={4}
        />
      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>

        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button onClick={() => removeSkill(index)}>×</button>
            </span>
          ))}
        </div>
        {/*Input row */}
        <div className="skill-input-row">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addSkill()}
            placeholder="e.g. React, Python"
          />
          <button onClick={addSkill}>Add</button>
        </div>
        <p className="hint">Press Enter or click Add</p>
      </section>
      {/* Education */}
      <section>
        <h3>Education</h3>

        {education.map((edu, index) => (
          <div key={index} className="entry-card">
            <button
              className="remove-btn"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>

            <label>College / University</label>
            <input
              type="text"
              value={edu.college}
              onChange={(e) =>
                updateEducation(index, "college", e.target.value)
              }
              placeholder="NIT Bhopal"
            />

            <label>Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              placeholder="B.Tech in Computer Science"
            />

            <label>Graduation Year</label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => updateEducation(index, "year", e.target.value)}
              placeholder="2027"
            />
          </div>
        ))}

        <button className="add-btn" onClick={addEducation}>
          + Add Education
        </button>
      </section>

      {/* Projects */}
      <section>
        <h3>Projects</h3>

        {projects.map((proj, index) => (
          <div key={index} className="entry-card">
            <button className="remove-btn" onClick={() => removeProject(index)}>
              Remove
            </button>

            <label>Project Name</label>
            <input
              type="text"
              value={proj.title}
              onChange={(e) => updateProject(index, "title", e.target.value)}
              placeholder="Portfolio Builder"
            />

            <label>Description</label>
            <textarea
              value={proj.description}
              onChange={(e) =>
                updateProject(index, "description", e.target.value)
              }
              placeholder="What does this project do?"
              rows={3}
            />

            <label>GitHub Link</label>
            <input
              type="text"
              value={proj.githubLink}
              onChange={(e) =>
                updateProject(index, "githubLink", e.target.value)
              }
              placeholder="https://github.com/you/project"
            />
          </div>
        ))}

        <button className="add-btn" onClick={addProject}>
          + Add Project
        </button>
      </section>
      {/* Social Links */}
      <section>
        <h3>Social Links</h3>

        <label>GitHub</label>
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="https://github.com/username"
        />

        <label>LinkedIn</label>
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="https://linkedin.com/in/username"
        />

        <label>Portfolio Website</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://yoursite.com"
        />
      </section>
    </div>
  );
}

export default Form;
