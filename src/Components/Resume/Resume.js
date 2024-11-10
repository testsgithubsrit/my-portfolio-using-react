// Resume.js
/*import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <>
    <div className='resume-page'>
     <div className="container text-center">
     <h1>Resume</h1>
  <div className="row">
    <div className="col">
      <h2>Education</h2>
      <div className="row">
    <div className="col">
      <p className='inner-data'>2021</p>
<h1>Matriculation</h1>

      <p className='inner-data'>.</p>

    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
    </div>
    <div className="col">
    <h2>Skills</h2>
    <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
    </div>
    <div className="col">
    <h2>Experience</h2>
    <div className="row">
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Resume;*/
import React from 'react';
//import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import { Link } from 'react-router-dom';

import './Resume.css'; // Ensure this is uncommented 

const Resume = () => {
 // const resumeRef = useRef();

  const downloadResume = () => {
    const element = document.getElementById('resume-content');
    const options = {
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <>
    <div className='bg'>
      <div className='cv'>
    <button onClick={downloadResume} className="btn btn-warning btn-outline-success fs-5 mb-1 ml-4 ">
  Download CV
</button></div>
      <div className="container" id="resume-content">
        <div className="left-side">
          <div className="profileText">
            <div className="imgbox">
              <img src='../neha.jpg'alt="Neha Kumari Profile" />
            </div>
            <h2>NEHA KUMARI<br /><span>Web Developer</span></h2>
          </div>
          <div className="contactinfo">
            <h3 className="title"><u>Contact Info</u></h3>
            <ul>
              <li>
                <span className="icon"><i className="bi bi-phone-fill"></i></span>
                <span className="text">+91 8252059036</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                <span className="text"> <Link to="nk6185211@gmail.com">nk6185211@gmail.com</Link></span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-github"></i></span>
                <span className="text"> <Link to="https://github.com/testsgithubsrit" target='_blank'>Github Profile</Link></span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-linkedin"></i></span>
                <span className="text"> <Link to="https://www.linkedin.com/in/neha-k-b28487278/" target='_blank'>Linkedin Profile</Link></span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-map"></i></span>
                <span className="text"> Jharkhand, India</span>
              </li>
            </ul>
          </div>
          <div className="contactinfo education">
            <h3 className="title"><u>EDUCATION</u></h3>
            <ul>
              <li>
               
                <h4>Diploma in Computer Science</h4>
                <h5>GARHWA POLYTECNIC GARHWA</h5>
                <h5>2022 - 2025</h5>
                <h5>percent - 75%</h5>
              </li>
              <li>
                
                <h4>MATRICULATION</h4>
                <h5>UP GRADED HIGH SCHOOL SOH</h5>
                <h5>2020 - 2021</h5>
                <h5>percent- 81.20%</h5>
              </li>
            </ul>
          </div>
          <div className="contactinfo language">
            <h3 className="title"><u>LANGUAGE</u></h3>
            <ul>
              <li>
                <span className="text"><h4>English</h4></span>
              
              </li>
              <li>
                <span className="text"><h4>Hindi</h4></span>
        
              </li>
            </ul>
          </div>
        </div>

        <div className="right-side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              I am Neha Kumari, born on 19 May 2006, and currently residing in Garhwa, Jharkhand. 
              I am a Third-year student pursuing a diploma in Computer Science and Engineering (CSE). 
              I possess skills in HTML, CSS, JavaScript, and React. I have a keen interest in 
              coding, and learning new things. Although I do not have any work experience yet, I am 
              eager to apply my skills and knowledge in practical settings and continue to grow both 
              personally and professionally.
            </p>
          </div>
          <hr />
         <div className="about">
  {/* Training Section */}
  <div className="box">
    <h2 className="title2">Training</h2>
    <hr />
    <div>
    <h5>***2 months online Training***<br />05/2024 - 07/2024</h5>
    <h5>INFOVIRTECH PVT. LTD., Mughalsarai</h5>
  </div>
  <hr/>
  </div>
  {/* Language Section */}
  <div className="box">
    <h2 className="title2">Language</h2>
    <hr />
    <h6>HTML, CSS, JavaScript, Bootstrap, and PHP/MySQL</h6>
  </div>
<hr/>
  {/* Project Section */}
  <div className="box">
    <h2 className="title2">Project</h2>
    <hr />
    <h4>iNOTES Web Application</h4>
    <h6>User can create, read, update, and delete their notes in the database.</h6>
  </div>
</div>

         {/* <div className="about skills">
            <h2 className="title2">Professional skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent">
                <div style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
                <div style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="box">
              <h4>JAVASCRIPT</h4>
              <div className="percent">
                <div style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="box">
              <h4>BOOTSTRAP</h4>
              <div className="percent">
                <div style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>*/}


<div className="about skills">
            <h2 className="title2">Professional skills</h2>
            <div className="box">
              
            <ul>
              <li>
                <span className="icon"><i className="bi bi-filetype-html"></i></span>
                <span className="text">HTML</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-filetype-css"></i></span>
                <span className="text">CSS</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-filetype-js"></i></span>
                <span className="text">JavaScript</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-filetype-php"></i></span>
                <span className="text">PHP/mySQL</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-bootstrap-fill"></i></span>
                <span className="text">Bootstap</span>
              </li>
              <li>
                <span className="icon"><i className="bi bi-filetype-jsx"></i></span>
                <span className="text">React js</span>
              </li>
              </ul>
             {/* <li>
                <span className="icon"><i className="bi bi-filetype-html"></i></span>
                <span className="text">+91 8252059036</span>
              </li>
              
              
              </ul>
             
              <h4>CSS</h4>
              <h4>PHP/mySQL</h4>
              <h4>JAVASCRIPT</h4>
              <h4>BOOTSTRAP</h4>
              <h4>REACT JS</h4>*/}
            
            </div>
           
          </div>

          <div className="about interest">
            <h2 className="title2">Projects</h2>
            
  <div className="row">
    <div className="col">
      <h4 className='project'>Weather App </h4>
     <h5>
          Technology used:- Creating a responsive weather app using html,css,bootstrap ,react.
          </h5>
    </div>
    <div className="col">
    <h4 className='project'>portfolio website </h4>
    <h5>
          Technology used:-  Responsive portfolio website using html,css,bootstrap, react.
          </h5>
    </div>
    <div className="col">
    <h4 className='project'>iNOTES web app </h4>
    <h5>
          Technology used:- Creating a responsive iNOTES app using html,css,bootstrap,php.
          </h5>
    </div>
    <div className="col">
    <h4 className='project'>icons flow  </h4>
    <h5>
          Technology used:- html,css,JavaScript.
          </h5>
    </div>
  </div>
  <p className='dec'> ** For more projects visit my Github profile.  </p>
</div>

          </div>
        </div>
        </div>
    
    </>
  );
}

export default Resume;
