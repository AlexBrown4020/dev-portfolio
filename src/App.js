import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div id="App">
      <div id='home'></div>
      <Navbar/>
      <div id='banner'>
        <img id='banner-img' src="https://iili.io/H1Zy9bj.jpg" alt="ABannerTouch" border="0"/>
      </div>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
