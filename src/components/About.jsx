import React from 'react';
import codeImage from '../icons/code.svg';
import designImage from  '../icons/design.svg';
import teacherImage from '../icons/teacher.svg';

const About = () => {
  return (
    <div className='about'>
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-section'>
          <h1>About Me</h1>
          <p>
            I am a highly motivated full stack Developer and a teacher with a passion for creating innovative solutions. As a detail-oriented individual, I thrive in collaborative settings and enjoy working with diverse teams to tackle problems. Aside from the profesions, I like being in the kitchen trying out recipes and other culinary things and producing some food products. I am also an outdoor person, moreso camping and swimming.
          </p>
        </div>
      </div>
      <div className='about-img-container'>
        <img src='/sharon.jpg' alt='about image' className='about-img' />
      </div>
    </div>

     <div className='card-content'>
     <h2>What I do</h2>
     </div>
   <div className='card-container'>
   <div className='card'>
   <h4 className='card-title'><img src={codeImage} alt="codeImage" /> Web Development</h4>
   <p>I am captivated in creating web applications using React.js. I am in the process of learning Next.js</p>
   </div>

   <div className='card'>
   <h4 className='card-title'><img src={designImage} alt="codeImage" />  UI/UX </h4>
   <p>Designing captivating and user friendly interfaces is something I am truly passionate about when using Figma. </p>
   </div>

   <div className='card'>
   <h4 className='card-title'><img src={teacherImage} alt="codeImage" />Teaching</h4>
   <p>Being a trained teacher of Music and Kiswahili, I have found great joy in sharing my knowledge with young ones. </p>
   </div>
   </div>
  
   </div>
  )
}

export default About
