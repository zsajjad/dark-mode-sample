import ColorSchemeToggle from './ColorScheme/ColorSchemeToggle';
// import logo from './logo.svg';
import './App.css';

const IMAGE_URL = "https://images.unsplash.com/photo-1444567257257-a10a4088a89d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href={IMAGE_URL} 
          target="_blank"
          rel="noopener noreferrer">
          <img src={IMAGE_URL} className="App-logo" alt="logo" />
        </a>
        <ColorSchemeToggle />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
