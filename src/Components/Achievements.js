import React from "react";
import "../css/achievement.css";

export default function Achievements() {
  return (
    <div className="achievements-page">

      {/* PAGE HEADER */}
      <h1 className="page-title">Club Achievements</h1>
      <p className="page-subtitle">
        Celebrating innovation, research excellence, and competitive success
      </p>

      {/* STATS COUNTER */}
      <section className="stats-section">
        <div className="stat-card glow-box">
          <h2>35+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card glow-box">
          <h2>12</h2>
          <p>Competitions Won</p>
        </div>
        <div className="stat-card glow-box">
          <h2>8</h2>
          <p>Research Papers</p>
        </div>
        <div className="stat-card glow-box">
          <h2>₹5L+</h2>
          <p>Grants Received</p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <h2>Achievement Timeline</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>🥇 National Robotics Challenge – 1st Prize</p>
          </div>
          <div className="timeline-item">
            <span className="year">2023</span>
            <p>📄 Paper published at IEEE ICRA</p>
          </div>
          <div className="timeline-item">
            <span className="year">2022</span>
            <p>💰 Innovation Grant from AICTE</p>
          </div>
        </div>
      </section>

      {/* COMPETITION WINS */}
      <section className="achievement-section">
        <h2>Competition Wins</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <img src="/img/competition1.jpg" alt="competition" />
            <h3>National Robotics Challenge</h3>
            <p><strong>Year:</strong> 2024</p>
            <p><strong>Prize:</strong> 1st Place</p>
            <p><strong>Team:</strong> A. Sharma, R. Kumari, S. Verma</p>
          </div>
        </div>
      </section>

      {/* RESEARCH PUBLICATIONS */}
      <section className="achievement-section">
        <h2>Research Publications</h2>

        <div className="publication-list">
          <div className="publication-item">
            <h3>Autonomous UAV Landing Using Vision</h3>
            <p>IEEE Conference on Robotics, 2024</p>
            <p><strong>Authors:</strong> Roushni Kumari, Team RoboInnovators</p>
          </div>
        </div>
      </section>

      {/* GRANTS & AWARDS */}
      <section className="achievement-section">
        <h2>Innovation Grants & Awards</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            <h3>AICTE Innovation Grant</h3>
            <p><strong>Year:</strong> 2022</p>
            <p><strong>Amount:</strong> ₹2,50,000</p>
          </div>
        </div>
      </section>

      {/* MEDIA COVERAGE */}
      <section className="achievement-section">
        <h2>Recognition & Media Coverage</h2>

        <div className="publication-list">
          <div className="publication-item">
            <h3>Featured in The Hindu</h3>
            <p>Interview on student-led robotics innovations</p>
          </div>
        </div>
      </section>

    </div>
  );
}
