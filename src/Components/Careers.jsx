import React,{useState} from 'react'
import Navbar from "./Navbar.jsx";
import "./Styles/careers.css";
import active from "../assets/play.png";
import inactive from "../assets/play2.png";
import arrow from "../assets/arrow.png";

const Jobs = [
  { id:"01",
  date:"26/09/2023",
    title:".Net Developer",
    status:"inactive",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },
 { id:"02",
 date:"14/08/2023",
    title:"MERN Developer",
    status:"active",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },
 { id:"03",
 date:"14/08/2023",
    title:"Data Analyst",
    status:"inactive",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },
 { id:"04",
 date:"14/08/2023",
    title:"BI Developer",
    status:"active",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },
 { id:"05",
 date:"14/08/2023",
    title:"Sales Executive",
    status:"inactive",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },
 { id:"06",
 date:"14/08/2023",
    title:"HR Associate",
    status:"active",
    Qualifications:"Strong knowledge of .NET framework ,Familiar with various design and architectural patterns,Understanding of fundamental design principles for building a scalable application,Strong understanding of object-oriented programming,Skill for writing reusable libraries,Knack for writing clean, readable, and easily maintainable code" ,
  Skills:"C#, ASP.NET with MVC, Web API, HTML5, jQuery, Angular/Javascript, CSS3",
  positontype:" Full Time",
Location:"Hyderabad",
 },]

const Careers = () => {
  const [openDescriptionId, setOpenDescriptionId] = useState(null);

  const toggleDescription = (jobId) => {
    setOpenDescriptionId(openDescriptionId === jobId ? null : jobId);
  };
  const activeJobsCount = Jobs.filter((job) => job.status === 'active').length;
// console.log(`Number of active jobs: ${activeJobsCount}`);

  return (
    <div style={{backgroundColor:""}}>
      <Navbar/>

      <div className='container-fluid' style={{marginTop:"2rem"}}>
      
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <h3 className='head1'>Careers</h3>
        <span  class="btn btn-primary position-relative">
  Open Positions
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {activeJobsCount}
    
  </span>
</span></div> 

        {Jobs.map((job,index) => (  
        <div className="eachjobsec" key={job.id} style={{position:"relative",marginBottom:"5%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",}}>
        <div className='job' style={{backgroundColor:"whitesmoke",display:"flex",justifyContent:"",alignItems:"center",color:"white",width:"60%",}}>
          
          <p className='col-1 rotate-right' style={{textAlign:"center",margin:"0",backgroundColor:" #4077bc",width:"7rem"}}>{job.date}</p>
          <div className="col-7 justf"style={{margin:"0",display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
            <h2 style={{margin:"10px",color:"#4077bc"}}>0{index+1}</h2>
            <div style={{display:"flex",flexDirection:"column"}}>
              <h3 style={{margin:"10px",color:"#4077bc"}}>{job.title}</h3>
              <div style={{display:"flex"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&usqp=CAU" style={{height:"30%",width:"10%",margin:"10px"}}/>
                <p style={{margin:"10px",color:"black",fontSize:"12px"}}>{job.Qualifications.slice(0,100)}</p>
              </div>
              
          </div>
        </div>

        <button 
        
        onClick={() => {
          if (job.status === 'active') {
            window.location.href = `/application/${job.title}`;
          } else {
           alert("Job is closed")
          }
        }}
        className={`col-2 ${job.status === 'active' ? 'activebtn' : 'btn-inactive'}`} 
        style={{color:"#4077bc",fontWeight:"bolder",letterSpacing:"0.5px"}}>Apply 
        <img src={job.status === 'active' ? active : inactive} style={{ height: "10%", width: "20%", borderRadius: "50px" }} alt={job.status === 'active' ? 'Active' : 'Inactive'} />
              </button>
      </div>
<div onClick={() => toggleDescription(job.id)} style={{position:"absolute",left:830,top:110,cursor:"pointer"}}>
  <img src={arrow} style={{height:"9%",width:"9%"}} />
  </div>
  {openDescriptionId !== job.id && (<div className="vertical-line" style={{position:"absolute",left:852,top:90}}></div>
  )}
  {openDescriptionId === job.id && (
              <div style={{ backgroundColor:"whitesmoke", padding:"10px",width: '60%', display: 'flex',marginTop:"", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',color:"black" }}>
                <h4 style={{color:"#4077bc",paddingTop:"30px",textDecoration:"underline"}}>Job Description</h4>
                <h6 style={{color:"#4077bc"}}>Quatifications</h6>
                <p >{job.Qualifications}</p>
              
                <h6 style={{color:"#4077bc"}}>Skills</h6>
                <p>{job.Skills}</p>
              
                <h6 style={{color:"#4077bc"}}>Position Type</h6>
                <p>{job.positontype}</p>
                <h6 style={{color:"#4077bc"}}>Location</h6>
                <p>{job.Location}</p>
              </div>
            )}
            

          
          </div>
        ))}
      </div>
      <button className='btn btn-primary m-3'>Get In Touch</button>
    </div>
  )
}

export default Careers;
