import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InputText = () => {
  return (
    <View style={{ flexDirection:"row", marginLeft:9}}>
                <Image 
                    style={styles.icon1}
                    source={require("../image/hombre.png")}
                />
                <TextInput
                    style={{height: 40, borderBottomWidth:2, borderColor:"blue", width:"90%" }}
                    placeholder="Nombre Completo"
                    onChangeText={newText => setdataRegistro({...dataRegistro, name:newText})}
                    // defaultValue={text}
                />
            </View>
  )
}

export default InputText

const styles = StyleSheet.create({})