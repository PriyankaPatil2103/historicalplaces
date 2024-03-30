import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
// import Contact from "./component/Contact";
import MyNavbar from "./MyNavbar";
import TourPackages from "./component/TourPackages";
import PrivacyPolicy from "./component/PrivacyPolicy";
// import TermsToUse from "./component/TermsToUse";
import Enquiry from "./component/Enquiry";
import Navscrollbar from "./component/Navscrollbar";
import PackageDetails from "./component/PackageDetails";
import Login from "./component/Login";
import Registration from "./component/Registration";
import BookingDetails from "./component/BookingDetails";
import Booking from "./component/Booking";
import MyBooking from "./component/MyBooking";
import Profile from "./component/Profile";
import Footer from "./component/Footer";
function MyRoutes() {
  return (
    <div>
      <Router>
        <Navscrollbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="tourpackages">
                  <TourPackages />
                </section>
                <section id="privacypolicy">
                  <PrivacyPolicy />
                </section>
              </>
            }
          ></Route>
          {/* <Route path="/termstouse" element={<TermsToUse />}></Route> */}
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          <Route path="/enquiry" element={<Enquiry />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/bookingdetails/:BookingId" element={<BookingDetails/>}></Route>
          <Route path="/mybooking" element={<MyBooking/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route
            path="/PackageDetails/:PkgId"
            element={<PackageDetails />}
          ></Route>
          {/* <Route path="/footer" element={<Footer/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoutes;
