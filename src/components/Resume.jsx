import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <h2>My Resume</h2>

        {/* Education Section */}
        <div className="resume-education-section">
          <h3>Education</h3>
          <div className="resume-item">
            <p>Feb - August 2023</p>
            <h4> Software Development</h4>
            <p>Moringa School</p>
          </div>

          <div className="resume-item">
            <p>2017-2021</p>
            <h4> Bachelors of Education</h4>
            <p> Kenyatta University</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="resume-work-section">
          <h3>Experience</h3>
          <div className="resume-item">
            <h4>Mission Star Academy</h4>
            <p>Teacher Assistant</p>
            <p>March - August 2022</p>
          </div>

          <div className="resume-item">
            <h4>Pumwani Boys Secondary School</h4>
            <p>Teacher Intern</p>
            <p>October - December 2021</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3>Work Skills</h3>
          <ul>
            <li>Web Development (JavaScript, React.js, Next.js,HTML5, CSS3, Bootstrap)</li>
            <li>UI/UX Design (Figma)</li>
            <li>Backend Development( SQL, PostgreSQL, Ruby, Ruby on Rails)</li>
            <li>Teaching (Music and Kiswahili)</li>
            <li>Version Control</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Project Management</li>
            <li>Product Pitching</li>
            <li>Team collaboration</li>
            <li>Communication</li>
            <li>Problem solving</li>
            <li>Professionalism</li>
          </ul>
        </div>
         {/* contact Section */}
        <div className='resume-contact-section'>
          <h3>Contact Persons (References)</h3>
          <ul className='resume-list'>
            <li className='resume-item'>
              <h4>David Muigai</h4>
              <p>Lecturer, Kenyatta University</p>
              <p> Email:<a href="mailto:damuigai@gmail.com">damuigai@gmail.com</a></p>
              <p>Phone: +254 719 533 546</p>
            </li>

            <li className='resume-item'>
            <h4>Maureen Murimi</h4>
              <p>Technical Mentor, Moringa School</p>
              <p> Email:<a href="mailto:murimimaureen8@gmail.com">murimimaureen8@gmail.com</a></p>
              <p>Phone: +254 799 280 333</p>
            </li>

            <li className='resume-item'>
            <h4>Regina Mwanyumba</h4>
              <p>Director, Mission Star Academy</p>
              <p> Email:<a href="mailto:mwanyumbaregina@gmail.com">mwanyumbaregina@gmail.com</a></p>
              <p>Phone: +254 705 956 723</p>
            </li>

            <li className='resume-item'>
            <h4> Mr Mwangi</h4>
              <p>Principal, Pumwani Boys Secondary School</p>
              <p>Phone: +254 724 046 623</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Resume;
