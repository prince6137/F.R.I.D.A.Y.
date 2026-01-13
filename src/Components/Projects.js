import React, { useState } from "react";
import "../css/project.css";
import Navbar from "./Navbar";

const projectsData = [
  {
    id: 1,
    title: "Autonomous Drone Landing",
    year: 2024,
    type: "Drone",
    img: "/img/scroll4.jpeg",
    tech: ["Pixhawk", "LiDAR", "Computer Vision"],
    description:
      "Designed an autonomous drone landing system using visual and LiDAR-based sensing. The system accurately detects landing markers and performs precision landing under varying lighting and wind conditions using sensor fusion and robust control algorithms.",
  },
  {
    id: 2,
    title: "Robotic Arm Automation",
    year: 2023,
    type: "Robotic Arm",
    img: "/img/scroll4.jpeg",
    tech: ["Arduino", "Servo Motors", "PID Control"],
    description:
      "Developed a multi-axis robotic arm capable of pick-and-place operations. The system uses PID control for smooth motion and is controlled through a custom interface for industrial automation simulations.",
  },
  {
    id: 3,
    title: "AI Object Detection Bot",
    year: 2024,
    type: "AI",
    img: "/img/scroll4.jpeg",
    tech: ["Python", "OpenCV", "YOLO"],
    description:
      "Implemented a real-time object detection system using deep learning. The bot identifies and tracks objects using a camera feed, making it suitable for surveillance and smart robotics applications.",
  },
  {
    id: 4,
    title: "Smart IoT Home System",
    year: 2023,
    type: "IoT",
    img: "/img/scroll4.jpeg",
    tech: ["ESP32", "MQTT", "Sensors"],
    description:
      "Built an IoT-based smart home solution enabling remote monitoring and control of appliances. The system integrates multiple sensors and supports real-time data visualization through a web dashboard.",
  },
  {
    id: 5,
    title: "Line Following Robot",
    year: 2022,
    type: "Robotics",
    img: "/img/scroll4.jpeg",
    tech: ["IR Sensors", "Microcontroller"],
    description:
      "Designed an autonomous line-following robot using IR sensors. The robot dynamically adjusts speed and direction based on sensor input, demonstrating basic autonomous navigation principles.",
  },
];

export default function Projects() {
  const [filterType, setFilterType] = useState("All");
  const [filterYear, setFilterYear] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    return (
      (filterType === "All" || p.type === filterType) &&
      (filterYear === "All" || p.year === Number(filterYear))
    );
  });

  return (
    <>
    <Navbar/>
    <section className="projects-page">
       
      <h1>Our Projects</h1>
      <p className="subtitle">
        Exploring innovation through robotics, AI, drones, and IoT.
      </p>

      {/* FILTERS */}
      <div className="filters">
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option>All</option>
          <option>Drone</option>
          <option>Robotic Arm</option>
          <option>AI</option>
          <option>IoT</option>
          <option>Robotics</option>
        </select>

        <select onChange={(e) => setFilterYear(e.target.value)}>
          <option>All</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
      </div>

      {/* PROJECT GRID */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setActiveProject(project)}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <span className="year">{project.year}</span>
              <p>{project.description.slice(0, 80)}...</p>
              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="modal" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.img} alt={activeProject.title} />
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <p><strong>Year:</strong> {activeProject.year}</p>
            <p><strong>Type:</strong> {activeProject.type}</p>
            <div className="tech">
              {activeProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section></>
  );
}
