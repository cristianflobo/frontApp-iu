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
import { fondo, usuario, contrasena } from "../image";
import useLogin from "../hooks/useLogin";
import { login } from "../styles/stylesScreens/login";

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

const styles = StyleSheet.create(login);
