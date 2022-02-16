import React from "react";
import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material"
import Yard from "@mui/icons-material/Yard";
import "./plantList.css";

function PlantList({ plantList, setPlantList, selectedPlantId, setSelectedPlantId, plantedCrops, setPlantedCrops }) {
    const removePlant = (plantId) => {
        if (plantedCrops.some(c => c.typeId === plantId)) { setPlantedCrops(Array.from(plantedCrops.filter(c => c.typeId !== plantId))); }
        setPlantList(Array.from(plantList.filter(p => p.id !== plantId)));
        if (plantId === selectedPlantId) {
            setSelected(undefined);
        }
    }

    const setSelected = (plantId) => {
        setSelectedPlantId(plantId);
    }

    const handleColorChange = (plantId, eventObj) => {
        const newColor = eventObj.props.value;
        setPlantList(plantList.map(p => p.id !== plantId ? p : Object.assign({}, p, { color: newColor })));
    }

    return (
        <div>
            <ul>
                {
                    plantList.sort((a, b) => a.name.localeCompare(b.name)).map(plant => (
                        <div style={{ maxWidth: "40rem" }} key={ plant.id }>
                            <Paper elevation={ selectedPlantId === plant.id ? 16 : 0 }>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className="plant-info-container">
                                            <div>
                                                <Yard style={{ fontSize: 70, color: plant.color }}></Yard>
                                            </div>
                                            <div>
                                                <h2>{plant.name}</h2>
                                                <div>
                                                    <FormControl fullWidth>
                                                    <InputLabel id="select-color">Color</InputLabel>
                                                    <Select
                                                        labelId="select-color"
                                                        id="select-color"
                                                        value={ plant.color }
                                                        label="Age"
                                                        onChange={ (event, eventObj) => { handleColorChange(plant.id, eventObj); } }
                                                    >
                                                        <MenuItem value={ 'green' }>Green</MenuItem>
                                                        <MenuItem value={ 'blue' }>Blue</MenuItem>
                                                        <MenuItem value={ 'chartreuse' }>Chartreuse</MenuItem>
                                                    </Select>
                                                    </FormControl>
                                                </div>
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