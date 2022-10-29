import axios from "react-native-axios"
import { Alert } from "react-native";

const ip = "192.168.1.7"
const url2 = `http://${ip}:3001`

const Axios = async (url, dataUrl) =>{  
    try {
       const data = await axios.post(url2+url, {  dataUrl } )
       console.log("prueee",data.data )
       return data.data  
    } catch (error) {
        console.log(error)
    }

} 

const newUser = async (url, dataRegistro) =>{ 
    const {name, telefono, email, password, conductor} = dataRegistro
    try {
       const data = await axios.post(url2+url, {name, telefono, email, password, conductor } )
       if (data.data === "existe") {
            Alert.alert(
                "El email ya existe",
                "",
                [
                { text: "OK" }
                ]
            );  
       }
       return data.data  
    } catch (error) {
        console.log(error)
    }

} 

export {
    Axios,
    newUser,
}