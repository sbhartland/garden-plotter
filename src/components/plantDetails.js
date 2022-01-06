import React from "react";
import { v4 as uuidv4 } from "uuid";

function PlantDetails({ plantList, setPlantList }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const elems = event.target.elements;

        setPlantList([...plantList, {
            id: uuidv4(),
            name: elems.plantName.value,
            plotSize: elems.plotSize.value,
            sunPreference: elems.sunPreference.value,
        }]);

        elems.plantName.value = "";
        elems.plotSize.value = 1;
        elems.sunPreference.value = "";
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>Plant Name<input type="text" name="plantName"></input></label>
                </div>
                <div>
                    <label>Plot Size</label>
                    <select name="plotSize">
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                    </select>
                </div>
                <div>
                    <label>Sun Preference<input type="text" name="sunPreference"></input></label>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default PlantDetails;