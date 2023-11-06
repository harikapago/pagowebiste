import React,{useState} from 'react';
import Navbar from "./Navbar.jsx";
import icon from "../assets/appl.avif";
import "./Styles/careers.css";
import active from "../assets/play.png";
import CareerModal from './CareerModal.jsx';
import { Modal } from "react-bootstrap";
import arrow from "../assets/arrow.png";

const Careers = () => {
  
  

  const [openModalIndex, setOpenModalIndex] = useState(null);

  const toggleModal = (index) => {
    setOpenModalIndex(openModalIndex === index ? null : index);
  };
  const divsToRender = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div >
      <Navbar/>
      <div style={{marginTop:"30%",padding:"2%"}}>
        <h3 style={{textDecoration:"underline",textDecorationColor:"orange"}}>Careers</h3>
        <div style={{height:"auto",marginTop:"5%"}}>
        {divsToRender.map((index) => (
    <div  key={index} style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"130%",backgroundColor:"whitesmoke",marginLeft:"70%",marginBottom:"10%"}}>
    <div className='col-2'>
    <h6 class="rotate-right" style={{textAlign:"center",letterSpacing:"0.5px",fontSize:"12px",backgroundColor:"#4077bc",color:"white"}}>26/09/2023</h6>
    </div>  

<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='col-6'>
  <div >
    <h4 style={{backgroundColor:"",color:"#4077bc",letterSpacing:"2px",padding:"5px"}}>01</h4></div>   
      <div style={{display:"flex",flexDirection:"column",paddingLeft:"20px"}}>
        <h5 style={{color:"#4077bc"}}>.Net Full Stack Developer</h5>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"10px",paddingRight:"10px"}}>
          <img src={icon} style={{height:"2.5rem",width:"3.5rem",marginTop:"0"}}/>
          <p className='' 
       style={{fontSize:"10px",width:"12rem",paddingTop:"5px",paddingLeft:"10px"}}>Job descrption To rotate the content to the right side, you can use CSS to apply a rotation transform.</p>
      
     

        </div>
      
      </div>
      </div>
      
      <div className='col-4' style={{marginLeft:"5%"}}>
        <button className='btn btn-primary' style={{backgroundColor:"#e4edf2",color:"#4077bc",fontWeight:"bold",fontSize:"15px",width:"85%"}}>
         Apply <img src={active} style={{borderRadius:"25px",height:"25px",width:"25px"}}/>
        </button>
      </div>

     
    

    <div onClick={() => toggleModal(index)} style={{cursor:"pointer",position:"absolute",top:98,left:400,border:"0px"}}>
      <img src={arrow} style={{height:"30px",width:"50px",objectFit:"fill"}}/>
    </div>
    {openModalIndex === index && (
            <div
              className="job-description-modal"
              style={{
                position: "absolute",
                top: 98, // Adjust the top and left values as needed
                left: 0,
                backgroundColor: "whitesmoke",
                color:"black",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                zIndex: "100",
                width:"100%"
              }}
            >
              {/* Add your job description content here */}
              <h5>Responsibilities</h5>
              <p>
              Participate in requirements analysis
Collaborate with internal teams to produce software design and architecture
Write clean, scalable code using .NET programming languages
Test and deploy applications and systems
Revise, update, refactor and debug code
Improve existing software
Develop documentation throughout the software development life cycle (SDLC)
Serve as an expert on applications and provide technical support
              </p>
<hr></hr>
<h5>Skills</h5>
<p>HTML, CSS, JS, Node,Express</p>
<hr></hr>
<h5>Experience</h5>
<p>3-5 Years</p>
<hr></hr>
<h5>Location</h5>
<p>Hyderabad</p>
              {/* Close button */}
              <button onClick={() => toggleModal(index)}>Close</button>
            </div>
          )}
    </div>
     ))}
     </div>
     </div>
    </div>
  )
}

export default Careers



