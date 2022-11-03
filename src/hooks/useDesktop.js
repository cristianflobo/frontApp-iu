import { useEffect, useState } from "react";
import Geolocation from '@react-native-community/geolocation';
import axios from "react-native-axios"
import {dataUser} from '../utils/data/dataUser'
import {KEY_API} from "@env"

const useDesktop = (nameUser) => {
    const [location, setLocation] = useState(false);
    const [imgClima, setImgClima] = useState({name:"", temp:"", img:"", clima:""})
    const dataUserName = dataUser.find(item => item.name === nameUser)
    useEffect(() => { 
        Geolocation.getCurrentPosition(info => setLocation(info));  
    }, [])

    const clima = async() =>{
      let dataClima = ""
        if (location !== false) {
          let latitud = location.coords.latitude
          let longitud = location.coords.longitude
          try {
            dataClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${KEY_API}`)
          } catch (error) {
            console.log(error)
          }
        setImgClima({
          ...imgClima,
          name:dataClima.data.name,
          temp: dataClima.data.main.temp - 273.15,
          img:dataClima.data.weather[0].icon,
          clima:dataClima.data.weather[0].main
        })
        }
    }

    if (imgClima.clima === "") {
      clima()
    }
  return {
    location,
    imgClima,
    dataUserName,
  }
}

export default useDesktop