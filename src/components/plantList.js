import React from "react";

function PlantList({ plantList }) {
    return (
        <div>
            <ul>
                { plantList.map(plant => (
                    <div key={ plant.id }>
                        <h2>{plant.name}</h2>
                        <div>ID: {plant.id}</div>
                        <div>Plot Size: {plant.plotSize}</div>
                        <div>Sun Preference: {plant.sunPreference}</div>
                    </div>
                )) }
            </ul>
        </div>
    );
}

export default PlantList;