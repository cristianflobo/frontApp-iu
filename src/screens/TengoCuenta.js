import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, } from 'react-native'

export default TengoCuenta = ({navigation}) => {
  return (
    <View style={styles.conteiner}>
      <View style={{flex:1.5, alignItems:"center"}}>
        <View style={{flex:1, justifyContent:"center"}}>
          <Image 
            style={styles.logo}
            source={require("../image/Logo_v2.png")}
          />
        </View> 
        <View style={{flex:1, justifyContent:"center"}}>
          <Text style={styles.testo1}>Cargo app será tu solución al</Text>
          <Text style={styles.testo1}>  transporte de productos</Text>
        </View>
        <View style={{flex:1, justifyContent:"center"}}>
          <Text style={styles.testo2}>Selecciona una acción</Text>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity
            style={styles.button1}
            onPress={()=> navigation.navigate('Login')}
          ><Text style={styles.testoBoton}>YA TENGO CUENTA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('RegistroUsuario')}
          ><Text style={styles.testoBoton2}>REGISTRARME AHORA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:0.2,backgroundColor:"white"}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#003680",
    justifyContent:"center",
    color:"#158662",
  },
    logo:{
      alignItems:"center",  
      width: 250,
      height: 80,

    },
    map:{
      height: 400,
      width: 400,
    },
    testo1:{
      textAlign:"center",
      fontSize:20 ,
      fontWeight: "bold",
      color:"white"
    },
    testo2:{
      fontSize:20 ,
      fontWeight: "bold",
      color:"white"
    },
    testoBoton:{
      fontSize:15 ,
      fontWeight: "bold",
      color:"white"
    },
    testoBoton2:{
      fontSize:15 ,
      fontWeight: "bold",
      color:"black"
    },
    button1: {
      marginBottom:10,  
      justifyContent:"center",
      alignItems: "center",
      backgroundColor:"#152850",
      height:40,
      width:250,
      borderRadius:50,
    },
    button2: {
      justifyContent:"center",
      alignItems: "center",
      backgroundColor:"white",
      color:"black",
      height:40,
      width:250,
      borderRadius:50,
    },
})