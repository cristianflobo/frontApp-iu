import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import useDesktop from "../hooks/useDesktop";
import { fondo } from "../image";
import { Cuentas } from "../components";

export default Desktop = ({ navigation, route }) => {
  const { location, imgClima, dataUserName } = useDesktop(route.params);

  return (
    <ImageBackground
      source={fondo}
      resizeMode="cover"
      style={styles.imgBackgroundcontainer}
    >
      <View style={styles.conteiner}>
        {location === false ? (
          <ActivityIndicator size="large" color="#24C777" />
        ) : (
          <View style={styles.indicador}>
            <Text style={styles.textClima}> {imgClima.name}</Text>
            <Text style={styles.textClima}> {Math.round(imgClima.temp)}℃</Text>
            <Text style={styles.textClima}> {imgClima.clima}</Text>
            <Image
              style={styles.climImg}
              source={{
                uri: `https://openweathermap.org/img/wn/${imgClima.img}@2x.png`,
              }}
            />
          </View>
        )}
        <View style={styles.textMisCuentas}>
          <Text style={{ fontSize: 30, color: "#24C777", fontWeight: "bold" }}>
            Mis Cuentas
          </Text>
        </View>
        <View style={styles.conteinerCuentas}>
          <View style={styles.conteinerTextDataCuentas}>
            <Text style={styles.textDataCuentas}>Tipo de Cuenta</Text>
            <Text style={styles.textDataCuentas}>Numero de Cuenta</Text>
          </View>
          {dataUserName.cuentas.map((item, index) => {
            return (
              <View key={index + 10} style={styles.dataMap}>
                <Cuentas
                  navigation={navigation}
                  idUser={dataUserName.id}
                  tipo={item.tipo}
                  numero={item.numerocuenta}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackgroundcontainer: {
    flex: 1,
  },
  conteiner: {
    flex: 1,
    alignItems: "center",
  },
  indicador: {
    flex: 0.1,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  climImg: {
    height: 80,
    width: 80,
  },
  conteinerCuentas: {
    flex: 0.5,
    width: "80%",
    backgroundColor: " rgba(6, 63, 70, 0.8)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#26D07C",
  },
  textMisCuentas: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  conteinerTextDataCuentas: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#26D07C",
  },
  textDataCuentas: {
    flex: 0.5,
    fontSize: 15,
    marginLeft: 10,
    color: "white",
  },
  dataMap: {
    flex: 0.07,
    borderWidth: 1,
    borderColor: "#26D07C",
    justifyContent: "center",
    marginTop: 5,
    borderRadius: 5,
  },
  textClima: {
    fontSize: 20,
  },
});