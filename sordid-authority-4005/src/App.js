import logo from './logo.svg';
import './App.css';
import Accordions from './Accordions';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Box backgroundColor="#9c3353;" width="100%" height="100px" color="white" fontSize="22px" fontWeight="400" padding='34px'><h2>Read what people are saying about Milaap!</h2></Box>
     <Accordions />
    </div>
  );
}

export default App;
