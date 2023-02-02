//import logo from './logo.svg';
//import './App.css';
import Footer from './componenets/Footer.js';
import Header from  './componenets/Header.js';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProducScreen from './screens/ProducScreen.js';
import {Switch  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className='py-3'>
        
          <Container>
            <Routes>
              <Route exact path = '/' element = {<HomeScreen />}/>
              <Route path='/product/:id' element={<ProducScreen/>}/>
            </Routes>
          </Container>
        
          <Container>
            <h3>hadi pour le test</h3>
          </Container>
        
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
