import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Clients from './components/clients/Clients';
import Banner from './components/banner/Banner';
import Careers from './components/careers/Careers';
import Certification from './components/certification/Certification';

function App() {
  return (
    <div id="App">
      <meta property="og:title" content="Title-name"/>
      <meta property="og:image" content="File-path"/>
      <meta property="og:url" content="Canonical-url"/>
      <meta property="og:type" content="website"/>
      <div id='home'></div>
      <Navbar/>
      <Banner/>
      <About/>
      <Careers/>
      <Certification/>
      <Portfolio/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
