import logo from './logo.svg';
import './App.css';
import Functional from './components/Functional';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Class example</h2>
        <ClassComponent />
        <h2>Functional example</h2>
        <Functional />
      </header>
    </div>
  );
}

export default App;
