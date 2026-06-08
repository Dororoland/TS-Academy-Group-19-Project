import "./Footer.css";

export default function Footer() {

  const teamMembers = [
    { name: "Doro", github: "https://github.com/Dororoland" },
    { name: "Joan", github: "https://github.com/jojoIK" },
    { name: "Ijeoma", github: "https://github.com/ijeomagodspower" },
    { name: "Odunayo", github: "https://github.com/Odunayo1-code" },
    { name: "Abiodun", github: "https://github.com/Abbeyboyz54" },
    { name: "Joshua", github: "https://github.com/Bossboygod" },
    { name: "Benjamin", github: "https://github.com/BiBenjiudo" },
    { name: "Raodat", github: "https://github.com/oshoalaraodat-gif" },
    { name: "Mohammed", github: "https://github.com/mohola1" },
    { name: "Annointing", github: "https://github.com/ola71656-sudo" },
    { name: "Gabriel", github: "https://github.com/gabfav3898" },
    { name: "Ikechukwu", github: "https://github.com/Iykestine" },
    { name: "Gbenga", github: "https://github.com/GeeTee100" },
    { name: "Armstrong", github: "https://github.com/Armzy2" }
  ];
  
  return (
    <footer className="footer">

      {/* ABOUT SECTION */}
      <div className="footer-section">
        <h3>About</h3>
        <p className="about-paragraph">
          This project is a capstone project for the TS Academy Frontend Development course.
          It is a collaborative effort by a group of talented developers who have come together to create 
          a comprehensive and functional web page. The project showcases the skills and knowledge acquired 
          throughout the course, demonstrating proficiency in frontend development technologies and best practices.
        </p>
      </div>

      {/* TEAM MEMBERS */}
      <div className="footer-section">

        <ul className="team-list">
          {teamMembers.map((member) => (
            <li key={member.github}>
              <a href={member.github} target="_blank" rel="noreferrer">
                {member.name}
              </a>

              {member.role && (
                <span> — {member.role}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="paragraph-one">© 2026 Designed by <a href="https://amakandukwu.com/" className="footer-link">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" className="footer-link">Ifeoma A</a>.</p>
        <div className="flex-container">
            <p className="paragraph-two">Built by <a href="https://github.com/Dororoland/TS-Academy-Group-19-Project" className="footer-link">Group 19.</a></p>
        {/* A DIV FOR ADDING GAP WHILE STYLING */}
            <div className="flex-gap-container">
                <p>All rights reserved</p>
        <a href="https://tsacademyonline.com/" className="footer-link">TSAcademy</a>
            </div>
        </div>
      </div>

    </footer>
  );
}

{/*  */}