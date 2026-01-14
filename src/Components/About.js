import React, { useState } from "react";
import "../css/about.css";
import Navbar from "./Navbar";
import Footer from "./footer";
export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-page">
        {/* INTRO */}
        <div className="about-hero">
          <h1>About Our Club</h1>
          <p>
            A community of innovators, engineers, and researchers shaping the
            future of robotics, AI, and autonomous systems.
          </p>
        </div>

        {/* MISSION VISION OBJECTIVES */}
        <div className="mvo">
          <div className="mvo-card">
            <h3>Mission</h3>
            <p>
              To inspire students through hands-on learning, innovation, and
              real-world engineering challenges.
            </p>
          </div>
          <div className="mvo-card">
            <h3> Vision</h3>
            <p>
              To become a nationally recognized student-led technical club
              contributing to robotics and AI research.
            </p>
          </div>
          <div className="mvo-card">
            <h3> Objectives</h3>
            <p>
              Encourage interdisciplinary learning, innovation, teamwork, and
              problem-solving skills.
            </p>
          </div>
        </div>

        {/* INTERACTIVE HISTORY */}
        <h2 className="section-title">Our Journey</h2>

        <ul class="timeline">
          {/* <!-- Item 1 --> */}
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Lorem ipsum.</span>
                <span class="time-wrapper">
                  <span class="time">Feb 2015</span>
                </span>
              </div>
              <div class="desc">
                Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate
                exercitation deserunt proident.
              </div>
            </div>
          </li>

          {/* <!-- Item 2 --> */}
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Lorem ipsum Anim.</span>
                <span class="time-wrapper">
                  <span class="time">Dec 2014</span>
                </span>
              </div>
              <div class="desc">
                Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor
                dolore aliquip enim cupidatat laborum dolore.
              </div>
            </div>
          </li>

          {/* <!-- Item 3 --> */}
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">Lorem Occaecat.</span>
                <span class="time-wrapper">
                  <span class="time">July 2014</span>
                </span>
              </div>
              <div class="desc">
                Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident
                fugiat pariatur cillum cupidatat reprehenderit sit id dolor
                consectetur ut.
              </div>
            </div>
          </li>
        </ul>

        {/* ACTIVITIES */}
        <h2 className="section-title">What We Do</h2>
        <div class="container">
          <img
            src="/img/workshop.jpg"
            alt=""
          />
          <div className="overlay">
            <p>Robotics Competition</p>
          </div>
          <div>
            <img
              src="/img/robotic-competetion.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/img/project.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="/img/research.jpg"
              alt=""
            />
          </div>
        </div>

        {/* INFRASTRUCTURE */}
        <h2 className="section-title">Infrastructure & Labs</h2>
        <div className="labs">
          <div className="lab-card">
            <img src="/img/drone.jpg" alt="Drone Lab" />
            <p>Autonomous Drone Lab</p>
          </div>
          <div className="lab-card">
            <img src="/img/robotic-lab.jpg" alt="Robotics Lab" />
            <p>Robotics & Automation Lab</p>
          </div>
          <div className="lab-card">
            <img src="/img/vision.jpg" alt="AI Lab" />
            <p>AI & Vision Lab</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
