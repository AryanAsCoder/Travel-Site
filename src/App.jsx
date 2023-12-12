import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Destination from './components/Destination.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <div>
      <Navbar/>

      <main>
        <div id="home">
        <Home/> 
        </div>  

        <div id='features'>
          <Features/>
        </div>    

        <div id="destination">
          <Destination />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="contact">
          <Contact />
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default App
