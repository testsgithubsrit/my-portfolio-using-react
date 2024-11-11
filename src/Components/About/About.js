import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'
const About = () => {
  return (
    <>
<div className='body'>
<div className=" text-center">
          <div className="row home">
             
              <div className="col-sm-4">
                  <div className="home-imgs">
                      <img src="../neha.jpg" alt="profile pic" className="profile-pic"/>
                  </div>
  
              </div>
              <div className="col-sm-8">
                  <div className="home-info">
                      <h1>
                        About Me<br/> </h1>
                        <h2> <span id="purple">Frontend Developer</span><br/></h2>
                      <p>Hi, I’m Neha Kumari, a self-taught web developer with a growing passion for coding and problem-solving. Since starting my journey in tech, I've been dedicated to learning new skills and working on hands-on projects to build a solid foundation in web development. My expertise includes HTML, CSS, and JavaScript, and I'm currently exploring libraries and frameworks like React to create dynamic user experiences.<br/><br/>

Even though I’m new to the field, I’m constantly challenging myself to improve and grow. I’m excited to bring my unique perspective and enthusiasm to any opportunity that comes my way. I look forward to contributing to projects that make a difference while learning from experienced professionals and teams.<br/><br/>

When I’m not coding, I enjoy reading, exploring tech trends, or learning new tools. Thank you for visiting my site, and I’d love to connect!</p>
                      <div className="btn-sci mx-6 ">
                          <a href="/Resume" className="btn btn-warning btn-outline-success fs-5 mb-4 ">Visit more</a>
                      </div>
                      
                  </div>
              </div>
          </div>
 
        </div>
        </div>
        <Footer/>
     
    </>
  )
}

export default About;