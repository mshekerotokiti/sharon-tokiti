import React from 'react';
import About from './About';
import Resume from './Resume';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='page-container'>
    <div className="home-content">
       <div className="home-text">
          <h1 className='home-title'>Hello,  my name is Sharon Tokiti</h1>
          <p> I'm thrilled to welcome you to my portfolio and I am very eager to contribute my skills and knowledge in a dynamic professional environment.</p>
          <h3 className='home-profession'>FULL STACK DEVELOPER AND A TEACHER!</h3>
          <button className='button-cv'>Download CV</button>
       </div>
        <div className="home-img-container">
          <img src='/sharonhome.jpg' alt='sharon photo' className='home-img'/>
        </div>
   </div>
   </div>
    
  )
}

export default Home
