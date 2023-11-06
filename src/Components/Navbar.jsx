// import React from 'react'

import logo from "../assets/pago.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// const Navbar = () => {

//     let hoverTimeout; // Define a timeout variable

// function handleDropdownHover(e) {
//   const dropdownMenu = e.target.nextElementSibling;
//   if (dropdownMenu) {
//     dropdownMenu.classNameList.add("show");
//   }
//   clearTimeout(hoverTimeout); // Clear any previous timeout
// }

// function handleDropdownLeave() {
//   hoverTimeout = setTimeout(() => {
//     const dropdowns = document.querySelectorAll(".dropdown-menu.show");
//     dropdowns.forEach((dropdown) => {
//       dropdown.classNameList.remove("show");
//     });
//   }, 50); // Adjust the timeout duration as needed (e.g., 500 milliseconds)
// }



// function handleDropdownHover2(e) {
//     const dropdownMenu = e.target.nextElementSibling;
//     if (dropdownMenu) {
//       dropdownMenu.classNameList.add("show");
//     }
//     clearTimeout(hoverTimeout); // Clear any previous timeout
//   }
  
//   function handleDropdownLeave2() {
//     hoverTimeout = setTimeout(() => {
//       const dropdowns = document.querySelectorAll(".dropdown-menu.show");
//       dropdowns.forEach((dropdown) => {
//         dropdown.classNameList.remove("show");
//       });
//     }, 50); // Adjust the timeout duration as needed (e.g., 500 milliseconds)
//   }
  

      
//   return (
   
//         <nav className="navbar navbar-expand-lg navbar-light" style={{border:"2px red solid",backgroundColor:"white",position:"fixed",top:0,zIndex:1000,}}>
  
//     <div className="container" style={{ display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
//     <div className='col-4'>
      // <a className="navbar-brand" href="/">
      //   <img src={logo} alt="logo" style={{ width: "5rem" }} />
      // </a>
//     </div>
    
//     <div className="col-7 collapse navbar-collapse" id="navbarSupportedContent"  style={{marginRight:"auto",justifyContent:"flex-end"}}>
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#aboutsec" style={{color:"#4077bc",fontWeight:"bold"}}>About Us</a>
//         </li>
       
//         {/* <li className="nav-item dropdown">
//           <a style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Solutions
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color:"#4077bc",fontWeight:"bold"}}>
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
           
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */}

// <li className="nav-item dropdown" onMouseEnter={(e) => handleDropdownHover(e)} onMouseLeave={() => handleDropdownLeave()}>
//   <a style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }} className="nav-link dropdown-toggle" 
//   href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//     Solutions
//   </a>
//   <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color: "#4077bc", fontWeight: "bold" }} onMouseEnter={(e) => handleDropdownHover(e)} onMouseLeave={() => handleDropdownLeave()}>
//     <li><a className="dropdown-item" href="#">Action</a></li>
//     <li><a className="dropdown-item" href="#">Another action</a></li>
//     <li><a className="dropdown-item" href="#">Something else here</a></li>
//   </ul>
// </li>


// <li className="nav-item">
//           <a className="nav-link" href="#" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>Sectors</a>
//         </li>
// {/* 
// <li className="nav-item dropdown" onMouseEnter={(e) => handleDropdownHover2(e)} onMouseLeave={() => handleDropdownLeave2()}>
//   <a style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//     Partners
//   </a>
//   <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color: "#4077bc", fontWeight: "bold" }} onMouseEnter={(e) => handleDropdownHover(e)} onMouseLeave={() => handleDropdownLeave()}>
//     <li><a className="dropdown-item" href="#">Action</a></li>
//     <li><a className="dropdown-item" href="#">Another action</a></li>
//     <li><a className="dropdown-item" href="#">Something else here</a></li>
//   </ul>
// </li> */}

// <li className="nav-item">
//           <a className="nav-link" href="#partners" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>Partners</a>
//         </li>
// <li className="nav-item">
//           <a className="nav-link" href="#" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>Testimonials</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/careers" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>Careers</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>Contact Us</a>
//         </li>

//         <li className="nav-item">
//           <a className="nav-link" href="#" style={{color:"#4077bc",fontWeight:"bold",marginRight:"1rem"}}>
//             <img src="" />
//           </a>
//         </li>
        
        
//       </ul>
      
//     </div>
   
//   </div>
// </nav>


   
//   )
// }

// export default Navbar


// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light" >
  <div className="container-fluid">
    <a className="" href="/" >
      <img src={logo} alt="logo" style={{ width: "5rem" }} />
    </a>
    <div className="flex-fill"></div>

    <div className="navbar-collapse " id="navbarNav">
    <div className="flex-fill"></div>
    
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="#aboutsec" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>Indursties</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#partners" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>Partners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/careers" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>Careers</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>Contact Us</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "#4077bc", fontWeight: "bold", marginRight: "1rem" }}>
            <img src="" alt="Icon" />
          </a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

