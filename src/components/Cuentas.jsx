import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Cuentas = ({ navigation, tipo, numero, idUser }) => {

  return (
    <View  key={idUser} style={styles.conteiner} >
      <Text
        onPress={() => navigation.navigate("DetailAccount", { idUser, tipo, numero  })}
        style={styles.textDataCuenta}
      >
        {tipo}
      </Text>
      <Text
        onPress={() => navigation.navigate("DetailAccount", {idUser, tipo, numero  })}
        style={styles.textDataCuenta}
      >
        {numero}
      </Text>
    </View>
  );
};

export default Cuentas;

const styles = StyleSheet.create({
  conteiner: {
    display: "flex",
    flexDirection: "row",
    
  },
  textDataCuenta: {
    flex: 0.5,
    fontSize: 15,
    color: "white",
    paddingLeft:10
  },
});
