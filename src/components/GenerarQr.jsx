import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import { Picker } from "@react-native-picker/picker";

const GenerarQr = ({ navigation }) => {
  const [selectedCuenta, setSelectedCuenta] = useState("Ahorro");
  const [selectedMoneda, setSelectedMoneda] = useState("COP");
  const [input, setInput] = useState(0);
  const [generarFinish, setgenerarFinish] = useState(false);
  const [dataQr, setdataQr] = useState("");

  const generate = () => {
    setdataQr(
      `[{cuenta:${selectedCuenta}},{monto:${input}},{moneda:${selectedMoneda}}]`
    );
    setgenerarFinish(!generarFinish);
  };

  return (
    <View style={styles.conteinerGenerarQr}>
      <View style={styles.textCuenta}>
        <Text style={{ fontSize: 20, color: "#78D6A7" }}> Cuenta:</Text>

        <Picker
          selectedValue={selectedCuenta}
          style={{ height: 50, width: 150, color: "#78D6A7" }}
          onValueChange={(itemValue, itemIndex) => setSelectedCuenta(itemValue)}
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
          onValueChange={(item, itemIndex) => setSelectedMoneda(item)}
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
        // onPress={()=> loginUser()}
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

const styles = StyleSheet.create({
  conteinerGenerarQr: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  styleQr: {
    flex: 1,
    width: 100,
  },
  textCuenta: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  textMonto: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 30,
    marginBottom: 50,
  },
  button: {
    height: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26D07C",
    width: 120,
    borderRadius: 50,
    marginTop: 2,
  },
  buttonX: {
    height: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26D07C",
    width: 30,
    borderRadius: 50,
    marginTop: 2,
  },
  inputMonto: {
    height: 25,
    borderBottomWidth: 2,
    borderColor: "#26D07C",
    width: "20%",
    marginLeft: 9,
    borderWidth: 2,
    borderRadius: 7,
  },
});
