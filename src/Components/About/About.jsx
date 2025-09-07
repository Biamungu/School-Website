import React from 'react'
import "./about.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
       <img src={about_img} alt="" className="about-img" />
       <img src={play_icon} alt="play_icon" className='play-icon'/>
      </div>

      <div className="about-right">
       <h3>About Our University</h3>
        <h2>Building Bright Futures Through Education</h2>
        <p>
          Our institution is dedicated to nurturing talent, encouraging innovation,
          and preparing students to become global leaders. With a commitment to academic
          excellence, we provide a wide range of programs that combine theory with practice.
        </p>
        <p>
          Beyond the classroom, students have opportunities to participate in
          research, internships, and community engagement projects that shape their
          professional and personal growth.
        </p>
        <p>
          Join us and become part of a vibrant learning community that inspires success,
          fosters creativity, and empowers individuals to make a difference in the world.
        </p>
      </div>
    </div>
  )
}

export default About