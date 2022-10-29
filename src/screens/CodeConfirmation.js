import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput,Alert} from 'react-native'
import React, { useState } from 'react'
import { encrypted } from '../encrypted'
import {Axios} from '../queryAxios'
import ModalWait from '../components/ModalWait'
import { validateLogin } from '../validate'



export default function CodeConfirmation() {
    const [dataLogin, setdataLogin] = useState({email:"",password:""})
    const  checkCode = () =>{}
    
    return (
      <View style={styles.conteiner}>
          <View style={styles.conteiner}>
            <View style={{flex:0.8, justifyContent:"center", alignItems:"center"}}>
              <Image 
                style={styles.logo}
                source={require("../image/Logo_v1.png")}
              />
            </View> 
            <View style={{flex:1}}>
                <View style={{ flexDirection:"row", marginTop:15}}>
                    <Image 
                        style={styles.icon2}
                        source={require("../image/contrasena.png")}
                    />
                    <TextInput
                        secureTextEntry
                        style={{height: 40, borderBottomWidth:2, borderColor:"blue", width:"88%"}}
                        placeholder="Contraseña"
                        value={dataLogin.password}
                        onChangeText={newText => setdataLogin({...dataLogin, password:newText})}
                    />
                </View>
            </View>
            <View style={{flex:0.3, alignItems:"center"}}>
              <TouchableOpacity
                style={styles.button}
              onPress={()=> checkCode()}
              ><Text style={styles.testoBoton}>REGISTAR</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    },
    logo:{
        alignItems:"center",  
        width: 250,
        height: 80,
      },
      button: {
        marginBottom:10,  
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#152850",
        height:40,
        width:250,
        borderRadius:50,
      },
      testoBoton:{
        fontSize:15 ,
        fontWeight: "bold",
        color:"white"
      },
      icon1:{
        alignItems:"center",  
        width: 30,
        height: 30,
      }, 
      icon2:{
        alignItems:"center",  
        width: 38,
        height: 40,
      }, 
})