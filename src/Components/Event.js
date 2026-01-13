import React, { useState } from "react";
import "../css/events.css";
import Navbar from "./Navbar";  
const upcomingEventsData = [
  {
    title: "Autonomous Drone Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    venue: "Robotics Lab",
    category: "Workshop",
    description: "Hands-on workshop on autonomous navigation and control of drones.",
    link: "/register/drone"
  },
  {
    title: "Robo-Soccer Competition",
    date: "2025-04-02",
    time: "9:00 AM",
    venue: "Main Auditorium",
    category: "Competition",
    description: "Compete with teams to build the best soccer-playing robot.",
    link: "/register/robosoccer"
  }
];

export default function Events() {
  const [sortType, setSortType] = useState("date");

  const sortedEvents = [...upcomingEventsData].sort((a, b) => {
    return sortType === "date"
      ? new Date(a.date) - new Date(b.date)
      : a.title.localeCompare(b.title);
  });

  return (
    <>
    <Navbar/>
    <div className="events-page">

      {/* PAGE TITLE */}
      <h1 className="events-title">Events & Activities</h1>

      {/* SORT */}
      <div className="sort-bar">
        <label>Sort By:</label>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* UPCOMING EVENTS */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {sortedEvents.map((event, index) => (
            <div className="event-card glow-box" key={index}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p>{event.description}</p>
              <button className="register-btn">Register Interest</button>
            </div>
          ))}
        </div>
      </section>

      {/* ONGOING EVENTS */}
      <section className="events-section">
        <h2>Ongoing Projects</h2>
        <div className="event-grid">
          <div className="event-card">
            <h3>Autonomous Rover</h3>
            <p>Developing a terrain-adaptive robotic rover using LiDAR and AI.</p>
          </div>
          <div className="event-card">
            <h3>Smart Robotic Arm</h3>
            <p>Vision-based robotic arm for industrial pick-and-place automation.</p>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="events-section">
        <h2>Past Events</h2>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src="/img/workshop.jpg" alt="" />
            <p>AI Robotics Workshop – Jan 2024</p>
          </div>
          <div className="gallery-card">
            <img src="/img/drone.jpg" alt="" />
            <p>National Robotics Competition – Dec 2023</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="events-section">
        <h2>Event Categories</h2>
        <div className="category-tags">
          <span>Workshops</span>
          <span>Competitions</span>
          <span>Guest Lectures</span>
          <span>Social Events</span>
        </div>
      </section>

    </div></>
  );
}
