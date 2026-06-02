import "./Footer.css";

export default function Footer() {
  const teamMembers = [
    { name: "Doro Roland", github: "https://github.com/Dororoland" },
    { name: "Joan Ikwen", github: "https://github.com/jojoIK" },
    { name: "Ijeoma Ejeh", github: "https://github.com/ijeomagodspower" },
    { name: "Odunayo", github: "https://github.com/Odunayo1-code" },
    { name: "Abiodun Ojo", github: "https://github.com/Abbeyboyz54" },
    { name: "Ogundeyi Joshua", github: "https://github.com/Bossboygod" },
    { name: "Benamin Udo", github: "https://github.com/BiBenjiudo" },
    { name: "Raodat Oshoala", github: "https://github.com/oshoalaraodat-gif" },
    { name: "Mohammed Olamilekan", github: "https://github.com/mohola1" },
    { name: "Annointing Ola", github: "https://github.com/ola71656-sudo" },
    { name: "Favour Gabriel", github: "https://github.com/gabfav3898" },
    { name: "Ikechukwu Iroegbu", github: "https://github.com/Iykestine" },
    { name: "Gbenga Taiwo", github: "https://github.com/GeeTee100" }
  ];
  return (
    <footer className="footer">

      {/* ABOUT SECTION */}
      <div className="footer-section">
        <h3>About</h3>
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