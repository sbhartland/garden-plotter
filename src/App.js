import { useState } from 'react';
import './App.css';
import { IconButton } from "@mui/material"
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import PlantDetails from './components/plantDetails';
import PlantList from './components/plantList';
import GardenBed from './components/gardenBed';

function App() {
  const [plantList, setPlantList] = useState([]);
  const [selectedPlantId, setSelectedPlantId] = useState();
  const [gardenWidth, setGardenWidth] = useState(5);
  const [gardenHeight, setGardenHeight] = useState(10);
  const [plantedCrops, setPlantedCrops] = useState([]);

  const increaseWidth = () => {
    setGardenWidth(gardenWidth + 1);
  }

  const decreaseWidth = () => {
    if (gardenWidth > 1) {
      setGardenWidth(gardenWidth - 1);
    }
  }

  const increaseHeight = () => {
    setGardenHeight(gardenHeight + 1);
  }

  const decreaseHeight = () => {
    if (gardenHeight > 1) {
      setGardenHeight(gardenHeight - 1);
    }
  }

  return (
    <div className="app-container">
      <div>
        <h1>Let's define some plants</h1>
        <PlantDetails plantList={ plantList } setPlantList={ setPlantList } />
        <PlantList plantList={ plantList } setPlantList={ setPlantList } selectedPlantId={ selectedPlantId } setSelectedPlantId={ setSelectedPlantId } />        
      </div>
      <div>
        <div>
          <span>Garden Width: { gardenWidth }</span>
          <IconButton color="primary" component="span" onClick={ increaseWidth }>
            <AddCircle />
          </IconButton>
          <IconButton color="primary" component="span" onClick={ decreaseWidth }>
            <RemoveCircle />
          </IconButton>
        </div>
        <div>
          <span>Garden Height: { gardenHeight }</span>
          <IconButton color="primary" component="span" onClick={ increaseHeight }>
            <AddCircle />
          </IconButton>
          <IconButton color="primary" component="span" onClick={ decreaseHeight }>
            <RemoveCircle />
          </IconButton>
        </div>
        <GardenBed
          plantList={ plantList }
          selectedPlantId={ selectedPlantId }
          gardenWidth={ gardenWidth }
          gardenHeight={ gardenHeight }
          plantedCrops={ plantedCrops }
          setPlantedCrops={ setPlantedCrops }
        />
      </div>
    </div>
  );
}

export default App;
