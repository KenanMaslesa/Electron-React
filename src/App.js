import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Electron app
        </p>
        <a
          className="App-link"
          href="https://www.electronjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Electron
        </a>
      </header>
    </div>
  );
}

export default App;
