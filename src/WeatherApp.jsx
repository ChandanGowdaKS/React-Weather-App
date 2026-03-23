import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import "./WeatherApp.css"
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        name: "Bengaluru",
        humidity: 37,
        tempMax: 305,
        tempMin: 303.5,
        temperature: 34,
        weather: "clouds",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div >
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />

        </div>
        
    );
}