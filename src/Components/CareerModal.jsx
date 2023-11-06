import React from 'react'
import active from "../assets/play.png";

const CareerModal = () => {
  return (
    <div style={{backgroundColor:"#4077bc",color:"white",padding:"15px",}}>
     <h5>Job Description</h5>
     <p>
     Responsibilities for Net Developer : 
Write clean, scalable code using .NET programming languages
Remain up to date with the terminology, concepts and best practices for coding mobile apps
Develop technical interfaces, specifications, and architecture
Use and adapt existing web applications for apps
Create and test software prototypes
Develop client displays and user interfaces
Assist software personnel in handling project related work and other requirements
Coordinate with other software professionals and developers
    </p>
     <hr></hr>
     <h5>Skills</h5>
     <p>Mongodb,js,nodejs,exress</p>
     <hr></hr>
     <h5>Qualifications:</h5>
     <p>Familiarity with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC)
5 years of development experience using C# .NET
Knowledge of at least one of the .NET languages (e.g. C#, Visual Basic .NET) and HTML5/CSS3
Familiarity with architecture styles/APIs (REST, RPC)
</p>
     <button className='btn btn-primary' style={{backgroundColor:"#e4edf2",color:"#4077bc",fontWeight:"bold",fontSize:"15px",}}>
         Apply <img src={active} style={{borderRadius:"25px",height:"25px",width:"25px"}}/>
        </button>
    </div>
  )
}

export default CareerModal
