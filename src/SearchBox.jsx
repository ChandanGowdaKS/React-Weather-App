import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import Alert from '@mui/material/Alert';
import { useState } from "react";
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0d891b244aa8e04720b083432c9fe3cc";
    

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        let result = {
            name: jsonResponse.name,
            temperature: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
            weatherResult: jsonResponse.weather[0].main,
        };
        console.log(result);
        return result;
    };
    function handleChange(event) {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try {
        event.preventDefault();
        let newInfo = await getWeatherInfo();
        setCity("");
        setError(false);
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
        
    }
    return (
        <div className = "SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange } required />
                <br></br><br></br>
            <Button variant="contained" type= "submit">Search</Button>
            </form>
            <div  className="errorBox">
                {error &&  <Alert severity="error">No such place found in my API</Alert>}
            
            </div>
            
        </div>
    );
}