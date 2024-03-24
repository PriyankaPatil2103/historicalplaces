import React from "react";
import { Col, Container } from "react-bootstrap";
import '../AllCss/MyCara.css'
import Lake from '../images/Lake.jpg'
import 'react-responsive-carousel//lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import dest_pixa_885 from '../images/dest_pixa_885.jpg'
import m1 from '../images/m1.jpg'
import LAKSHADWEEP from '../images/LAKSHADWEEP.jpg'
import maldives from '../images/maldives.jpg'
function Home() {
  return (
    <>
     <Carousel autoPlay={true} showThumbs={false} >
      <div className="cara-item" id="cara1">
        <div className="homecara"> 
          <h4 style={{color:"white" , zIndex: 2}}>Kerala - A Lovers Paradise</h4>
          <h1 style={{color:"white" , zIndex: 2}}>The Travels Begins in you</h1>
        </div>
      </div>
      <div className="cara-item" id="cara2">
      <div className="homecara"> 
          <h4 style={{color:"white" , zIndex: 2}}>Vashisht Temple Manali</h4>
          <h2 style={{color:"white" , zIndex: 2}}> This beautiful village is famous for its sulphurous hot water springs and Vashisht temple,<br/>
           built just next to the springs.</h2>
        </div>
      </div>
      <div className="cara-item" id="cara3">
        <div className="homecara">
          <h1 style={{color:"White",zIndex:2}}>
              The Maldives, an island nation in the Indian Ocean</h1>
              <h3 style={{color:"yellow",zIndex:2}}>Beyond its natural beauty, the Maldives has a rich cultural heritage influenced by its history as a trading hub and its Islamic traditions.</h3>
        </div>
      </div>
      <div className="cara-item" id="cara4">
        <div className="homecara">
        <h4 style={{color:"white",zIndex:2}}> Let us show in the world </h4>
          <h1 style={{color:"white",zIndex:2}}>Inspiring Destination within your reach </h1>
        </div>
      </div>
      <div className="cara-item" id="cara5">
        <div className="homecara">
          <h3 style={{color:"white",zIndex:2}}>Manali</h3>
        </div>
      </div>
     </Carousel>
    </>
    
  );
}

export default Home;
