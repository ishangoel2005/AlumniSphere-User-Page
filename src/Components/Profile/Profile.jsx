import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: "Aarav Singh",
    alumni: "SRMIST (CSE)",
    rating: 1023,
    work: ["Infosys (2016-2022)", "TCS (2022-Current)"],
    contact: ["7825762889", "9625684922"],
    links: {
      linkedin: "https://www.linkedin.com/in/aarav-singh",
      github: "https://github.com/aaravsingh",
      portfolio: "https://aaravsingh.com"
    }
  };

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-image">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div className="user-info-header">
          <h2>{user.name}</h2>
          <p>ALUMNI: {user.alumni}</p>
        </div>
      </div>
      <div className="user-info">
        <p>NUMBER OF CONNECTIONS: {user.rating}</p>
        <h3>WORK</h3>
        <ul>
          {user.work.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>

        <h3>LINKS</h3>
        <ul className="links-list">
          <li><a href={user.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={user.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={user.links.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
        </ul>

        <h3>CONTACT</h3>
        <ul>
          {user.contact.map((contact, index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;