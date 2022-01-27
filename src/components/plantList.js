import React from "react";
import { Button, Card, CardActions, CardContent, Paper } from "@mui/material"
import Yard from "@mui/icons-material/Yard";
import "./plantList.css";

function PlantList({ plantList, setPlantList, selectedPlantId, setSelectedPlantId }) {
    const removePlant = (plantId) => {
        setPlantList(Array.from(plantList.filter(p => p.id !== plantId)));
        if (plantId === selectedPlantId) {
            setSelected(undefined);
        }
    }

    const setSelected = (plantId) => {
        setSelectedPlantId(plantId);
    }

    return (
        <div>
            <ul>
                {
                    plantList.map(plant => (
                        <div style={{ maxWidth: "40rem" }} key={ plant.id }>
                            <Paper elevation={ selectedPlantId === plant.id ? 16 : 0 }>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="plant-info-container">
                                            <div>
                                                <Yard style={{ fontSize: 70 }}></Yard>
                                            </div>
                                            <div>
                                                <h2>{plant.name}</h2>
                                                <div>ID: {plant.id}</div>
                                                <div>Plot Size: {plant.plotSize}</div>
                                                <div>Sun Preference: {plant.sunPreference}</div>  
                                            </div> 
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => setSelected(plant.id)}>Plant</Button>
                                        <Button size="small" onClick={() => removePlant(plant.id)}>Delete</Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default PlantList;