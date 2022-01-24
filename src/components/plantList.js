import React from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material"
import Yard from "@mui/icons-material/Yard";
import "./plantList.css"

function PlantList({ plantList }) {
    return (
        <div>
            <ul>
                { plantList.map(plant => (
                    <div key={ plant.id }>
                        <Card variant="outlined">
                            <CardContent>
                                <div className="plant-info-container">
                                    <div>
                                        <Yard></Yard>
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
                                <Button size="small">Delete</Button>
                            </CardActions>
                        </Card>
                    </div>
                )) }
            </ul>
        </div>
    );
}

export default PlantList;