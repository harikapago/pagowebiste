import React from 'react'
import video from "../assets/video.png";
// import swot from "../assets/swot.png";
import play from "../assets/play.png";
import right from "../assets/right.png";
import left from "../assets/left.png";

import fb from "../assets/fb.png";
import insta from "../assets/in.png";
import tw from "../assets/tw.png";
import yt from "../assets/yt.png";

const Whatwedo = () => {
  return (
    <div style={{position:"relative",marginBottom:"2rem"}}>
      <div style={{position:"absolute",top:210,left:5,display:"flex",flexDirection:"column"}}>
            <img src={tw} className='iconimg' id='blinking-image'/>
            <img src={fb} className='iconimg' id='blinking-image'/>
            <img src={insta} className='iconimg' id='blinking-image'/>
            <img src={yt} className='iconimg' id='blinking-image'/>
        </div>
    <div style={{paddingBottom:"2rem",position:"relative",marginLeft:"2rem"}}>

     
        <img src={right} style={{height:"1.5rem",width:"6rem",marginLeft:"92%"}} />
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:"2rem"}}>
        <div className='col-4' style={{paddingLeft:"4rem",color:"#4077bc"}}>
      <h5 style={{textDecoration:"underline",textDecorationColor:"orange",fontWeight:"bold"}}>WHAT WE DO</h5>
      <p style={{fontSize:"25px"}}>Your content direction starts with what you want to accomplish and who you need to reach to meet those goals.</p>
      </div>
      <div className='col-6'>
        <img src={video} style={{height:"14rem",width:"25rem",marginLeft:"20%"}} />
      </div>
      </div>
      {/* <img src={swot} style={{width:"80%",marginLeft:"10%",marginRight:"10%",marginTop:"2rem"}}/> */}
<div>
      <button className='btn btn-primary' style={{marginLeft:"2rem",backgroundColor:"#e4edf2",color:"#4077bc",marginTop:"1rem",fontWeight:"500",fontSize:"18px",border:"0px",width:"18%"}}> Get In Touch
           <img src={play}  style={{marginLeft:"10px",height:"1.5rem",width:"1.5rem",borderRadius:"10rem"}}/>
            </button>
            </div>
            <img src={left} style={{marginTop:"2rem",height:"1.5rem",width:"6rem",}} />
    </div>
    </div>
  )
}

export default Whatwedo
