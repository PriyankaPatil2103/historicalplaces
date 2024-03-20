import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import MyNavbar from "./MyNavbar";
import MyRoutes from "./MyRoutes";
import Navscrollbar from "./component/Navscrollbar";
import About from "./component/About";
import TourPackages from "./component/TourPackages";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Registration from "./component/Registration";
// import Header from "./component/Header";

function App() {
  return (
    <div>
      <MyRoutes />
      {/* <Header/> */}
    </div>
  );
}

export default App;
