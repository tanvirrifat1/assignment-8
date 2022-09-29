import './App.css';
import Fitness from './Components/Fitness/Fitness';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2 style={{ marginLeft: '40px', textAlign: 'left' }}>DAILY-FITNESS</h2>
      <Fitness></Fitness>
    </div>
  );
}

export default App;
