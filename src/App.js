import { useState } from 'react';
import './App.css';
import PlantDetails from './components/plantDetails';
import PlantList from './components/plantList';
import Garden from './components/garden'

function App() {
  const [plantList, setPlantList] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState();
  const [gardenWidth, setGardenWidth] = useState(5);
  const [gardenHeight, setGardenHeight] = useState(10);
  const [plantedCrops, setPlantedCrops] = useState([]);

  return (
    <div className="app-container">
      <div>
        <h1>Let's define some plants</h1>
        <PlantDetails plantList={ plantList } setPlantList={ setPlantList } />
        <PlantList
          plantList={ plantList }
          setPlantList={ setPlantList }
          selectedPlantId={ selectedPlantId }
          setSelectedPlantId={ setSelectedPlantId }
          plantedCrops={ plantedCrops }
          setPlantedCrops={ setPlantedCrops }
        />        
      </div>
      <Garden 
        plantList={ plantList }
        selectedPlantId={ selectedPlantId }
        gardenWidth={ gardenWidth }
        setGardenWidth={ setGardenWidth }
        gardenHeight={ gardenHeight }
        setGardenHeight={ setGardenHeight }
        plantedCrops={ plantedCrops }
        setPlantedCrops={ setPlantedCrops }
      />
    </div>
  );
}

export default App;
