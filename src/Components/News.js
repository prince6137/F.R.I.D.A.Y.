import React, { useState } from "react";
import "../css/news.css";
import Navbar from "./Navbar";
const newsData = [
  {
    title: "Autonomous Drones Achieve Precision Landing",
    date: "12 Feb 2025",
    source: "IEEE Spectrum",
    category: "Tech Innovations",
    summary:
      "Researchers have developed a vision-based autonomous landing system for drones using multimodal sensor fusion. The system combines RGB cameras, infrared markers, and control algorithms to enable accurate landings even in GPS-denied environments. This breakthrough improves drone reliability in logistics, defense, and disaster response missions.",
    link: "https://spectrum.ieee.org"
  },
  {
    title: "Robotics Club Weekly Meet Summary",
    date: "10 Feb 2025",
    source: "Club Update",
    category: "Club News",
    summary:
      "This week’s club meeting focused on project planning for the upcoming inter-college robotics competition. Members discussed hardware procurement, AI model training, and task allocation. The session concluded with a live demo of the autonomous rover prototype.",
    link: "#"
  }
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Club News",
    "Competition News",
    "Tech Innovations",
    "Research Breakthroughs"
  ];

  const filteredNews =
    activeCategory === "All"
      ? newsData
      : newsData.filter(item => item.category === activeCategory);

  return (
    <>
    <Navbar/>
    <div className="news-page">

      <h1 className="news-title">Robotics News & Updates</h1>
      <p className="news-subtitle">
        Stay updated with club activities and the latest innovations in robotics
      </p>

      {/* CATEGORY FILTER */}
      <div className="category-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* NEWS CARDS */}
      <div className="news-grid">
        {filteredNews.map((news, index) => (
          <div className="news-card glow-box" key={index}>
            <div className="news-meta">
              <span>{news.date}</span>
              <span>{news.source}</span>
            </div>

            <h3>{news.title}</h3>
            <p className="news-summary">{news.summary}</p>

            <a href={news.link} target="_blank" rel="noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>📬 Stay in the Loop</h2>
        <p>
          Get robotics updates, event alerts, and tech insights delivered to your inbox.
        </p>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <small>*No spam. Just robots 🤖</small>
      </div>

    </div></>
  );
}
