import React from 'react'
import video from "../assets/video.png";
import what from "../assets/what.png";
import play from "../assets/play.png";
import right from "../assets/right.png";
import left from "../assets/left.png";
import fb from "../assets/fb.png";
import insta from "../assets/in.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";

import "./Styles/journey.css";

const Journey = () => {
  return (
    <div style={{position:"relative",paddingBottom:"1rem"}}>
      <div style={{position:"absolute",top:210,left:5,display:"flex",flexDirection:"column"}}>
            <img src={tw} className='iconimg' id='blinking-image'/>
            <img src={fb} className='iconimg' id='blinking-image'/>
            <img src={insta} className='iconimg' id='blinking-image'/>
            <img src={yt} className='iconimg' id='blinking-image'/>
        </div>
        <img src={right} style={{height:"1.5rem",width:"6rem",marginLeft:"92%",marginTop:"10px",marginBottom:"10px"}} />
        
        <div className='col-4' style={{paddingLeft:"2rem",color:"#4077bc"}}>
<h5 style={{textDecoration:"underline",textDecorationColor:"orange",fontWeight:"bold",paddingBottom:"0.5rem"}}>SUCCESS JOURNEY
</h5>
</div>
        
        <div className='jrbg' style={{paddingBottom:"2rem",marginTop:"0",position:"relative"}}>


      

{/* <img src={right} style={{height:"1.5rem",width:"6rem",marginLeft:"90%",marginTop:"10px"}} /> */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:"2rem"}}>


</div>
<div style={{marginTop:"31rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"}}>

<img src={left} style={{marginTop:"5rem",height:"1.5rem",width:"6rem",marginLeft:"10px"}} />
<div>
<button className='btn btn-primary' style={{marginRight:"2rem",backgroundColor:"#e4edf2",color:"#4077bc",fontWeight:"500",fontSize:"18px",border:"0px",width:"12rem"}}> Get In Touch
   <img src={play}  style={{marginLeft:"10px",height:"1.5rem",width:"1.5rem",borderRadius:"10rem"}}/>
    </button>
    </div>
    
<div style={{position:"absolute",top:59,left:810,width:"20%"}}>
<h5  style={{color:"#eb349e",fontWeight:"bolder",fontSize:"26px",marginBottom:"2px"}}>Step 04</h5>
<p style={{fontSize:"13px"}}>Make sure all content has a clear goal. Your content direction starts with what you want to accomplish</p>
</div>
<div style={{position:"absolute",top:125,left:250,width:"20%"}}>
<h5 style={{color:"#3496eb",fontWeight:"bolder",fontSize:"26px",marginBottom:"2px"}}>Step 03</h5>
<p style={{fontSize:"13px"}}>Make sure all content has a clear goal. Your content direction starts with what you want to accomplish</p>
</div>

<div style={{position:"absolute",top:230,left:710,width:"20%"}}>
<h5 style={{color:"#eb7434",fontWeight:"bolder",fontSize:"26px",marginBottom:"2px"}}>Step 02</h5>
<p style={{fontSize:"13px"}}>Make sure all content has a clear goal. Your content direction starts with what you want to accomplish</p>
</div>

<div style={{position:"absolute",top:340,left:260,width:"20%",}}>
<h5 style={{color:"#05b0aa",fontWeight:"bolder",fontSize:"26px",marginBottom:"2px"}}>Step 01</h5>
<p style={{fontSize:"13px"}}>Make sure all content has a clear goal. Your content direction starts with what you want to accomplish</p>
</div>

</div>

</div>
    </div>
   
  )
}

export default Journey;

