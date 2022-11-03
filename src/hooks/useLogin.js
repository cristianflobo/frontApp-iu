import { useEffect, useState } from "react";
import { Alert, PermissionsAndroid } from "react-native";

const useLogin = (navigation) => {
  const [dataLogin, setdataLogin] = useState({ usuario: "", password: "" });
  let user = "iuvity";
  let password = "iuvity";

  useEffect(() => {
    const requestGpsPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA
            );
            if (granted != PermissionsAndroid.RESULTS.GRANTED) {
              Alert.alert("Problemas acceso CAMARA", "", [{ text: "OK" }]);
            }
          } catch (err) {
            console.warn(err);
          }
        } else {
          Alert.alert("Problemas acceso GPS", "", [{ text: "OK" }]);
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestGpsPermission();
  }, []);

  const loginUser = async () => {
    if (dataLogin.password !== password || dataLogin.usuario !== user) {
      Alert.alert("Datos incorrectos", "", [{ text: "OK" }]);
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Desktop", params: dataLogin.usuario }],
    });
  };

  return {
    loginUser,
    dataLogin,
    setdataLogin,
  };
};

export default useLogin;
