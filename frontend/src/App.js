//import logo from './logo.svg';
//import './App.css';
import Footer from './componenets/Footer.js';
import Header from  './componenets/Header.js';

import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='py-3'>
          <Container>
           <HomeScreen></HomeScreen>
          </Container>
      </main>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
