import { useState } from 'react';
import { Button, CircularProgress, TextField, Typography } from "@mui/material";

function WeatherGetter() {
    const [weatherRequestInFlight, setWeatherRequestInFlight] = useState(false);
    const [weatherData, setWeatherData] = useState(undefined);
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const weatherBaseUrl = 'https://weatherdbi.herokuapp.com/data/weather/';
    
    const getWeather = (event) => {
        event.preventDefault();
        setWeatherRequestInFlight(true);
        const elems = event.target.elements;
        const zipCode = elems.zipCode.value;

        fetch(`${corsProxy}${weatherBaseUrl}${zipCode}`)
            .then((result) => result.json())
            .then((result) => {
                setWeatherRequestInFlight(false);
                setWeatherData(result);
            }, (error) => {
                setWeatherRequestInFlight(false);
                alert(`OOPS!\n${error}`);
            });
    };

    const getRegionDescription = () => {
        if (!hasWeatherData()) { return (<span/>); }
        return (<span>{ weatherData.region }</span>);
    }

    const getWeatherComment = () => {
        if (!hasWeatherData()) { return (<span/>); }
        return (<span>{ weatherData.currentConditions.comment }</span>);
    }

    const getSunninessDescription = () => {
        if (!hasWeatherData()) { return (<span/>); }
        const currentDescription = weatherData.currentConditions.comment.toLowerCase();
        if (currentDescription.includes('sun') || currentDescription.includes('clear')) { return (<span>Plants are gonna like that sun</span>); }
        if (currentDescription.includes('partly')) { return (<span>Some stuff to like out there</span>); }
        if (currentDescription.includes('cloud')) { return (<span>Not too great for the garden</span>); }
    }
    
    const getSpinner = () => {
        if (!weatherRequestInFlight) { return (<span/>);}
        else { return (<CircularProgress />); }
    }

    const hasWeatherData = () => {
        return (!!weatherData && weatherData.status !== "fail");
    }

    return(
        <div>
            <form onSubmit={ getWeather }>
                <Typography gutterBottom>How will your plants like the current weather?</Typography>
                <TextField name="zipCode" label="ZIP Code" variant="standard" />
                <Button variant="contained" type="submit">Get Weather</Button>
                <div>{ getSpinner() }</div>
                <div>{ getRegionDescription() }</div>
                <div>{ getWeatherComment() }</div>
                <div>{ getSunninessDescription() }</div>
            </form>
        </div>
    );
}

export default WeatherGetter;