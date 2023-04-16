import { Route, Routes } from 'react-router-dom';
import './assets/style/App.css';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import CardsSet2 from './components/CardsSet2';
import CardsSet1 from './components/CardsSet1';
import Container from './components/Container';
import GetReady from './components/GetReady';
import About from './components/About';
import FooterItem from './components/FooterItem';
import { SliderComponent, SliderComponent2, SliderComponent3, SliderComponent4} from './components/SliderComponents';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderComponent/>
      <Container>
        <Search/>
        <CardsSet1/>
        <CardsSet2/>
      </Container>
      <SliderComponent2/>
        <Container>
          <GetReady/>
        </Container>
        <SliderComponent3/>
        <Container>
           <About/>
        </Container>
        <SliderComponent4/>
        <FooterItem/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;