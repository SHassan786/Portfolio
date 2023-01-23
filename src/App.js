import './index';
import Navbar from "./components/nav/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonial"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>


    </>
  );
}

export default App;