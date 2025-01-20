import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from "expo-router";


const SendCode = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.secondContainer}>
             <Text style={styles.text}>Enter verification Code!</Text>
        <View style={styles.verificationInput}>
            <TextInput style={styles.firstText}
            placeholder='2'
            keyboardType='number-pad' />
             <TextInput style={styles.secondText}
            placeholder='2' 
            keyboardType='number-pad'/>
             <TextInput style={styles.thirdText}
            placeholder='2' 
            keyboardType='number-pad'/>
             <TextInput style={styles.fourthText}
            placeholder='2' 
            keyboardType='number-pad'/>
        </View>
         <View style={styles.register}>
                        <TouchableOpacity style={styles.button}
                        onPress={()=>navigation.navigate("SendCode")}>
                          <Text style={styles.press}>Verify your code</Text>
                        </TouchableOpacity>
                        </View>
        </View>
    </View>
  )
}

export default SendCode

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondContainer:{
       
    },
    verificationInput:{
        height: 200,
    width: 330,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 20,
    borderWidth:2,
    flexDirection:'row',
    
    },
    firstText:{
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        textAlign: 'left',
        fontWeight: 'bold',
        borderWidth:1,
        marginLeft:12,
        marginTop:50,
        marginBottom:50,
       
    },

    secondText:{
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        textAlign: 'left',
        fontWeight: 'bold',
        borderWidth:1,
        marginLeft:25,
        marginTop:50,
        marginBottom:50,
        
    },

    thirdText:{
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        textAlign: 'left',
        fontWeight: 'bold',
        borderWidth:1,
        marginLeft:35,
        marginTop:50,
        marginBottom:50
    },
    
    fourthText:{
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        textAlign: 'left',
        fontWeight: 'bold',
        borderWidth:1,
        marginLeft:40,
        marginTop:50,
        marginBottom:50
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        marginLeft:50,

    },
    register: {
        marginTop: 10,
        marginLeft:50,
        marginLeft:50
    },
    button: {
        backgroundColor: '#FAA885',
        borderRadius: 25,
        width: '80%',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:50,
        paddingLeft:50,
        
    },
    press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 0,
        fontSize: 15,
      },

})