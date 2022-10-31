import { useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';
import axios from "react-native-axios"
let apiKey = "8fb023c76c6239e263a2dfe8d44efe46"

const dataData = 
{
  "coord": {
    "lon": -75.567,
    "lat": 6.217
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 297.25,
    "feels_like": 297.28,
    "temp_min": 296.13,
    "temp_max": 298.95,
    "pressure": 1021,
    "humidity": 60
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.6,
    "deg": 30
  },
  "clouds": {
    "all": 75
  },
  "dt": 1667147854,
  "sys": {
    "type": 1,
    "id": 8577,
    "country": "CO",
    "sunrise": 1667126913,
    "sunset": 1667169788
  },
  "timezone": -18000,
  "id": 3683427,
  "name": "El Poblado",
  "cod": 200
}

const useDesktop = () => {
    const [location, setLocation] = useState(false);
    const [imgClima, setImgClima] = useState({name:"", temp:"", img:"", clima:""})


    useEffect(() => {
        (function(){Geolocation.getCurrentPosition(
            position => {
              setLocation(position);
            },
            error => {
              setLocation(false);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
          ); })();
    }, [])
    const clima = async() =>{
        let latitud = location.coords.latitude
        let longitud = location.coords.longitude
        let dataClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}`)
        console.log(dataClima.data.main.temp, dataClima.data.name)
        // setImgClima(dataClima.data.weather[0].icon)

        console.log("ajaaa",round)
        setImgClima({
            ...imgClima,
            name:dataClima.data.name,
            temp: dataClima.data.main.temp - 273.15,
            img:dataClima.data.weather[0].icon,
            clima:dataClima.data.weather[0].main
       })
    }
    if (location === false) {
        clima()
    }
    
    console.log("---------------------",imgClima)
  return {
    location,
    imgClima,
  }
}

export default useDesktop