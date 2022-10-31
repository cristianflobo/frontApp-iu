import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cuentas = ({tipo, numero, idUser}) => {
    console.log("idUser",idUser)
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textDataCuenta}>{tipo}</Text>
      <Text style={styles.textDataCuenta}>{numero}</Text>
    </View>
  )
}

export default Cuentas

const styles = StyleSheet.create(
    {
        conteiner:{
           display:"flex",
           flexDirection:"row",
        },
        textDataCuenta:{
            flex:0.5,
            fontSize:15,
            marginLeft:10,
            color:"white",
          },
    })