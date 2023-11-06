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

import "./Styles/about.css";

const About = () => {
  return (
    <div id="aboutsec" style={{position:"relative",paddingBottom:"2rem",paddingTop:"2rem"}}>
      <div style={{position:"absolute",top:210,left:5,display:"flex",flexDirection:"column"}}>
            <img src={tw} className='iconimg' id='blinking-image'/>
            <img src={fb} className='iconimg' id='blinking-image'/>
            <img src={insta} className='iconimg' id='blinking-image'/>
            <img src={yt} className='iconimg' id='blinking-image'/>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginTop:"2rem",paddingLeft:"10px"}}>
        <img src={right} style={{ height:"1.5rem",width:"6rem",marginTop:"10px",marginBottom:"10px"}} />
        </div>
       
        <div className='aboutbg' style={{paddingBottom:"2rem",marginTop:"0",position:"relative"}}>


      

{/* <img src={right} style={{height:"1.5rem",width:"6rem",marginLeft:"90%",marginTop:"10px"}} /> */}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:"2rem"}}>
<div className='col-4' style={{paddingLeft:"2rem",color:"#4077bc"}}>
<h5 className="fontfam" style={{textDecoration:"underline",textDecorationColor:"orange",fontWeight:"bold"}}>ABOUT US</h5>

<p style={{marginTop:"4rem",letterSpacing:"0.5px",fontSize:"16px"}}>Make sure all content has a clear goal. Your content direction starts with what you want to accomplish and who you need to reach to meet those goals.

</p>
<img src={video} style={{height:"13rem",width:"23rem",marginTop:"2rem"}} />

<div style={{marginTop:"2rem"}}>
<button className='btn btn-primary' style={{marginRight:"2rem",backgroundColor:"#e4edf2",color:"#4077bc",fontWeight:"500",fontSize:"18px",border:"0px",width:"12rem"}}> Get In Touch
   <img src={play}  style={{marginLeft:"10px",height:"1.5rem",width:"1.5rem",borderRadius:"10rem"}}/>
    </button>
    </div>
</div>

</div>
<div style={{marginTop:"2rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"}}>

<img src={left} style={{marginTop:"2rem",height:"1.5rem",width:"6rem",marginLeft:"10px"}} />

    


</div>

</div>
    </div>
   
  )
}

export default About;

