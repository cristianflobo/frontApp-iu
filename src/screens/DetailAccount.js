import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { fondoWait } from "../image";
import { formatCurrency } from "react-native-format-currency";
import { Movimientos, ReadQr, GenerarQr } from "../components";
import useDetail from "../hooks/useDetail";

export default function DetailAccount({ navigation, route }) {
  const {selectScreenQr, setSelectScreenQr, detailAccountUser} = useDetail(route)
  return (
    <ImageBackground
      source={fondoWait}
      resizeMode="cover"
      style={styles.imgBackgroundcontainer}
    >
      <View style={styles.conteinerCuentas}>
        <View style={styles.conteinerCuentasName}>
          <Text style={{ fontSize: 20, color: "#78D6A7" }}>
            {" "}
            Cuenta: {route.params.tipo}
          </Text>
          <Text style={{ fontSize: 20, color: "#78D6A7" }}>
            {" "}
            Saldo: ${" "}
            {
              formatCurrency({
                amount: detailAccountUser.saldo,
                code: "COP",
              })[1]
            }{" "}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.conteinerMovimientos}>
          {selectScreenQr === "move" ? (
            <View
              style={{
                alignItems: "center",
                height: 30,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Movimientos</Text>
            </View>
          ) : null}
          <ScrollView style={{ flex: 1 }}>
            {selectScreenQr === "move" ? (
              detailAccountUser.movimientos.map((item, i) => {
                return (
                  <View key={i} style={styles.dataMap}>
                    <Movimientos key={i} data={item} />
                  </View>
                );
              })
            ) : selectScreenQr === "write" ? (
              <View style={{ flex: 1 }}>
                <GenerarQr navigation={navigation} tipo={route.params.tipo} />
              </View>
            ) : (
              <ReadQr />
            )}
          </ScrollView>
        </View>
      </View>
      {selectScreenQr === "move" ? (
        <View style={styles.conteinerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectScreenQr("read")}
          >
            <Text style={styles.testoBoton}>Leer QR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSelectScreenQr("write")}
          >
            <Text style={styles.testoBoton}>Enviar QR</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackgroundcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  conteinerMovimientos: {
    flex: 0.8,
    width: "80%",
    backgroundColor: " rgba(6, 63, 70, 0.8)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#26D07C",
  },
  conteinerCuentasName: {
    flex: 0.6,
    backgroundColor: " rgba(6, 63, 70, 0.8)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#26D07C",
    justifyContent: "center",
  },
  conteinerCuentas: {
    flex: 0.5,
    width: "80%",
    justifyContent: "flex-end",
  },
  dataMap: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#26D07C",
    justifyContent: "center",
    marginTop: 5,
    borderRadius: 5,
  },
  button: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26D07C",
    height: 30,
    width: 120,
    borderRadius: 50,
  },
  conteinerButton: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "70%",
  },
});
