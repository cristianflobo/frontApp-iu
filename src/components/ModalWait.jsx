import { StyleSheet, Text, View, Modal, ActivityIndicator, Image, ImageBackground } from 'react-native'
import { fondo, fondoWait} from '../image'
import React from 'react'

const ModalWait = () => {
  return (
    <ImageBackground source={fondoWait} resizeMode="cover" style={styles.container}>
          <View >  
            <Image 
              style={styles.logo}
              source={require("../image/logo.png")}
            /> 
            <ActivityIndicator size="large" color="#26D07C" />
          </View>  
  </ImageBackground>
  )
}
export default ModalWait

const styles = StyleSheet.create({
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center',  
        backgroundColor: 'white',  
      },  
      logo:{
        alignItems:"center",  
        width: 290,
        height: 150,
      },


})