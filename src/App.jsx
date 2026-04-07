function App() {
  const skills = [
    {
      label: "Programming Languages",
      items: [
        { name: "C++", desc: "Strong foundation in data structures and algorithms." },
        { name: "C", desc: "Low-level programming and memory management." },
        { name: "Python", desc: "Scripting, problem solving, and application development." },
        { name: "F#", desc: "Functional programming and recursion concepts." },
        { name: "Prolog", desc: "Logic programming and rule-based problem solving." },
        { name: "Java", desc: "Object-oriented programming and software design." },
        { name: "JavaScript", desc: "Dynamic web development and interactive behavior." }
      ]
    },
    {
      label: "Web Technologies",
      items: [
        { name: "HTML", desc: "Used to structure the content of web pages." },
        { name: "CSS", desc: "Used to style, design, and layout web pages." },
        { name: "React", desc: "JavaScript library for building interactive user interfaces." }
      ]
    },
    {
      label: "Database",
      items: [
        { name: "SQL", desc: "Used for querying, managing, and organizing relational databases." }
      ]
    },
    {
      label: "Tools",
      items: [
        { name: "Git", desc: "Version control system for tracking code changes." },
        { name: "GitHub", desc: "Platform for hosting code and showcasing projects." },
        { name: "VS Code", desc: "Code editor used for web and software development." },
        { name: "Android Studio", desc: "IDE used for Android app development." },
        { name: "Oracle SQL Developer", desc: "Tool for working with Oracle databases and SQL queries." },
        { name: "IntelliJ", desc: "It is widely considered a top choice for professional software engineers due to its deep code insight and productivity-focused features" }
      ]
    }
  ];

  const projects = [
    {
      title: "Resume Portfolio Website",
      dates: "2026 - Present",
      org: "Personal Project",
      location: "San Marcos, CA",
      bullets: [
        "Built a responsive personal website to showcase my skills, projects, education, and contact information.",
        "Used React and JavaScript to organize content into reusable sections and create a professional online resume.",
        "Added clickable GitHub and LinkedIn links so recruiters can quickly access my work and profile."
      ]
    },
    {
      title: "University Club Finder",
      dates: "Academic Project",
      org: "CSUSM",
      location: "San Marcos, CA",
      bullets: [
        "Designed an app idea to help students discover clubs and events on campus in one place.",
        "Focused on usability, organization of information, and student-friendly design.",
        "Applied software design and planning concepts during development."
      ]
    },
    {
      title: "Time2Dine App",
      dates: "Academic Project",
      org: "CSUSM",
      location: "San Marcos, CA",
      bullets: [
        "Created a restaurant wait-time app concept to help users make faster dining decisions.",
        "Worked on requirements, planning, and user-focused design ideas for the application.",
        "Practiced turning a software idea into a structured project concept with clear features."
      ]
    }
  ];

  const education = [
    {
      degree: "BS in Software Engineering",
      years: "Current",
      school: "California State University San Marcos",
      location: "San Marcos, CA"
    }
  ];

  const certifications = [
    {
      name: "Cloud Computing Coursework",
      dates: "Academic Experience",
      org: "CSUSM"
    },
    {
      name: "Database and Software Design Coursework",
      dates: "Academic Experience",
      org: "CSUSM"
    }
  ];

  return (
    <div
      style={{
        backgroundColor: "#e5e7eb",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        color: "#111827"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#f9fafb",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: "28px"
        }}
      >
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "170px 1fr",
            gap: "28px",
            alignItems: "center",
            borderBottom: "8px solid #4a90e2",
            paddingBottom: "18px"
          }}
        >
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: "bold",
              color: "#374151"
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Jose Bianchi"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentNode.textContent = "JB";
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: "#4b5563",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 8px 0"
              }}
            >
              Software Engineer
            </p>
            <h1
              style={{
                fontSize: "50px",
                margin: "0",
                lineHeight: "1.05",
                color: "#4a90e2"
              }}
            >
              Jose Bianchi
            </h1>
          </div>
        </header>

        <main
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "40px",
            marginTop: "26px"
          }}
        >
          <div>
            <SectionLabel title="Professional Summary" />
            <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "12px" }}>
              Software Engineering student with experience in programming,
              software design, databases, and web development. Strong academic
              background in C++, C, Python, F#, Prolog, Java, JavaScript, HTML,
              CSS, and SQL. Interested in building clean, user-friendly web
              applications and growing as a front-end or full-stack developer.
            </p>

            <div style={{ marginTop: "34px" }}>
              <SectionLabel title="Projects & Experience" />
              {projects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: "18px",
                    paddingBottom: "20px",
                    borderBottom:
                      index !== projects.length - 1 ? "1px solid #d1d5db" : "none"
                  }}
                >
                  <h2 style={{ fontSize: "22px", margin: "0 0 6px 0", color: "#111827" }}>
                    {project.title}
                  </h2>
                  <p style={{ margin: "0", color: "#4b5563", fontSize: "15px" }}>
                    {project.dates}
                  </p>
                  <p
                    style={{
                      margin: "6px 0 12px 0",
                      color: "#4b5563",
                      fontSize: "15px"
                    }}
                  >
                    {project.org} / {project.location}
                  </p>
                  <ul
                    style={{
                      margin: "0",
                      paddingLeft: "20px",
                      lineHeight: "1.8",
                      fontSize: "17px"
                    }}
                  >
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: "34px" }}>
              <SectionLabel title="Certifications / Coursework" />
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: "16px",
                    paddingBottom: "16px",
                    borderBottom:
                      index !== certifications.length - 1 ? "1px solid #d1d5db" : "none"
                  }}
                >
                  <h3 style={{ fontSize: "20px", margin: "0 0 4px 0" }}>
                    {cert.name}
                  </h3>
                  <p style={{ margin: "0", color: "#6b7280" }}>{cert.dates}</p>
                  <p style={{ margin: "4px 0 0 0", color: "#6b7280" }}>{cert.org}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "34px" }}>
             <SectionLabel title="References" />

                <p
                  style={{
                     marginTop: "12px",
                     fontSize: "18px",
                     color: "#374151",
                     lineHeight: "1.6"
                      }}
                    >
               References available upon request.
               </p>
          </div>
          </div>

          <aside>
            <div style={{ marginTop: "2px" }}>
              <p style={sideLineStyle}>📧 jpallares@csusm.edu</p>

              <a
                href="https://github.com/JpLoco90"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonLinkStyle("#2563eb")}
              >
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jose-bianchi-20051a167"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonLinkStyle("#0a66c2")}
              >
                View LinkedIn
              </a>

              <p style={{ ...sideLineStyle, marginTop: "12px" }}>📍 San Marcos, CA</p>
            </div>

            <div style={{ marginTop: "34px" }}>
              <SectionLabel title="Education" />
              {education.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: "14px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #d1d5db"
                  }}
                >
                  <h3 style={{ fontSize: "20px", margin: "0 0 6px 0" }}>
                    {item.degree}
                  </h3>
                  <p style={{ margin: "0", color: "#6b7280" }}>{item.years}</p>
                  <p style={{ margin: "6px 0 0 0", color: "#4b5563" }}>{item.school}</p>
                  <p style={{ margin: "4px 0 0 0", color: "#4b5563" }}>{item.location}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "34px" }}>
              <SectionLabel title="Skills" />
              {skills.map((group, index) => (
                <div
                  key={index}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid #d1d5db"
                  }}
                >
                  <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{group.label}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        title={skill.desc}
                        style={{
                          display: "inline-block",
                          backgroundColor: "#e5e7eb",
                          padding: "8px 12px",
                          borderRadius: "999px",
                          fontSize: "14px",
                          cursor: "pointer"
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ title }) {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "#4a90e2",
        color: "white",
        fontWeight: "bold",
        fontSize: "14px",
        padding: "6px 10px",
        letterSpacing: "0.2px"
      }}
    >
      {title}
    </div>
  );
}

const sideLineStyle = {
  margin: "0 0 12px 0",
  color: "#374151",
  fontSize: "16px"
};

function buttonLinkStyle(bgColor) {
  return {
    display: "block",
    background: bgColor,
    color: "white",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "bold"
  };
}

export default App;
