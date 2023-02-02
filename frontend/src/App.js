//import logo from './logo.svg';
//import './App.css';
import Footer from './componenets/Footer.js';
import Header from  './componenets/Header.js';

import { BrowserRouter as router, Route } from 'react-router-dom';

import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <router>
      <Header></Header>
      <main className='py-3'>
          <Container>
           <Route path = '/' component = {HomeScreen}/>
          </Container>
          <Container>
            <h3>hadi pour le test</h3>
          </Container>
      </main>
      <Footer></Footer>
    </router>
  );
}

export default App;
