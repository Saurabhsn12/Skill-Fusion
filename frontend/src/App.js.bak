import './Styles/global.css';
import PreNavbar from "./components/PreNavbar";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
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
import Programmer from "./components/Programmer";
import Project from "./components/Project";
import Float from "./components/Float";
import Knowmore from "./components/Knowmore";
import Create from "./components/Create";
import Winprize from "./components/Winprize";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <PreNavbar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowmore" element={<Knowmore />} />
            <Route path="/winprize" element={<Winprize />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/project" element={<Project />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/sports" element={<Sports />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/programmer" element={<Programmer />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
          <Banner />
          <Heading text="Upcoming Events" />
          <StarProduct />
          <Heading text="Find People" />
          <HotAccessoriesMenu />
          <Heading text="Career Guidance" />
          <Guiders />
        </main>
        <About />
        <Float />
        <Prefooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
