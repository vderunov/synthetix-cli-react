import logo from './logo.svg';
import {Hello} from './Hello';
import './App.css';

function App() {
  console.log('test-1')
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
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
          Learn React 123
        </a>
      </header>
    </div>
  );
}

export default App;
