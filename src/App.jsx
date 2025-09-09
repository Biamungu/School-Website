import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
         <Title subTitle="Our PROGRAM" title="Explore Our Programs"/>
         <Programs />
         <About />
          <Title subTitle="See Our Gallery" title="Campus Photos"/>
          <Campus />  
           <Title subTitle="Testimonials" title="What Student Says"/>
           <Testimonials />
            <Title subTitle="Contact us" title="Connect with us"/>
          <Contact />
      </div>
     
    </div>
  )
}

export default App