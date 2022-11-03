import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { cuentas } from "../styles/stylesComponent/cuentas";

const Cuentas = ({ navigation, tipo, numero, idUser }) => {
  return (
    <View key={idUser} style={styles.conteiner}>
      <Text
        onPress={() =>
          navigation.navigate("DetailAccount", { idUser, tipo, numero })
        }
        style={styles.textDataCuenta}
      >
        {tipo}
      </Text>
      <Text
        onPress={() =>
          navigation.navigate("DetailAccount", { idUser, tipo, numero })
        }
        style={styles.textDataCuenta}
      >
        {numero}
      </Text>
    </View>
  );
};

export default Cuentas;
const styles = StyleSheet.create(cuentas);
