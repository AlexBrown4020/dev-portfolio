import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div id="App">
      <div id='home'></div>
      <Navbar/>
      <div id='banner'>
        <img id='banner-img' src="https://iili.io/H1Zy9bj.jpg" alt="ABannerTouch" border="0"/>
      </div>
      <About/>
      <div id='portfolio'>
        <img id='portfolio-img' src="https://iili.io/H1ZyEX4.jpg" alt="3D&Apps" border="0" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
