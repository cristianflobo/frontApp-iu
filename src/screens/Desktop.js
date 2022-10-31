import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground } from 'react-native'
import React from 'react'
import useDesktop from '../hooks/useDesktop'
import {dataUser} from '../utils/data/dataUser'
import Cuentas from '../components/Cuentas'
import { fondoWait, fondocuentas } from '../image'

export default Desktop = () => {
const { location, imgClima } = useDesktop()
  return (
    <ImageBackground source={fondocuentas} resizeMode="cover" style={styles.imgBackgroundcontainer}>
    <View style={styles.conteiner}>
      <View style={styles.indicador}>
        <Text style={styles.textClima}>{imgClima.name}</Text>
        <Text style={styles.textClima}>{ Math.round(imgClima.temp)}℃</Text>
        <Text style={styles.textClima}>{imgClima.clima}</Text>
        {
          location === false?<ActivityIndicator size="large" color="#26D07C" />:
          <Image 
                style={styles.climImg}
                source={{uri:`https://openweathermap.org/img/wn/${imgClima.img}@2x.png`}}
          />
        }
      </View>
      <View style={styles.textMisCuentas} >
          <Text style={{fontSize:30, color:"#98E8C1", fontWeight:"bold"}}>Mis Cuentas</Text>
      </View>
      <View style={styles.conteinerCuentas}>
        <View style={styles.conteinerTextDataCuentas} > 
            <Text style={styles.textDataCuentas}>Tipo de Cuenta</Text>
            <Text style={styles.textDataCuentas}>Numero de Cuenta</Text>
        </View>
          {
          dataUser.map((item, index)=>{
            return (
              <View style={styles.dataMap}>
                <Cuentas idUser={item.id} tipo={item.cuentas[index].tipo} numero={item.cuentas[index].numerocuenta} />
              </View>
            )
          }) 
          }
      </View>  
      {/* <Text>desktop</Text> */}
    </View>
    </ImageBackground>
  )
}



const styles = StyleSheet.create(
  {
    imgBackgroundcontainer:{
      flex:1
    },
    conteiner:{
      flex:1,
      alignItems:"center"
    },
    indicador:{
      flex:0.1,
      width:"70%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
     // backgroundColor:"grey",
    },
    climImg:{
      height:80,
      width:80,
    },
    conteinerCuentas:{
      flex:0.5,
      width:"80%",
      backgroundColor:"#0E3542",
      borderRadius:20,
      borderWidth:2,
      borderColor:"#26D07C"
      
    },
    textMisCuentas:{
      flex:0.15,
      justifyContent:"center",
      alignItems:"center",   
    },
    conteinerTextDataCuentas:{
      flex:0.1,
      flexDirection:"row" ,
      alignItems:"center",
      borderBottomWidth:2,
      borderBottomColor:"#26D07C"
    },
    textDataCuentas:{
      flex:0.5,
      fontSize:15,
      marginLeft:10,
      color:"white"
    },
    dataMap:{
      flex:0.07,
      //width:"90%",
      borderWidth:1,
      borderColor:"#26D07C",
      justifyContent:"center",
      marginTop:5,
      borderRadius:5,
    },
    textClima:{
      fontSize:20
    },
  })


// api key 8fb023c76c6239e263a2dfe8d44efe46

//https://api.openweathermap.org/data/2.5/weather?lat=6.217&lon=-75.567&appid=8fb023c76c6239e263a2dfe8d44efe46