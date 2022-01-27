import React from "react";
import { Box } from "@mui/material";
import "./gardenBed.css";

function GardenBed({ plantList, selectedPlantId, gardenWidth, gardenHeight, plantedCrops, setPlantedCrops }) {
    const garden = Array.apply(null, Array(gardenHeight)).map((v, h) => { return Array.apply(null, Array(gardenWidth)).map((x, w) => { return h + ',' + w }); });
    const squaresWithPlants = plantedCrops.map(p => {return { coords: p.xCoordinate + ',' + p.yCoordinate, typeId: p.typeId }});

    const addPlant = (coords) => {
        if (!selectedPlantId) { return; }
        if (!!(getPlantAtCoords(coords))) { return; }

        const splitCoords = coords.split(',');
        setPlantedCrops([...plantedCrops, {
            xCoordinate: splitCoords[0],
            yCoordinate: splitCoords[1],
            typeId: selectedPlantId
        }]);
    }

    const getPlantAtCoords = (coords) => {
        return squaresWithPlants.find(s => s.coords === coords);
    }

    return (
        <div>
            {
                garden.map(row => (
                    <div style={{ display: "flex" }} key={ 'r' + row[0] }>
                        {
                            row.map(col => {
                                const sxObj = { backgroundColor: 'sandybrown' };
                                const plantAtCoords = getPlantAtCoords(col);
                                
                                if (plantAtCoords) {
                                    const plantObj = plantList.find(p => p.id === plantAtCoords.typeId);
                                    sxObj.backgroundColor = plantObj.color;
                                }

                                return (
                                    <Box key={ col } className='garden-tile' sx={ sxObj } onClick={ () => { addPlant(col); }}></Box>
                                )}
                            )
                        }
                    </div>
                ))
            }
            <div>{ plantedCrops.length } plants in garden</div>
        </div>
    );
}

export default GardenBed;