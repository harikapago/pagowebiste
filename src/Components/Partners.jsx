

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Styles/partners.css";
// import img1 from "../assets/partners/auto.png";
// import img2 from "../assets/partners/aws.png";

// import img4 from "../assets/partners/do.png";
// import img5 from "../assets/partners/erwin.png";
// import img6 from "../assets/partners/gcp.png";
// import img7 from "../assets/partners/pbi.png";
// import img9 from "../assets/partners/sf.png";

// import img8 from "../assets/partners/yf.png";
// // import img3 from "../assets/partners/city.jpg";

// const partnerSets = [
//   [img1, img2, img8],
//   [img4, img5, img6],
//   [img7, img9, img1],
  
// ];

// const Partners = () => {
//   return (
//     <div id="partners" style={{marginLeft:"2rem",marginTop:"2rem",marginBottom:"4rem",}}>
//        <h5 style={{textDecoration:"underline",textDecorationColor:"orange",fontWeight:"bold",color:"#4077bc",paddingTop:"2rem"}}>PARTNERS</h5>
    
//     <div className="partnersbg" style={{marginTop:"1rem",height:"60vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
//       <Carousel
//         interval={2000}
//         pause={false}
//         fade={false}
//         indicators={false}
//         controls={true}
//         wrap={true}
       
//       >
//         {partnerSets.map((partnerSet, index) => (
//           <Carousel.Item key={index}>
//             <div className="d-flex justify-content-center">
//               {partnerSet.map((partner, innerIndex) => (
//                 <img
//                   key={innerIndex}
//                   src={partner}
//                   alt={`Partner ${index + 1}`}
//                   style={{width:"30%",padding:"5%" }}
//                 />
//               ))}
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//     </div>
//   );
// }

// export default Partners;




import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/partners.css";
import img1 from "../assets/partners/auto.png";
import img2 from "../assets/partners/aws1.png";
import img4 from "../assets/partners/do1.png";
import img5 from "../assets/partners/erwin1.png";
import img6 from "../assets/partners/gcp.png";
import img7 from "../assets/partners/pbi.png";
import img8 from "../assets/partners/yf1.png";
import img9 from "../assets/partners/sf1.png";

const partnerSets = [
  { 
    images: [img1, img2, img8],
    descriptions: ["Automate the business processes that are performed by Humans.", "Cloud provider for technologies- compute, storage, databases etc.", "Yellowfin allows more people to see, understand data."],
    links: ["https://www.thehindubusinessline.com/info-tech/automation-anywhere-to-strengthen-india-operations/article66293031.ece", "https://aws.amazon.com/", "https://www.yellowfinbi.com/"],
  },
  {
    images: [img4, img5, img6],
    descriptions: ["Cloud hosting provider that offers cloud computing services and Infrastructure as a Service", "Used to find, visualize, design, deploy the data assets", "To access computer resources housed in Google's data centers around the world for free or on a pay-per-use basis."],
    links: ["https://www.digitalocean.com/", "https://www.erwin.com/", "https://cloud.google.com/"],
  },
  {
    images: [img9, img7, img1],
    descriptions: [ "It enables data storage, processing solutions","To turn your unrelated sources of data into coherent, visually immersive insights.", "Automate the business processes that are performed by Humans."],
    links: [ "https://www.snowflake.com/en/", "https://powerbi.microsoft.com/","https://www.automationanywhere.com/"],
  },
];

const Partners = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [carouselInterval, setCarouselInterval] = useState(2000); // Default interval

  const handleImageHover = (index) => {
    setHoveredImage(index);
    setCarouselInterval(null); // Pause carousel autoplay
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
    setCarouselInterval(2000); // Resume carousel autoplay
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearInterval();
  }, []);

  return (
    <div id="partners" style={{ marginLeft: "2rem", marginTop: "2rem", marginBottom: "4rem" }}>
      <h5 style={{ textDecoration: "underline", textDecorationColor: "orange", fontWeight: "bold", color: "#4077bc", paddingTop: "2rem" }}>PARTNERS</h5>

      <div className="partnersbg" style={{ marginTop: "1rem", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Carousel
          interval={carouselInterval}
          pause={false}
          fade={false}
          indicators={false}
          controls={true}
          wrap={true}
         
        >
          {partnerSets.map((partnerSet, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center" >
                {partnerSet.images.map((partner, innerIndex) => (
                  <div
                    key={innerIndex}
                    onMouseEnter={() => handleImageHover(innerIndex)}
                    onMouseLeave={handleImageLeave}
                    style={{ width: "27%", padding: "3%",backgroundColor:"white"}}
                  >
                    <img
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      style={{ width: '80%' ,height:"50%",backgroundColor:"",marginTop:"10px"}}
                    />
                    {hoveredImage === innerIndex && (
                      <div className="image-overlay" style={{backgroundColor:"#4077bc",color:"white",padding:"1rem",borderRadius:"10px",}}>
                        <p>{partnerSet.descriptions[innerIndex]}</p>
                        <a href={partnerSet.links[innerIndex]} target='_blank' style={{color:"white",textDecoration:"underline"}}>Know more</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Partners;
