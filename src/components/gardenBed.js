import React from "react";
import { Box } from "@mui/material";
import "./gardenBed.css";

function GardenBed({ plantList, selectedPlantId, gardenWidth, gardenHeight, plantedCrops, setPlantedCrops }) {
    const garden = Array.apply(null, Array(gardenHeight)).map((v, h) => { return Array.apply(null, Array(gardenWidth)).map((x, w) => { return h + ',' + w }); });
    const squaresWithPlants = plantedCrops.map(p => p.xCoordinate + ',' + p.yCoordinate);

    const addPlant = (coords) => {
        if (!selectedPlantId) { return; }

        const splitCoords = coords.split(',');
        setPlantedCrops([...plantedCrops, {
            xCoordinate: splitCoords[0],
            yCoordinate: splitCoords[1],
            typeId: selectedPlantId
        }]);
    }

    return (
        <div>
            {
                garden.map(row => (
                    <div style={{ display: "flex" }} key={ 'r' + row[0] }>
                        {
                            row.map(col => {
                                const hasPlant = squaresWithPlants.some(s => s === col);
                                let squareClass = 'garden-tile';
                                if (hasPlant) { squareClass += ' with-plant'; } 
                                return (
                                    <Box key={ col } className={ squareClass } onClick={ () => { addPlant(col); }}></Box>
                                )}
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default GardenBed;