import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import { fondocuentas } from '../image'
import { dataUser } from '../utils/data/dataUser'
import Movimientos from '../components/Movimientos'
import { formatCurrency } from "react-native-format-currency";


export default function DetailAccount({route}) {
  const accountUser = dataUser.find(item => item.id === route.params.idUser)
  const detailAccountUser = accountUser.cuentas.find(item =>{
    if (item.numerocuenta === route.params.numero && item.tipo === route.params.tipo ) {
        return item
    }
  })
  return (
    <ImageBackground source={fondocuentas} resizeMode="cover" style={styles.imgBackgroundcontainer}>
      <View style={styles.conteinerCuentas}>
        <View style={styles.conteinerCuentasName}>
          <Text  style={{fontSize:20, color:"#78D6A7"}}>  Cuenta: {route.params.tipo}</Text>
          <Text  style={{fontSize:20, color:"#78D6A7"}}>  Saldo: $ { formatCurrency({ amount:detailAccountUser.saldo, code: "COP" })[1]} </Text>
        </View>
      </View>  
      <View style={{flex:2, width:"100%", justifyContent:"center", alignItems:"center"}}>
        <View style={styles.conteinerMovimientos}>
          <View style={{alignItems:"center", height:30, justifyContent:"center"}}>
            <Text style={{fontSize:20, color:"white"}}>Movimientos</Text>
          </View>
          <ScrollView style={{flex:1}}>
            {
              detailAccountUser.movimientos.map((item,i) => {
                return (
                  <View style={styles.dataMap}>
                    <Movimientos key={i} data={item} />
                  </View>
                )
              
            })
            }
          </ScrollView>
        </View>
      </View>
      <View style={styles.conteinerButton}>
              <TouchableOpacity
                style={styles.button}
                // onPress={()=> loginUser()}
                // onPress={()=> getLocation()}
              ><Text style={styles.testoBoton}>Leer QR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                // onPress={()=> loginUser()}
                // onPress={()=> getLocation()}
              ><Text style={styles.testoBoton}>Enviar QR</Text>
              </TouchableOpacity>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create(
  {
    imgBackgroundcontainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    conteinerMovimientos:{
      flex:0.8,
      width:"80%",
      backgroundColor:" rgba(0, 124, 119, 0.8)",
      borderRadius:20,
      borderWidth:2,
      borderColor:"#26D07C",
        
    },
    conteinerCuentasName:{
      flex:0.6,
      backgroundColor:" rgba(0, 124, 119, 0.8)",
      borderRadius:20,
      borderWidth:2,
      borderColor:"#26D07C",
      justifyContent:"center",
    },
    conteinerCuentas:{
      flex:0.5,
      width:"80%",
      justifyContent:"flex-end",
      
    },
    dataMap:{
      flex:1,
      borderWidth:1,
      borderColor:"#26D07C",
      justifyContent:"center",
      marginTop:5,
      borderRadius:5,
    },
    button: {
      marginBottom:10,  
      justifyContent:"center", 
      alignItems: "center",
      backgroundColor:"#26D07C",
      height:30,
      width:120,
      borderRadius:50,
    },
    conteinerButton:{
      flex:0.5,
      alignItems:"flex-start",
      justifyContent:"space-between",
      flexDirection:"row",
      width:"60%",
    }
  })