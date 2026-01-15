import React, { useState } from "react";
import "../css/contact.css";
import Navbar from "./Navbar";
import Footer from "./footer";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "How can I join the robotics club?",
      a: "You can join by filling the contact form or attending our weekly meetings."
    },
    {
      q: "Do I need prior experience?",
      a: "No prior experience is required. We welcome beginners and advanced members alike."
    },
    {
      q: "When does the club meet?",
      a: "We meet every Wednesday from 4:00 PM to 6:00 PM in the Robotics Lab."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="contact-page">

      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have questions? Want to collaborate? We’d love to hear from you 🤖
      </p>

      <div className="contact-grid">

        {/* LEFT: CONTACT INFO */}
        <div className="contact-info glow-box">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> roboclub@email.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Engineering Block, Room 204</p>
          <p><strong>Meetings:</strong> Wednesdays, 4–6 PM</p>


          {/* MAP PLACEHOLDER */}
          <h1>Campus Location Map</h1>
          <div className="map-box">
            
            <img src="/img/map.jpg" alt="Campus Location Map"/>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">GitHub</a>
            <a href="/">YouTube</a>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form glow-box">
          <h2>Send Us a Message</h2>

          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />

              <select required>
                <option value="">Purpose of Contact</option>
                <option>General Inquiry</option>
                <option>Join Club</option>
                <option>Event Question</option>
                <option>Collaboration</option>
              </select>

              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="success-msg">
              Thank you! We’ll get back to you soon.
            </div>
          )}
        </div>

      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2> Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
          >
            <h3>{faq.q}</h3>
            {openFAQ === index && <p>{faq.a}</p>}
          </div>
        ))}
      </section>

    </div>
    <Footer/>
    </>
  );
}
