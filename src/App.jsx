import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video/VideoPlayer';


const App = () => {
  const  [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
         <Title subTitle="Our PROGRAM" title="Explore Our Programs"/>
         <Programs />
         <About setPlayState = {setPlayState}/>
          <Title subTitle="See Our Gallery" title="Campus Photos"/>
          <Campus />  
           <Title subTitle="Testimonials" title="What Student Says"/>
           <Testimonials />
            <Title subTitle="Contact us" title="Connect with us"/>
          <Contact />
          <Footer /> 
      </div>
       <VideoPlayer playState={playState}setPlayState={setPlayState}/>

    </div>
  )
}

export default App