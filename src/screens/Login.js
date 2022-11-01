import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, Alert, PermissionsAndroid} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useEffect, useState } from 'react'
import { fondo, logo, usuario, contrasena } from '../image'
import ModalWait from '../components/ModalWait'


  export default Login = ({navigation}) => {
    const [dataLogin, setdataLogin] = useState({usuario:"",password:""})
  
    const [Wait, setWait] = useState(false)
    let user = "iuvity"
    let password = "iuvity"

    useEffect(() => {
      setWait(true)
      setTimeout(() => {
        setWait(false)
      }, 2000);
    }, [])
    useEffect(() => {
      const requestGpsPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            // {
            //   title: "Cool Photo App Camera Permission",
            //   message:
            //     "Cool Photo App needs access to your camera " +
            //     "so you can take awesome pictures.",
            //   buttonNeutral: "Ask Me Later",
            //   buttonNegative: "Cancel",
            //   buttonPositive: "OK"
            // }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the gps");
          } else {
            console.log("gps permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
      requestGpsPermission()
    }, []);
  
    const loginUser = async () => {
      if (dataLogin.password !== password || dataLogin.usuario !== user) {
        Alert.alert(
          "Datos incorrectos",
          "",
          [{ text: "OK" }]
        );
          return
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Desktop',params:dataLogin.usuario  }],
        
      });
    }
    
    
    return (
      // <KeyboardAvoidingView behavior="padding" style={styles.conteiner}>
      <View style={styles.conteiner} >
         <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
            <View style={{flex:0.3, alignItems:"center"}}>
              <Image 
                style={styles.logo}
                source={require("../image/logo.png")}
              />
            </View> 
            <View style={{ flex:0.25, alignItems:"center" }}>
                <View style={{ flexDirection:"row"}}>
                    <Image 
                        style={styles.icon}
                        source={usuario}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Usuario"
                        onChangeText={newText => setdataLogin({...dataLogin, usuario:newText})}
                        value={dataLogin.usuario}
                    />
                </View>
                <View style={{ flexDirection:"row", marginTop:15}}>
                    <Image 
                        style={styles.icon2}
                        source={contrasena}
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Contraseña"
                        value={dataLogin.password}
                        onChangeText={newText => setdataLogin({...dataLogin, password:newText})}
                    />
                </View>
            </View>
            <View style={{flex:0.3, alignItems:"center"}}>
              <TouchableOpacity
                style={styles.button}
                 onPress={()=> loginUser()}
                // onPress={()=> getLocation()}
              ><Text style={styles.testoBoton}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            </ImageBackground>
      </View>
     // {/* </KeyboardAvoidingView> */}
    )
  
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
       position:"relative"
    },
    image: {
      flex: 1,
      height:"100%",
      width:"100%",
      justifyContent: "center",
      position:"absolute"
    },
    inputText:{
      height: 40, 
      borderBottomWidth:2, 
      borderColor:"#26D07C", 
      width:"60%",
      marginLeft:9
    },
    logo:{
        alignItems:"center",  
        width: 290,
        height: 150,
      },
      button: {
        marginBottom:10,  
        justifyContent:"center", 
        alignItems: "center",
        backgroundColor:"#26D07C",
        height:40,
        width:250,
        borderRadius:50,
      },
      testoBoton:{
        fontSize:15 ,
        fontWeight: "bold",
        color:"white"
      },
      icon:{
        alignItems:"center",  
        width: 30,
        height: 30,
      }, 
      icon2:{
        alignItems:"center",  
        width: 30,
        height: 40,
      }, 
 
})