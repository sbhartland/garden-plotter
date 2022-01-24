import { useState } from 'react';
import './App.css';
import PlantDetails from './components/plantDetails';
import PlantList from './components/plantList';

function App() {
  const [plantList, setPlantList] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState();

  return (
    <div className="App">
      <h1>Let's define some plants</h1>
      <PlantDetails plantList={ plantList } setPlantList={ setPlantList } />
      <PlantList plantList={ plantList } setPlantList={ setPlantList } selectedPlantId={ selectedPlantId } setSelectedPlantId={ setSelectedPlantId } />
    </div>
  );
}

export default App;
