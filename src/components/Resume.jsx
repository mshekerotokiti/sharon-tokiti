import React from 'react';
import codeImage from '../icons/code.svg';
import designImage from '../icons/design.svg';
import teacherImage from '../icons/teacher.svg';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <h2>My Resume</h2>
        <div className="resume-item">
          <img src={codeImage} alt="Code Icon" />
          <div className="resume-details">
            <h3>Web Development</h3>
            <p>
              Highly motivated full stack Developer with a passion for creating innovative solutions. Experienced in creating web applications using React.js and currently learning Next.js.
            </p>
          </div>
        </div>
        <div className="resume-item">
          <img src={designImage} alt="Design Icon" />
          <div className="resume-details">
            <h3>UI/UX</h3>
            <p>
              Skilled in designing captivating and user-friendly interfaces using tools like Figma. Strong ability to create engaging user experiences.
            </p>
          </div>
        </div>
        <div className="resume-item">
          <img src={teacherImage} alt="Teaching Icon" />
          <div className="resume-details">
            <h3>Teaching</h3>
            <p>
              Trained teacher of Music and Kiswahili. Experienced in sharing knowledge with young learners and fostering a positive learning environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
