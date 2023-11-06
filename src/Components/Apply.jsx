import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/apply.css";
import Navbar from "./Navbar";

function Apply() {
  const [inputs, setInputs] = useState({});

  const { jobTitle } = useParams();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleFileChange = (event) => {
    const name = event.target.name;
    const file = event.target.files[0]; // Get the selected file
    setInputs((values) => ({ ...values, [name]: file }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(jobTitle);
  }

  return (
    <div>
        <Navbar/>
    <div className="applybg " >
        <h3>{jobTitle}-Job Application</h3>
        <p style={{fontSize:"12px"}}>Please Complete the application accurately</p>
{/* <hr></hr> */}
<div className="row" style={{width:"90%"}}>
        <div className="col-12 col-md-7">
    <form onSubmit={handleSubmit}>
        <h5>Personal Information</h5>
      <label className="col-4">Name
      <span style={{ color: 'red' }}>*</span>
      <input 
        type="text" 
        name="name" 
        value={inputs.username} 
        required
        onChange={handleChange}
      />
      </label>
      <label className="col-4">Job Title
        <input 
          type="text" 
          name="jobtitle" 
          value={jobTitle} 
          onChange={handleChange}
        />
        </label>
        <label className="col-4">Phone
        <span style={{ color: 'red' }}>*</span>
        <input 
          type="number" 
          name="phonenumber" 
          value={inputs.phonenumber} 
          required
          onChange={handleChange}
        />
        </label>
        <label className="col-4">Email
        <span style={{ color: 'red' }}>*</span>
        <input 
          type="email" 
          name="email" 
          value={inputs.email}
          required 
          onChange={handleChange}
        />
        </label>
        <label className="col-4">City
        <input 
          type="text" 
          name="city" 
          value={inputs.city || ""} 
          onChange={handleChange}
        />
        </label>
        <hr></hr>
        <h5>Resume</h5>
        <label>
  Upload Resume
  <span style={{ color: 'red' }}>*</span>
  <input
    type="file"
    name="document"
    required
    accept=".pdf, .doc, .docx" // Specify the accepted file types
    onChange={handleFileChange}
  />
</label>

<hr></hr>
        <h5>Additional Details</h5>
        <label className="message" >
 Cover Letter
 
  <textarea
  rows="5"
  cols="50"
    type="text"
    name="message"
    value={inputs.message || ""} 
    onChange={handleChange}
    
  />
</label>
        
     
      <input type="submit" className="btn" style={{color:"#4077bc",backgroundColor:"white",fontWeight:"bold"}} /> 
    </form>
    </div>
    <div className="col-3 d-none d-lg-block " style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}>
        <img src="https://www.life.gov.sg/img/wasj/banner_support-for-your-job-search.png"  className="jobimg"/>
    </div>
    </div>
    </div>
    </div>
  )
}


export default Apply;