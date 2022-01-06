import { useState } from 'react';
import './App.css';
import PlantDetails from './components/plantDetails';
import PlantList from './components/plantList';

function App() {
  const [plantList, setPlantList] = useState([]);

  return (
    <div className="App">
      <h1>This is a React app</h1>
      <PlantDetails plantList={ plantList } setPlantList={ setPlantList } />
      <PlantList plantList={ plantList } />
    </div>
  );
}

export default App;
