import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { formatCurrency } from "react-native-format-currency";
import { movimientos } from "../styles/stylesComponent/movimientos";

const Movimientos = ({ data }) => {
  let key = Object.keys(data);
  return (
    <View key={key[0]} style={styles.conteinerMovimientos}>
      <Text style={styles.text}> {key}</Text>
      <Text style={styles.text}> a {data[`${key[0]}`].destino} </Text>
      <Text style={styles.text}>
        {" "}
        a {
          formatCurrency({ amount: data[`${key[0]}`].monto, code: "COP" })[0]
        }{" "}
      </Text>
    </View>
  );
};

export default Movimientos;

const styles = StyleSheet.create(movimientos);
