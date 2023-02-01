//import logo from './logo.svg';
//import './App.css';
import Footer from './componenets/Footer.js';
import Header from  './componenets/Header.js';

import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
          <Container>
            <h1>Welcom to</h1>
          </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
