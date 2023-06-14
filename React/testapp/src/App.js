// import logo from './logo.svg';
import './App.css';
// import Card from './Card';
import Dropdown from './Dropdown';

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent:'space-evenly', alignContent: 'center'}}>
      {/* <Card /> */}
      <Dropdown label="courses" name={["react","Angular", "NODE"]} />
    </div>
  );
}

export default App;
