import { Alert } from "react-native";

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
let number =  /^[0-9]+$/

const validateRegistroUsuario = ({ name, email, telefono, password, confirPass})=>{
    

    if (name.length < 1) {
        Alert.alert(
            "Escribe tu nombre",
            "",
            [
              { text: "OK" }
            ]
          ); 
        return false
    }

    if (reg.test(email) === false) {
        Alert.alert(
            "Correo incorrecto",
            "",
            [
              { text: "OK" }
            ]
          ); 
      
      return false;
    }

    if (number.test(telefono) === false) {
        Alert.alert(
            "Telefono incorrecto",
            "",
            [
              { text: "OK" }
            ]
          ); 
      
      return false;
    }



    if (password !== confirPass) {
        Alert.alert(
            "contrasenas no coinciden",
            "",
            [
              { text: "OK" }
            ]
          ); 
      
      return false;
    }else{
        if ((password.length  || confirPass.length) == 0  ) {
            Alert.alert(
                "llenar capos contrasena",
                "",
                [
                  { text: "OK" }
                ]
              ); 
        }
    }

}
const validateLogin = (email, password) =>{
  if (reg.test(email) === false) {
    Alert.alert(
        "Correo incorrecto",
        "",
        [
          { text: "OK" }
        ]
      );  
    return false;
  }
  if ((password.length) == 0  ) {
    Alert.alert(
        "Escribir contrasena",
        "",
        [
          { text: "OK" }
        ]
      );
    return false; 
  }
  return true
}
export {
  validateLogin,
  validateRegistroUsuario, 
}