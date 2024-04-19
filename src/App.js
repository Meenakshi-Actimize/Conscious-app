import './App.css';
import Available from './components/Available';
import Banner1comp from './components/Banner1';
import Banner2comp from './components/Banner2';
import Banner3comp from './components/Banner3';
import Banner4comp from './components/Banner4';
import Card2items from './components/Card2items';
import Card3items from './components/Card3items';
import Carditems from './components/Carditems';
import Carouselcomp from './components/Carouselcomp';
import Certifications from './components/Certifications';
import Dummy from './components/Dummy';
import Footercomp from './components/Footer';
import Homebanner from './components/Home';
import Navbarcomp from './components/Navbarcomp';
import RoundImages from './components/RoundImages';
import Roundimages2comp from './components/Roundimages2';
import Roundimages3 from './components/Roundimages3';
import Testimonials from './components/Testimonials';
import Videocomponent from './components/Videocomponent';

function App() {
  return (
    <div className="App">
      <Homebanner />
      <Navbarcomp />
      <Carouselcomp />
      <Carditems />
      <Banner1comp />
      <Banner2comp />
      <RoundImages />
      {/* <Dummy /> */}
      <Card2items />
      <Card3items />
      <Banner3comp />
      <Roundimages2comp />
      <Banner4comp />
      <Videocomponent />
      <Roundimages3 />
      {/* <Testimonials /> */}
      <Certifications />
      <Available />
      <Footercomp />
    </div>
  );
}

export default App;
