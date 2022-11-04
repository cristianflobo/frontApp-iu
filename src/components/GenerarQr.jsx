import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { Picker } from "@react-native-picker/picker";
import { generadorQR } from "../styles/stylesComponent/generadorQr";
import useGenerarQr from "../hooks/useGenerarQr";

const GenerarQr = () => {
  const {
    selectedMoneda,
    selectedCuenta,
    input,
    generarFinish,
    dataQr,
    setSelectedCuenta,
    setSelectedMoneda,
    setInput,
    generate,
  } = useGenerarQr();

  return (
    <View style={styles.conteinerGenerarQr}>
      <View style={styles.textCuenta}>
        <Text style={{ fontSize: 20, color: "#78D6A7" }}> Cuenta:</Text>

        <Picker
          selectedValue={selectedCuenta}
          style={{ height: 50, width: 150, color: "#78D6A7" }}
          onValueChange={(itemValue) => setSelectedCuenta(itemValue)}
        >
          <Picker.Item label="Ahorro" value="Ahorro" />
          <Picker.Item label="Corriente" value="Corriente" />
        </Picker>
      </View>
      <View style={styles.textMonto}>
        <Text style={{ fontSize: 20, color: "#78D6A7" }}> Monto:</Text>
        <TextInput
          style={styles.inputMonto}
          keyboardType={"decimal-pad"}
          placeholderTextColor={"#26D07C"}
          placeholder="0"
          onChangeText={(newText) => setInput(newText)}
          value={input}
        />
        <Picker
          selectedValue={selectedMoneda}
          style={{ height: 50, width: 150, color: "#78D6A7" }}
          onValueChange={(item) => setSelectedMoneda(item)}
        >
          <Picker.Item label="COP" value="COP" />
          <Picker.Item label="USD" value="USD" />
        </Picker>
      </View>

      {generarFinish ? (
        <QRCode style={styles.styleQr} size={200} value={dataQr} />
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => generate()}
      >
        <Text style={styles.testoBoton}>
          {!generarFinish ? "Generar QR" : "Cerrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenerarQr;

const styles = StyleSheet.create(generadorQR);
