import "./footer.css";

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

        <h3 className='teamname'>Team Members</h3>

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

      <hr />

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="flex-container">
          <p className="paragraph-one">© 2026 Designed by <a href="https://amakandukwu.com/">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" className="footer-link">Ifeoma A</a>.</p>
          <div className="row-flex">
            <p className="paragraph-two">Built by <a href="https://github.com/Dororoland/TS-Academy-Group-19-Project" className="footer-link">Group 19.</a></p>
            <p>All rights reserved</p>
          </div>
        </div>

        {/* A DIV FOR ADDING GAP WHILE STYLING */}
        <div className="flex-gap-container">
          <a href="https://tsacademyonline.com/" className="footer-link">TSAcademy</a>
        </div>
      </div>


    </footer>
  );
}
