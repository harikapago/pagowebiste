import React from 'react';
import Navbar from '../Components/Navbar';
import Topsec from '../Components/Topsec';
import Journey from '../Components/Journey';
import Whatwedo from '../Components/Whatwedo';
import About from '../Components/About';
import Partners from '../Components/Partners';
// import Testimonials from '../Components/Testimonial';

const Home = () => {
  return (
    <div  style={{marginLeft:"0",marginRight:"0"}}>
      <Navbar/>
      <Topsec/>
       <About/>
      <Whatwedo/> 
      {/* <Testimonials/> */}
      <Partners/>
      <Journey/>
    </div>
  )
}

export default Home
