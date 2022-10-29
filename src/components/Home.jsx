import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{backgroundColor:"yellow",justifyContent:"center", height:"100%"}}>
        <Text> MIRAR</Text>
       {/* <MapView style={styles.map}/> */}

       <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map:{
    height: 400,
    width: 400,
  }
})

//export default Mirar