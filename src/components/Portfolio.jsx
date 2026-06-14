import html2pdf from "html2pdf.js";

function Portfolio({
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
}) {
  const handleDownload = () => {
    const element = document.getElementById("portfolio-content");
    const options = {
      margin: 10,
      filename: `${name || "portfolio"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="preview-panel">
      {/* Download Button — outside portfolio-content so it doesn't print */}
      <div className="download-bar">
        <button onClick={handleDownload} className="download-btn">
          ⬇️ Download as PDF
        </button>
      </div>

      {/* Everything inside this div gets converted to PDF */}
      <div id="portfolio-content">
        {/* Empty state */}
        {!name && !email && skills.length === 0 && (
          <div className="empty-state">
            <p>👈 Fill the form to see your portfolio</p>
          </div>
        )}

        {/* Header */}
        {(name || avatar || email || phone || location) && (
          <div className="portfolio-header">
            {avatar && (
              <img
                src={avatar}
                alt={name}
                className="portfolio-avatar"
                onError={(e) => (e.target.style.display = "none")}
              />
            )}
            {name && <h1 className="portfolio-name">{name}</h1>}
            <div className="portfolio-contacts">
              {email && <span>✉ {email}</span>}
              {phone && <span>📞 {phone}</span>}
              {location && <span>📍 {location}</span>}
            </div>
          </div>
        )}

        {/* About Me */}
        {about && (
          <div className="portfolio-section">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">{about}</p>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="portfolio-section">
            <h2 className="section-title">Skills</h2>
            <div className="portfolio-skills">
              {skills.map((skill, index) => (
                <span key={index} className="portfolio-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="portfolio-section">
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="portfolio-card">
                {edu.college && <h3 className="card-title">{edu.college}</h3>}
                {edu.degree && <p className="card-sub">{edu.degree}</p>}
                {edu.year && <p className="card-year">Graduating {edu.year}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="portfolio-section">
            <h2 className="section-title">Projects</h2>
            {projects.map((proj, index) => (
              <div key={index} className="portfolio-card">
                {proj.title && <h3 className="card-title">{proj.title}</h3>}
                {proj.description && (
                  <p className="card-desc">{proj.description}</p>
                )}
                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Social Links */}
        {(github || linkedin || website) && (
          <div className="portfolio-section">
            <h2 className="section-title">Links</h2>
            <div className="social-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  GitHub
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  LinkedIn
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  Portfolio
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
