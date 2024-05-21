import './App.css';
import NavBar from './components/header/NavBar.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import Footer from './components/footer/Footer.jsx';
import Slides from './components/slider/Slides.jsx';

function App() {

  return (
    <>
      <NavBar/>
      <HomePage/>
      <Slides/>
      <Footer/>
    </>
  )
}

export default App
