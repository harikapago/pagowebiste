import React,{useState} from "react";
import "./styles/form.css";
// import watsaap from "../assets/form/watsap.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import call from "../assets/call.png";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service:""
    
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData); // Display form data in the console

    // Show a success toast
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    
  };


  const [formClosed, setFormClosed] = useState(false);
  const handleCloseModal = () => {
    setFormClosed(true);
  };

  return (
   <>
     {formClosed ? null : (
        <div className="container-fluid formbg " style={{backgroundColor:"#4077bc "}} >


        <button
          type="button"
          className="btn-close"
          data-bs-dismiss=""
          aria-label="Close"
          onClick={handleCloseModal}
          style={{
            backgroundColor: "#4077bc",

            marginLeft: "95%",
            marginTop: "0rem",
          }}
        ></button>

<h5
              style={{
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "25px",
                fontWeight: "bold",
                textAlign:"center",
                color:"white"
                
              }}
            >
            Get In Touch
              <span  style={{
                display:"block",
                padding: "0.2rem",
                paddingTop: "0.7rem",
                fontSize: "14px",
                fontWeight: "bold",
                color:"white",
                // textDecoration:"underline"
              }}>
             askusanything@pagoanalytics.com
             <br/> +91 6301980315
               </span>
            </h5>

            
  

     
  <div
    className=""
    style={{
      width: "90%",
      marginTop:"0",
      marginLeft: "auto",
      marginRight: "auto",
      color:"white"
    }}
  >
   
      
      <div
        className="col-12 "
        style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
      >


        <form className="row g-3"   onSubmit={handleSubmit}>
<div style={{display:"flex"}}><div className="col-6">

          <div className="col-12">
            <label
              for="name"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Name
            </label>
             <input required 
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                borderRadius: "5px",
                margin: "0",
              }}
            />
          </div>
          <div className="col-12">
            <label
              for="phone"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Phone Number
            </label>
             <input required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              id="phone"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-12">
            <label
              for="email"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
             <input required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder=""
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-12">
  <label
    htmlFor="service" // Change 'for' to 'htmlFor' for proper label association
    className="form-label"
    style={{
      margin: "0",
      fontSize: "90%",
      fontWeight: "bold",
    }}
  >
    Service
  </label>
  <select
    required
    name="service" // You can use the same 'name' as the input field for consistency
    value={formData.service}
    onChange={handleChange}
    className="form-control"
    id="service"
    style={{
      backgroundColor: "white",
      color: "black",
      border: "0",
      borderRadius: "5px",
    }}
  >
    {/* Add your dropdown options here */}
    <option value="">Select an option</option>
    <option value="Data Analytics">Data Analytics</option>
    <option value="Business Intelligence">Business Intelligence</option>
    <option value="Digital Transformation">Digital Transformation</option>
    <option value="Open Source Technologies">Open Source Technologies</option>
    <option value="Professional Services">Professional Services</option>
    <option value="Product Development">Product Development</option>
    {/* Add more options as needed */}
  </select>
</div>

          </div>
          <div className="col-6">
            <img src={call} style={{height:"130%",width:"110%",paddingLeft:"1rem"}}/>
          </div>
          </div>

          {/* <div className="col-12">
            <label
              for="msg"
              className="form-label"
              style={{
                margin: "0",
                 fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              cols="50"
              className="form-control"
              id="msg"
              placeholder=""
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "0",
                borderRadius: "5px",
              }}
            ></textarea>
          </div> */}

          <div className="col-12">
            <button
              type="submit"
              className="btn "
              style={{
                backgroundColor: "orange",
                borderRadius: "8px",
                color: "white",
                 fontSize: "90%",
                padding: "0.6rem",
                fontWeight: "bold",
                border:"2px solid #164a78"
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  
</div>
     )}
   </>
   
   
  );
};

export default Form;
