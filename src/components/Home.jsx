import React from 'react';

const Home = () => {
  const handleDownloadCV = () => {
  
    const cvUrl = 'https://drive.google.com/file/d/11Bz92Mgm_1CqP193gXOMTAS9lAvBgn4w/view?usp=sharing';

    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.target = '_blank'; // Open in a new tab
    downloadLink.download = 'sharon_cv.pdf'; // Set the desired file name
    downloadLink.click();
  };
  return (
    <div className='page-container'>
    <div className="home-content">
       <div className="home-text">
          <h1 className='home-title'>Hello,  my name is Sharon Tokiti</h1>
          <p> I'm thrilled to welcome you to my portfolio and I am very eager to contribute my skills and knowledge in a dynamic professional environment.</p>
          <h3 className='home-profession'>FULL STACK DEVELOPER AND A TEACHER!</h3>
          <button className='button-cv' onClick={handleDownloadCV}>Download CV</button>
       </div>
        <div className="home-img-container">
          <img src='/sharon.jpg' alt='sharon photo' className='home-img'/>
        </div>
   </div>
   </div>
    
  )
}

export default Home
