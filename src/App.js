import PreNavbar from "../src/components/PreNavbar";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Heading from "../src/components/Heading";
import Banner from "../src/components/Banner";
import StarProduct from "../src/components/StarProduct";
import Guiders from "../src/components/Guiders";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import Footer from "../src/components/Footer";
import Prefooter from "../src/components/Prefooter";
import About from "../src/components/About";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import Sports from "./components/Sports";
import Esports from "./components/Esports";
import Artists from "./components/Artists";
import Ingames from "./components/Ingames";
import Programmer from "./components/Programmer";
import Project from "./components/Project";
import Float from "./components/Float";
import Knowmore from "./components/Knowmore";
import Create from "./components/Create";
import Winprize from "./components/Winprize";
import Home from "./components/Home";


function App() {
  return (

<Router >
  <PreNavbar />

  <Navbar />
  <Home/>

  
  <Routes>
     <Route exact path="/knowmore" element={<Knowmore/>}/>
     <Route exact path="/winprize" element={<Winprize/>}/>
     <Route exact path="/create" element={<Create/>}/>
     
  </Routes>

    
  <Routes>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/signup" element={<Signup/>}/>
     <Route exact path="/project" element={<Project/>}/>
  </Routes>
  
  <Banner/>
  <Heading text="Upcoming Events" />
  <StarProduct/>
  <Heading text=" Find People " />
  <HotAccessoriesMenu/>
  <Routes>
     <Route exact path="/sports" element={<Sports/>}/>
     <Route exact path="/esports" element={<Esports/>}/>
     <Route exact path="/programmer" element={<Programmer/>}/>
     <Route exact path="/artists" element={<Artists/>}/>
     <Route exact path="/" element={<Ingames/>}/>
  </Routes>
  

  <Heading text="Career Guidance" />
  <Guiders/>

  <About/>
  <Float/>
  <Prefooter/>
<Footer/>
</Router>



  );
}

export default App;
