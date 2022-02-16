import { IconButton } from "@mui/material"
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import GardenBed from './gardenBed';

function Garden({ plantList, selectedPlantId, gardenWidth, setGardenWidth, gardenHeight, setGardenHeight, plantedCrops, setPlantedCrops }) {
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
  
  return(
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
    );
}

export default Garden;