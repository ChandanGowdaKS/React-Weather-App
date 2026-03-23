import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"

export default function InfoBox({info}) {
    let Img_Url = "https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  let COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let HOT_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let RAIN_URL ="https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
            <div className="weatherCard">
        
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 70 ? RAIN_URL : info.temperature > 300 ? HOT_URL : COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
                            <p>Temperature : {(info.temperature-273.15).toFixed(1)}&deg;C</p>
                            <p>Weather : {info.weather}</p>
                            <p>Humidity : {info.humidity}%</p>
                            <p>Temperature_Max : {(info.tempMax-273.15).toFixed(1)}&deg;C</p>
                            <p>Temperature_Min : {(info.tempMin-273.15).toFixed(1)}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      
                </Card>
                </div>
    );
}