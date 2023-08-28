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
          I am an enthusiastic and dedicated full stack Developer and Educator, driven by a fervor for crafting inventive solutions. My attention to detail is second nature, and I thrive within collaborative environments, reveling in the opportunity to collaborate with diverse teams to solve challenges. Beyond my professional pursuits, I find solace in culinary experiments and recipe explorations within the kitchen, resulting in delightful culinary creations. My affinity for the outdoors compels me to embrace activities such as camping,travelling and swimming. As you journey through my profile, you'll discover the amalgamation of my technical prowess, teaching endeavors, and my diverse range of passions.
          </p>
        </div>
      </div>
      <div className='about-img-container'>
        <img src='/sharon.jpg' alt='about image' className='about-img' />
      </div>
    </div>

     
     <div className='card-content'>
  <h2>What I Specialize In</h2>
</div>
<div className='card-container'>
  <div className='card'>
    <h4 className='card-title'><img src={codeImage} alt="codeImage" /> Crafting Digital Experiences</h4>
    <p>My fascination lies in shaping captivating web applications using React.js, where I can seamlessly merge technology with creativity. Currently, I'm also exploring the realms of Next.js.</p>
  </div>

  <div className='card'>
    <h4 className='card-title'><img src={designImage} alt="codeImage" /> Designing Intuitive UI/UX</h4>
    <p>Delving into the world of UI/UX design is my passion. Creating interfaces that effortlessly guide users and leave a lasting impression is my way of merging aesthetics with functionality, using tools like Figma to bring visions to life.</p>
  </div>

  <div className='card'>
    <h4 className='card-title'><img src={teacherImage} alt="codeImage" />Sharing Knowledge as a Teacher</h4>
    <p>As a trained educator in Music and Kiswahili, I have discovered immense satisfaction in imparting knowledge to young minds. Guiding them through the realm of learning and igniting curiosity is my way of nurturing future talents.</p>
    </div>
  </div>
</div>

  )
}

export default About
