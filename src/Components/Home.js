import "../css/Home.css";
import Navbar from "./Navbar";

export default function Home() {
    
  return (
    <div>
      <Navbar />  
      
    <div className="home">
    
      {/* HERO SECTION */}
      <section className="hero">
        <img src="/img//robot-6654032.png" alt="robot-gif" style={{height:400,width:400}}  className="robot-gif"/>
        <div className="hero-content">
           
          <h1>ROBOTICS CLUB</h1>
          <p>Building the Future with Code, Circuits & Creativity</p>
          <button className="cta-btn">Join the Club</button>
          </div>
        
      </section>

      {/* QUICK NAVIGATION */}
      <p className="gallery">Explore Gallery</p> 
      <div className="carousel">
        
        <div className="group">
        <div className="card"><img src='img/scroll1.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll2.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll3.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll1.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll2.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll3.jpeg' alt=""></img></div>
        </div>
        <div aria-hidden className="group">
        <div className="card"><img src='img/scroll1.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll2.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll3.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll1.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll2.jpeg' alt=""></img></div>
        <div className="card"><img src='img/scroll3.jpeg' alt=""></img></div>
      </div>
      </div>



      {/* CLUB HIGHLIGHTS */}
      <section className="highlights">
        <h2>Club Highlights</h2>
        <div className="highlight-cards">


          <div className="highlight-card">
            <h3>🤖Robotic Competition</h3>
            <img src="/img/scroll3.jpeg" alt="robot-competition" style={{height:100,width:100}} />
            <p>Compete in robotics challenges and showcase your skills.</p>
            <p className="descriptions">Participate in high-energy robotics competitions where innovation meets execution, helping members turn ideas into award-winning robotic solutions.</p>
            <a href="/about" className="learn-more">Learn More </a>
          </div>


          <div className="highlight-card">
            <h3>🛠 Hands-on Workshops</h3>
            <img src="/img/scroll4.jpeg" alt="workshops" style={{height:100,width:100}} />
            <p>Learn building and programming through practical sessions.</p>
            <p className="descriptions">Engage in interactive workshops that cover everything from basic electronics to advanced robotics programming, ensuring members gain practical skills.</p>
            <a href="/about" className="learn-more">Learn More </a>
          </div>


          <div className="highlight-card">
            <h3>🤖 Real-world Projects</h3>
            <img src="/img/scroll1.jpeg" alt="real-projects" style={{height:100,width:100}} />
            <p>Work on real-world projects that solve practical problems.</p>
            <p className="descriptions">Tackle real-world challenges through collaborative projects, applying theoretical knowledge to tangible outcomes and developing problem-solving skills.</p>
            <a href="/about" className="learn-more">Learn More </a>
          </div>


          <div className="highlight-card">
            <h3>💡 Innovation & Research</h3>
            <img src="/img/scroll2.jpeg" alt="innovation-research" style={{height:100,width:100}} />
            <p>Explore cutting-edge research and develop innovative solutions.</p>
            <p className="descriptions">Dive into the latest advancements in robotics and AI, fostering a culture of innovation in their research endeavors.</p>
            <a href="/about" className="learn-more">Learn More </a>
          </div>
        </div>
      </section>



      {/* UPCOMING EVENT */}
      <section className="event">
        <div className="event-container">
        <p className="event-title">Upcoming Event</p>
        <p className="event-subtitle">Discover exciting events, competitions, and workshops designed to inspire and challenge you.</p>
        </div>
        <div className="event-card">
          <div className="event-top">
          <div className="event-img">
            <img src="/img/event-img1.png" alt="" className="event-bg" />

            <div className="event-content">
              <h3>RoboHack 2025</h3>
              <p>24-hour robotics hackathon | March 15</p>
              <button className="event-register">Register Now</button>
            </div>
          </div>


           <div className="event-img">
            <img src="/img/event2.jpg" alt="" className="event-bg" />

            <div className="event-content">
              <h3>RoboHack 2025</h3>
              <p>24-hour robotics hackathon | March 15</p>
              <button className="event-register">Register Now</button>
            </div>
          </div>
</div>
          <div className="event-bottom">
           <div className="event-img">
            <img src="/img/event3.jpg" alt="" className="event-bg" />

            <div className="event-content">
              <h3>RoboHack 2025</h3>
              <p>24-hour robotics hackathon | March 15</p>
              <button className="event-register">Register Now</button>
            </div>
          </div>

           <div className="event-img">
            <img src="/img/event-img1.png" alt="" className="event-bg" />

            <div className="event-content">
              <h3>RoboHack 2025</h3>
              <p>24-hour robotics hackathon | March 15</p>
              <button className="event-register">Register Now</button>
            </div>
          </div>

        </div>
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
    </div>
  );
}
