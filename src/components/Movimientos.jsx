import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { formatCurrency } from "react-native-format-currency";


const Movimientos = ({data}) => {
    let key = Object.keys(data)
    formatCurrency({ amount: 1234.56, code: "ARS" })
  return (
    <View style={{display:'flex', flexDirection:"row",  color:"white"}}>
      <Text style={styles.text}> {Object.keys(data)}</Text>
      <Text style={styles.text}> a {data[`${key[0]}`].destino} </Text>
      <Text style={styles.text}> a  { formatCurrency({ amount: data[`${key[0]}`].monto, code: "COP" })[0] } </Text>
    </View>
  )
}

export default Movimientos

const styles = StyleSheet.create(
    {
        text:{
            fontSize:15,
            color:"#26D07C"
        }
    })