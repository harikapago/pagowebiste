import React,{useState,useEffect} from 'react'
import "./Styles/topsec.css";
import top from "../assets/top.png";
import play from "../assets/play.png";
import fb from "../assets/fb.png";
import insta from "../assets/in.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";

import Form from "./Form";
import { Modal } from "react-bootstrap";

const Topsec = () => {

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [backgroundColor2, setBackgroundColor2] = useState('#4077bc');
  // Function to toggle background color and h4 text color
  const toggleColors = () => {
    setBackgroundColor(backgroundColor === 'white' ? '#4077bc' : 'white');
    setBackgroundColor2(backgroundColor2 === '#4077bc' ? 'white' : '#4077bc');
  
  };

  useEffect(() => {
    // Set up an interval to toggle colors every 3 seconds
    const intervalId = setInterval(toggleColors, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [backgroundColor,backgroundColor2]);


  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='' style={{position:"relative",border:"",backgroundColor:""}}>

        <div style={{position:"absolute",top:210,left:5,display:"flex",flexDirection:"column"}}>
            <img src={tw} className='iconimg' id='blinking-image'/>
            <img src={fb} className='iconimg' id='blinking-image'/>
            <img src={insta} className='iconimg' id='blinking-image'/>
            <img src={yt} className='iconimg' id='blinking-image'/>
        </div>
      <div className="row" style={{margin:"0px",alignItems:"center"}}>
        <div className='col-12 col-md-6' style={{color:"#4077bc"}}>
        <h1 className='hed'>We provide solutions for
your Business and 
Services!</h1>   
<h5 className='smhed' style={{paddingTop:"1rem"}}>Enhance your returns by implementing our scalable framework.</h5>
        </div>
        <div className='col-md-6 d-none d-md-block ' style={{backgroundColor:"#4077bc",justifyItems:"center",alignItems:"center",paddingLeft:"10%"}} >
          <img className='zoom-on-hover topimgcl' src={top}/>  
         
        </div>
      </div>
<div className='container-fluid'>
      <div className='row' style={{height:"auto",marginTop:"0px",color:"#4077bc"}}>
        <div className='col-12 col-md-4'style={{paddingTop:"",paddingLeft:"5rem",paddingBottom:"1rem"}}>
          <a href="#aboutsec">
          <h6 style={{padding:"6px",borderRadius:"10px",textDecoration:"underline",textDecorationColor:"orange",marginTop:"2rem",cursor:"pointer"}}>Learn More</h6>
           </a> 
           <button className='btn btn-primary'  onClick={handleShowModal} style={{backgroundColor:"#e4edf2",color:"#4077bc",marginTop:"1rem",fontWeight:"500",fontSize:"18px",border:"0px",}}> Get In Touch
           <img src={play}  style={{marginLeft:"10px",height:"1.5rem",width:"1.5rem",borderRadius:"10rem"}}/>
            </button>

            <Modal show={showModal} 
      onHide={handleCloseModal} 
       dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content" >
          <Form  />
        </Modal>

        </div>
        <div className='col-1 d-md-none'></div>
        <div className='col-5 col-md-4' style={{paddingTop:"2rem",backgroundColor:backgroundColor2,height:"100%",color:"black",padding:"1rem"}}>
<h6>what we do?</h6>
<p style={{fontSize:"14px"}}>
Make sure all content has a clear goal. Your content direction starts with what you want to accomplish and who you need to reach to meet those goals.
</p>
        </div>
        <div className='col-5 col-md-4' style={{paddingTop:"2rem",borderRadius:"",backgroundColor,height:"100%",color:"black",padding:"1rem"}}>
<h6>what we do?</h6>
<p style={{fontSize:"14px"}}>
Make sure all content has a clear goal. Your content direction starts with what you want to accomplish and who you need to reach to meet those goals.
</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Topsec
