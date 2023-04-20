import { Route, Routes } from 'react-router-dom';
import './assets/style/App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import CardsSet from './components/CardsSet';
import Container from './components/Container';
import GetReady from './components/GetReady';
import About from './components/About';
import FooterItem from './components/FooterItem';
import SliderComponent from './components/SliderComponent';
import Search from './components/Search';
import Button from "./components/Button";
import { cardSet, cardHeader } from './assets/data/cardSet';
import { cardSetLight, cardHeaderLight } from './assets/data/cardSetLight';
import { slider, slider2, slider3, slider4} from './assets/data/slider';
import opinions from './assets/img/opinions.png';
import opinions2 from './assets/img/purpleWoman_reviews.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderComponent slider={slider}>
      <img src={opinions} alt="sometext" className='slider_opinion__img' />
      </SliderComponent>
      <Container>
        <Search/>
        <CardsSet isSet
                  cardSet={cardSet}
                  cardHeader={cardHeader}
        />
        <CardsSet cardSet={cardSetLight}
                  cardHeader={cardHeaderLight}/>
      </Container>
      <SliderComponent sliderName={"second"}
                       slider={slider2}>
      <img src={opinions2} alt="sometext" className='slider_opinion2__img' />
      </SliderComponent>
        <Container>
          <GetReady/>
        </Container>
        <SliderComponent sliderName={"third"}
                         slider={slider3}>
          <Button btnName={"find_btn"}>Find avilable cabins</Button>
      </SliderComponent>
        <Container>
           <About/>
        </Container>
        <SliderComponent sliderName={"forth"}
                         slider={slider4}>
          <Button btnName={"escape_btn"}>Find the perfect getaway</Button>
      </SliderComponent>
        <FooterItem/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;