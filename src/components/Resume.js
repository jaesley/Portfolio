import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className='Resume'>

<main id='resume'>
  <section id='recent-experience'>
    <h2 class='resume-section'>Recent Experience</h2>
    <section id='cogrammers' class='experience'>
      <h3 class='organization'>Cogrammers</h3>
      <h4 class='title'>Head of Business Development</h4>
      <h5 class='dates'>Aug 2017 - Present</h5>
      <p>
        Community-oriented, all-volunteer, non-profit learning platform for developers to share their knowledge base with new programmers and to continue their own personal development in both technical and interpersonal skills.
      </p>
    </section>

    <section id='dev-bootcamp' class='experience'>
      <h3 class='organization'>Dev Bootcamp</h3>
      <h4 class='title'>Student Developer</h4>
      <h5 class='dates'>May 2017 - Aug 2017</h5>
      <p>
        Eighteen-week program devoted to immersive web development curriculum based around Javascript, Ruby, and Rails, with a focus on test-driven development and pair programming within an Agile framework. Developed extensively in Ruby via Rails and Sinatra, and in Javascript via jQuery, React.js, Node.js, and Express.
      </p>
    </section>

    <section id='barnes-noble' class='experience'>
      <h3 class='organization'>Barnes & Noble</h3>
      <h4 class='title'>Merchandise Manager</h4>
      <h5 class='dates'>Mar 2013 - Jan 2017</h5>
      <p>
        Oversaw 2 of the highest grossing departments of store, including 3 department leads and 35 store employees. Met and exceeded sales plan for prior fiscal year, including out-performing the previous fiscal year. Position duties included optimizing in-store merchandising to best drive sales and conform to company-wide standards and directives; training current and new employees on proper procedures for merchandising, cash handling, and customer service. As manager on duty, oversaw open and close of store; prioritized and delegates\d employee tasks based on current store needs; mediated employee conflicts; ensured proper revenue handling and customer service techniques to minimize company loss; and responded to customer concerns, complaints, and emergencies, providing feedback to higher management as necessary on possible or ongoing issues. 
      </p>
    </section>
  </section>

  <section id='recent-education'>
    <h2 class='resume-section'>Recent Education</h2>
    <section id='dbc' class='education'>
      <h3 class='organization'>Dev Bootcamp</h3>
      <h4 class='title'>Web Development</h4>
      <h5 class='dates'>Mar 2017 - Aug 2017</h5>
      <p>
        Immersive web development program.
      </p>
    </section>

    <section id='alabama' class='education'>
      <h3 class='organization'>University of Alabamap</h3>
      <h4 class='title'>BA English</h4>
      <h5 class='dates'>Mar 2017 - Aug 2017</h5>
      <p>
        Summa cum laude; 4.0 GPA<br />
        Thomas Wolfe Award for Best Student Writer
      </p>
    </section>
  </section>
</main>

Ruby
Ruby Rspec
Rails Sinatra
ActiveRecord
Other Technologies
HTML CSS
SQL Java
Microsoft Excel
Javascript
Javascript JQuery
React AJAX
Node.js Express
Development
Agile Workow
Git and Github
Pair Programming Technical Writing
Test-Driven Development
Bootcampr http://bootcampr.herokuapp.com
Community hub for bootcamp alumni. Created in 1 week with a team of 4. Personal
contributions include: Github OAuth integration, weekly email newsletter generation and
distribution, tagging system, all written text, Travis CI integration, and Heroku deployment.
READme http://github.com/jaesley/READme
Goodreads-integrated app to track upcoming releases by authors users have previously read.
Based in Rails, with technical challenges including a focus on speedy, parallel API requests
and returning live database writes to the user via ActionCable. Sole contributor.
Prole
Recent Experience
Education
Skills
Recent Projects


      </div>
    );
  };
};

export default Resume;
