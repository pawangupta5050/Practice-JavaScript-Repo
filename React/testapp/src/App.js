// import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent:'space-evenly', alignContent: 'center'}}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
