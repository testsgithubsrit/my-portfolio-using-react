
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
    useEffect(() => {
      const options = {
        strings: ['front end', 'web developer.'],
        typeSpeed: 70,
        backSpeed: 50,  // Optional: Speed of backspacing
        loop: true,     // Optional: Loop the typing effect
        startDelay: 500 // Optional: Delay before typing starts
      };
  
      // Initialize Typed.js
      const typed = new Typed('#element', options);
  
      return () => {
        typed.destroy();
      };
    }, []);
    return (
     <>
     <div className='body'>
    <div className=" text-center">
          <div className="row home">
              <div className="col-sm-8">
                  <div className="home-info">
                      <h2>
                        Hii,<br/> My name is <span id="purple">Neha kumari</span> and I'm a<br/> <span id="element"></span></h2>
                      <p>Hello! I'm Neha Kumari, an aspiring web developer with a strong passion for coding and creating beautiful, functional websites. I may be at the beginning of my journey, but I'm constantly learning and improving my skills by working on real-world projects. I'm currently seeking opportunities to grow my expertise, collaborate with experienced professionals, and bring creative ideas to life. Thank you for visiting my portfolio—I'm excited to showcase my progress and connect with others in the tech community</p>
                      <div className="btn-sci mx-6 ">
                          <a href="/Resume" className="btn btn-warning btn-outline-success fs-5 mb-4 ">view CV</a>
                      </div>
                          <div className="sci">
                              
                              <a href=" https://github.com/testsgithubsrit?tab=repositories"className="text-dark ">
                                  <span className="bi bi-github icons "></span>Github
                              </a>
                              <a href="https://www.linkedin.com/in/neha-k-b28487278/"className="text-dark">
                                  <span className="bi bi-linkedin icons"></span>Linkedin
                              </a>
                            
                          
                          </div>
  
                      
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="home-img">
                      <img src="../neha.jpg" alt="profile pic" className="profile"/>
                  </div>
  
              </div>
          </div>        
        </div>       
       </div>
        <Footer/>
     </>
    );
    
    
  }
  
  
  export default Home;
  
