import { Route, Routes } from 'react-router-dom';
import './assets/style/App.css';
import Home from './pages/Home';
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import CardsSet2 from './components/CardsSet2';
import CardsSet1 from './components/CardsSet1';
import Container from './components/Container';
import GetReady from './components/GetReady';
import Button from './components/Button';
import About from './components/About';
import FooterItem from './components/FooterItem';

import opinions from './assets/img/opinions.png';
import opinions2 from './assets/img/purpleWoman_reviews.png';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider 
        name={"slider_container"}
        name2={"slider_wrapper"}
        title={<h2>Leave the office behind <br/> and <span>unwind</span></h2>}
        subtitle={"Welcome to our cozy cabin nestled in the heart of the mountains! Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting."}
        >
        <img src={opinions} alt="sometext" className='slider_opinion__img' />
        </Slider>

      <Container>
        <Search/>
        <CardsSet1/>
        <CardsSet2/>
      </Container>
      

      <Slider 
        name={"slider_container second"}
        name2={"slider_wrapper right"}
        title={<h2>A truly wonderful experience</h2>}
        subtitle={"Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their tech for a few days. I could have stayed another week! They really have thought about everything here down to the finest details."}
        >
        <img src={opinions2} alt="sometext" className='slider_opinion2__img' />
        </Slider>

        <Container>
          <GetReady/>
        </Container>
        
        <Slider 
        name={"slider_container third"}
        name2={"slider_wrapper"}
        title={<h2>Nourish the mind, body, and spirit.</h2>}
        subtitle={"Many people find that the combination of being in a peaceful natural setting and engaging in activities that nourish the mind, body, and spirit leave them feeling rejuvenated and refreshed."}
        >
        <Button
          btnName={"find_btn btn"}
          content={"Find avilible cabins"}
        />
        </Slider>
        <Container>
           <About/>
        </Container>

        <Slider 
        name={"slider_container forth"}
        name2={"slider_wrapper"}
        title={<h2>Escape from endless Zoom calls</h2>}
        subtitle={"Discover the wonders of spending time offline and away from the office with our 3 day weekend getaway cabin retreats."}
        >
          <Button
          btnName={"escape_btn btn"}
          content={"Find the perfect getaway"}
        />
        </Slider>
        
        <FooterItem/>
        
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
