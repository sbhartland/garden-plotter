import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Slider, TextField, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from "@mui/material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

function PlantDetails({ plantList, setPlantList }) {
    const [plotSize, setPlotSize] = React.useState(1);
    const [sunPreference, setSunPreference] = React.useState('partial');

    const plotSizeMarks = [
        {
          value: 1,
          label: 'Small',
        },
        {
          value: 2,
          label: 'Medium',
        },
        {
          value: 3,
          label: 'Large',
        },
        {
          value: 4,
          label: 'Huge',
        },
      ];
    
    const handlePlotSizeChange = (event, newValue) => {
        setPlotSize(newValue);
    }

    const handleSunPreferenceChange = (event, newValue) => {
        setSunPreference(newValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const elems = event.target.elements;

        setPlantList([...plantList, {
            id: uuidv4(),
            name: elems.plantName.value,
            plotSize: plotSize,
            sunPreference: sunPreference,
        }]);

        elems.plantName.value = "";
        setPlotSize(1);
        setSunPreference("partial");
    }

    return(
        <div>
            <Box sx={{ p: 10, width: 400 }}>
                <form onSubmit={ handleSubmit }>
                    <TextField name="plantName" label="Plant Name" variant="standard" />
                    <Typography gutterBottom>Plot Size</Typography>
                    <Box sx={{ m: 3 }} />
                    <Slider
                        name="plotSize"
                        value={plotSize}
                        step={1}
                        valueLabelDisplay="off"
                        marks={plotSizeMarks}
                        min={1}
                        max={4}
                        onChange={handlePlotSizeChange}
                    />
                    <Typography>Sun Preference</Typography>
                    <ToggleButtonGroup
                        value={sunPreference}
                        exclusive
                        onChange={handleSunPreferenceChange}
                        aria-label="sun preference"
                    >
                        <ToggleButton value="shade" aria-label="shade">
                            <Tooltip arrow title="Shade"><BrightnessLowIcon /></Tooltip>
                        </ToggleButton>
                        <ToggleButton value="partial" aria-label="partial sun">
                            <Tooltip arrow title="Partial Sun" style={{ color: "goldenrod" }}><BrightnessMediumIcon /></Tooltip>
                        </ToggleButton>
                        <ToggleButton value="sun" aria-label="full sun">
                            <Tooltip arrow title="Full Sun" style={{ color: "gold" }}><BrightnessHighIcon /></Tooltip>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <div>
                        <Button variant="contained" type="submit">Add</Button>
                    </div>
                </form>
            </Box>
        </div>
    );
}

export default PlantDetails;