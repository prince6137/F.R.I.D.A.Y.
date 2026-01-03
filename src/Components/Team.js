import React from "react";
import "../css/Team.css";
import Navbar from "./Navbar";

const coreTeam = [
  {
    name: "Roushni Kumari",
    role: "President",
    img: "/img/scroll1.jpeg",
    linkedin: "#",
    github: "#",
    description: "Leading the team with a vision for innovation.",
  },
  {
    name: "Prince Yadav",
    role: "Vice President",
    img: "/img/scroll2.jpeg",
    linkedin: "#",
    github: "#",
    description: "Driving software development and integration.",
  },
];

const teamMembers = {
  Hardware: [
    { img: "/img/event2.jpg",name: "Amit Kumar", role: "Motor Control Engineer" },
    {  img: "/img/event2.jpg",name: "Neha Singh", role: "PCB Designer" },
  ],
  Software: [
    { img: "/img/event2.jpg",name: "Roushni Kumari", role: "Frontend Developer" },
    { img: "/img/event2.jpg",name: "Prince Yadav", role: "Backend Developer" },
  ],
  AI: [
    { img: "/img/event2.jpg",name: "Rahul Verma", role: "Machine Learning Engineer" },
    { img: "/img/event2.jpg",name: "Anjali Gupta", role: "Computer Vision Lead" },
  ],
  Design: [
    { img: "/img/event2.jpg",name: "Sneha Patel", role: "UI/UX Designer" },
    { img: "/img/event2.jpg",name: "Graphic Designer", role: "Visual Design" },
  ],
};

export default function Team() {
  return (
    <div className="ma" ><Navbar/>
    
    <div className="team-page">
     
      {/* FACULTY ADVISOR */}
      <section className="advisor-section">
        <img src="/img/advisor.jpg" alt="Advisor" />
        <div>
          <h2>Dr. A. K. Sharma</h2>
          <p>Faculty Advisor · Robotics Club</p>
          <blockquote>
            "Innovation begins when curiosity meets discipline."
          </blockquote>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="core-team">
        <h2>Core Team</h2>
        <div className="core-grid">
          {coreTeam.map((member, i) => (
            <div className="core-card" key={i}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="socials">
                <a href={member.linkedin}>LinkedIn</a>
                <a href={member.github}>GitHub</a>
              </div>
              <div className="description">{member.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-members">
      <h2>Team Members</h2>

      <div className="team-grid">
        {Object.entries(teamMembers).map(([domain, members]) => (
          <div className="team-card" key={domain}>
            <h3>{domain}</h3>
            <ul>
              {members.map((member, index) => (
                <li key={index}>
                  <img  className="member-img" src={member.img} alt={member.name} />
                  <span className="name">{member.name}</span>
                  <span className="role">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

      {/* ALUMNI */}
      <section className="alumni">
        <h2>Notable Alumni</h2>
        <p>🏆 Alumni working at ISRO, DRDO, and top robotics startups.</p>
      </section>

    </div>
    </div>
  );
}
