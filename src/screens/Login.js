import React  from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { fondo, usuario, contrasena } from "../image";
import useLogin from "../hooks/useLogin";

export default Login = ({ navigation }) => {
  const { loginUser, dataLogin, setdataLogin } = useLogin(navigation);
  return (
    <View style={styles.conteiner}>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
        <View style={{ flex: 0.25, alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.icon} source={usuario} />
            <TextInput
              style={styles.inputText}
              placeholder="Usuario"
              onChangeText={(newText) =>
                setdataLogin({ ...dataLogin, usuario: newText })
              }
              value={dataLogin.usuario}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Image style={styles.icon2} source={contrasena} />
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Contraseña"
              value={dataLogin.password}
              onChangeText={(newText) =>
                setdataLogin({ ...dataLogin, password: newText })
              }
            />
          </View>
        </View>
        <View style={{ flex: 0.3, alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={() => loginUser()}>
            <Text style={styles.testoBoton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
  },
  inputText: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#26D07C",
    width: "60%",
    marginLeft: 9,
  },
  logo: {
    alignItems: "center",
    width: 290,
    height: 150,
  },
  button: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26D07C",
    height: 40,
    width: 250,
    borderRadius: 50,
  },
  testoBoton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    alignItems: "center",
    width: 30,
    height: 30,
  },
  icon2: {
    alignItems: "center",
    width: 30,
    height: 40,
  },
});
