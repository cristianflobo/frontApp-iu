import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { fondoWait } from "../image";
import { formatCurrency } from "react-native-format-currency";
import { Movimientos, ReadQr, GenerarQr } from "../components";
import useDetail from "../hooks/useDetail";
import { detailAccount } from "../styles/stylesScreens/detailAccount";

export default function DetailAccount({ navigation, route }) {
  const { selectScreenQr, setSelectScreenQr, detailAccountUser } =
    useDetail(route);
  return (
    <ImageBackground
      source={fondoWait}
      resizeMode="cover"
      style={styles.imgBackgroundcontainer}
    >
      <View style={styles.conteinerCuentas}>
        <View style={styles.conteinerCuentasName}>
          <Text style={styles.textConteinerCuentasName}>
            {" "}
            Cuenta: {route.params.tipo}
          </Text>
          <Text style={styles.textConteinerCuentasName}>
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
              <Text style={styles.textConteinerCuentasName}>Movimientos</Text>
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

const styles = StyleSheet.create(detailAccount);
