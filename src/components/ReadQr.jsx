import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity} from "react-native";
import React from "react";
import { Camera } from 'react-native-vision-camera';
import useReadQr from "../hooks/useReadQr";

const ReadQr = () => {
  const {hasPermission, device,frameProcessor, cameraActive, dataReadQr, setcameraActive} = useReadQr()
  console.log("camaraaaa",cameraActive)
  if (cameraActive) {
    return (
      <View style={styles.conteinerQr}>
          {      
            hasPermission === true && device != null?
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={cameraActive}
                frameProcessor={frameProcessor}
                frameProcessorFps={5}
              />:<ActivityIndicator size="large" color="#24C777" />
          }
          <View>
            <Text></Text>
          </View>
      </View>
    );
  } else{
    return  (
    <View style={[styles.conteinerQr,styles.conteinerText]}>
     <Text style={styles.conteinerText}>{dataReadQr}</Text>
      </View>
    )
  }
};

export default ReadQr;

const styles = StyleSheet.create(
  {
    barcodeTextURL: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#26D07C",
      height: 40,
      width: 150,
      borderRadius: 50,
    },
    conteinerQr:{
      flex:1,
      height:400,
      marginTop:20,
      justifyContent:"center",
    },
    conteinerText:{
      alignItems:"center",
      color:"#26D07C",
      fontSize:20
    }

  });
