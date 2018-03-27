import React, { Component } from 'react';

export default (props) => {
		return(
	    <div className="container">
	      <div className="row">
	        <div className="row">
	        <br />
	          <div className="row">
	          <h3 className="center sectionheader">Skills</h3>
	          <br />
	          <section id = "gamesHome">
	            <div className="column">
	              <p>I am a game designer with eight years of experience programming in C++ and working within Unity 3D. I have been designing and programming games as a hobby for 6+ years, and made my first attempt at commercial game development at the end of 2011. Much of my time is spent developing websites and working on my own personal projects/businesses.</p>
	            </div>
	            <div className="logos">
	              <div className="row center">
	                <div className="one-third column">
	                  <a href="https://unity3d.com">
	                  <img alt="Unity 3D" className="sitepreview" src="http://michaelburnley.com/assets/images/unity-logo.png" />
	                  </a>
	                </div>
	                <div className="one-third column">
	                  <img alt="C++" className="sitepreview" src="http://michaelburnley.com/assets/images/cplusplus.png" />
	                </div>
	                <div className="one-third column">
	                  <img alt="HTML 5" className="sitepreview" src="http://michaelburnley.com/assets/images/html5.png" />
	                </div>
	              </div>
	              <div className="row center">
	                <div className="one-third column">
	                  <a href="https://www.ruby-lang.org/en/">
	                  <img alt="Ruby" className="sitepreview" src="http://michaelburnley.com/assets/images/ruby.png" />
	                  </a>
	                </div>
	                <div className="one-third column">
	                  <a href="https://www.python.org/">
	                  <img alt="Python" className="sitepreview" src="http://michaelburnley.com/assets/images/python-logo-master-v3-TM.png" />
	                  </a>
	                </div>
	                <div className="one-third column">
	                  <span>+ MORE</span>
	                </div>
	              </div>
	            </div>
	          </section>
	          </div>
	          <br /><br />
	          <div className="row">
	          <h3 className="center sectionheader">Development Skills</h3>
	          <br /><br />
	          <section>
	              <ul className="skill-list">
	                <li className="skill">
	                  <h3>C++</h3>
	                  <progress className="skill-1" max="100" value="95">
	                    <strong>Skill Level: 95%</strong>
	                  </progress>
	                </li>
	                <li className="skill">
	                  <h3>HTML/CSS</h3>
	                  <progress className="skill-4" max="100" value="90">
	                    <strong>Skill Level: 90%</strong>
	                  </progress>
	                </li>
	                <li className="skill">
	                  <h3>Unity 3D</h3>
	                  <progress className="skill-3" max="100" value="85">
	                    <strong>Skill Level: 85%</strong>
	                  </progress>
	                </li>
	                <li className="skill">
	                  <h3>Ruby</h3>
	                  <progress className="skill-2" max="100" value="75">
	                    <strong>Skill Level: 75%</strong>
	                  </progress>
	                </li>
	                <li className="skill">
	                  <h3>Python</h3>
	                  <progress className="skill-5" max="100" value="70">
	                    <strong>Skill Level: 70%</strong>
	                  </progress>
	                </li>
	              </ul>
	          </section>
	          </div>
	          <br /><br />
	          <div className="row">
	          <h3 className="center sectionheader">Work History</h3>
	          <br /><br />
	          <section id = "gamesHome">
	            <div className="row">
	              <div className="one-half column">
	                <h4 className="center"><a href="http://dokidokidesu.com">Doki Doki Desu</a> / <a href="http://kawaiicrate.com">Kawaii Crate</a></h4>
	                <div className="center">
	                  <span className="bold">Founder </span>- Los Angeles, CA
	                  <br />
	                  <span>May 2014 - now</span>
	                </div>
	                <br />
	                <ul className="resumeBullet">
	                  <li>Web Development</li>
	                  <li>Online Marketing</li>
	                  <li>Business Development</li>
	                  <li>Customer Service</li>
	                </ul>
	                <a href="http://kawaiicrate.com"><img className="screenshots mobile-ss" src="http://michaelburnley.com/assets/images/kawaiiCrateScreenshot.PNG" /></a>
	                <br /><br />
	                <p className="resumeDescription">At my companies, Doki Doki Desu and Kawaii Crate, I manage our online communications and development. At 1.5 years of operation, we’ve been successful and growing fast within our niche.</p>
	              </div>
	              <div className="one-half column">
	              <h4 className="center"><a href="http://zooshoo.com">ZOOSHOO</a></h4>
	              <div className="center">
	                <span className="bold">Tech Management Specialist </span>- Chino, CA
	                <br />
	                <span>May 2012 - now</span>
	              </div>
	              <br />
	              <ul className="resumeBullet">
	                <li>Data Management</li>
	                <li>Online Marketing</li>
	                <li>Web Development</li>
	                <li>E-commerce</li>
	              </ul>
	              <a href="http://zooshoo.com"><img className="screenshots mobile-ss" src="http://michaelburnley.com/assets/images/zooshooScreenshot.PNG" /></a>
	              <br /><br />
	                <p className="resumeDescription">At ZOOSHOO I work as IT, being solely responsible for implementing new features into the website as well as develop new tools and for use by our business development team.</p>
	              </div>
	            </div>
	            <div className="row">
	              <div className="one-half column">
	                <h4 className="center">Cybercow Games</h4>
	                <div className="center">
	                  <span className="bold">Founder & Lead Programmer </span>- Pomona, CA
	                  <br />
	                  <span>January 2011 - March 2013</span>
	                </div>
	                <br />
	                <ul className="resumeBullet">
	                  <li>Project Management</li>
	                  <li>Tools Developement</li>
	                  <li>Application/Game Programming</li>
	                  <li>Game Design</li>
	                </ul>
	                <a className="hide" href="http://zooshoo.com"><img className="full-width" src="http://placehold.it/400x300" /></a>
	                <p className="resumeDescription">I worked as Project Manager and Lead Programmer for our development team (3 programmers, 2 artists, and 1 sound designer.) We were developing a mobile, free-to-play game with minor micro-transactions as our first game as a formal company, designed by myself and Markise Gladney.</p>
	              </div>
	              <div className="one-half column">
	              <h4 className="center">UPS</h4>
	              <div className="center">
	                <span className="bold">Package Data Manager </span>- Goleta, CA
	                <br />
	                <span>March 2010 - May 2012</span>
	              </div>
	              <br />
	              <ul className="resumeBullet">
	                <li>Technical Support</li>
	                <li>Data Correction</li>
	                <li>Excel Work</li>
	                <li>Operations</li>
	              </ul>
	              <a className="hide" href="http://zooshoo.com"><img className="full-width" src="http://placehold.it/400x300" /></a>
	                <p className="resumeDescription">At UPS I was the youngest at my hub hired to a management position. I worked within a team of 4 to manage operations during the early morning rush.</p>
	              </div>
	            </div>
	          </section>
	          </div>
	          <br />
	          </div>
	      </div>
	  </div>
)
}