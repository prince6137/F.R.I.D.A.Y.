import "../css/Home.css";

export default function Home() {
    
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <img src="/img//robot-6654032.png" alt="robot-gif" style={{height:400,width:400}}  className="robot-gif"/>
        <div className="hero-content">
           
          <h1>ROBOINNOVATORS CLUB</h1>
          <p>Building the Future with Code, Circuits & Creativity</p>
          <button className="cta-btn">Join the Club</button>
          </div>
        
      </section>

      {/* QUICK NAVIGATION */}
      <section className="quick-nav">
        {[
            "Projects",
            "Workshops",
            "Team",
            "Gallery",
            "Contact",
            "About Us",
            "Feedback"
        ].map((item, index) => (
          <div key={index} className="nav-card">{item}</div>
        ))}
      </section>

      {/* CLUB HIGHLIGHTS */}
      <section className="highlights">
        <h2>Club Highlights</h2>
        <div className="highlight-cards">
          <div className="highlight-card">🏆 Robotics Competitions</div>
          <div className="highlight-card">🛠 Hands-on Workshops</div>
          <div className="highlight-card">🤖 Real-world Projects</div>
          <div className="highlight-card">💡 Innovation & Research</div>
        </div>
      </section>

      {/* UPCOMING EVENT */}
      <section className="event">
        <h2>Upcoming Event</h2>
        <div className="event-card">
          <h3>RoboHack 2025</h3>
          <p>24-hour robotics hackathon | March 15</p>
          <button>Register Now</button>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements">
        <h2>Recent Achievements</h2>
        <div className="achievement-cards">
          <div className="achievement-card">
            🥇 1st Prize – National Robotics Challenge
          </div>
          <div className="achievement-card">
            🥈 2nd Place – AI Bot Competition
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 RoboInnovators Club</p>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
        <p>📧 roboclub@email.com</p>
      </footer>

    </div>
  );
}
