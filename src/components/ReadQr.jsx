import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import React from "react";
import { Camera } from "react-native-vision-camera";
import useReadQr from "../hooks/useReadQr";
import { readQr } from "../styles/stylesComponent/readQr";

const ReadQr = () => {
  const {
    hasPermission,
    device,
    frameProcessor,
    cameraActive,
    dataReadQr,
    setcameraActive,
  } = useReadQr();
  if (cameraActive) {
    return (
      <View style={styles.conteinerQr}>
        {hasPermission === true && device != null ? (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={cameraActive}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
        ) : (
          <ActivityIndicator size="large" color="#24C777" />
        )}
        <View>
          <Text></Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.conteinerQr, styles.conteinerText]}>
        <Text style={styles.conteinerText}>{dataReadQr}</Text>
      </View>
    );
  }
};

export default ReadQr;

const styles = StyleSheet.create(readQr);
