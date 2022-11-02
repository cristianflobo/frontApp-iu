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
          console.log("You can use the gps");
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the camera");
            } else {
              console.log("Camera permission denied");
            }
          } catch (err) {
            console.warn(err);
          }
        } else {
          console.log("gps permission denied");
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
