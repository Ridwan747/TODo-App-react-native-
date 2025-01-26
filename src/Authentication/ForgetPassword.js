import { StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from '@react-navigation/native';


const ForgetPassword = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.TextContainer}>
        <Text style={styles.text}>Forget Password!</Text>
        <Text style={styles.secondText}>Enter your registered email address to send your a verification code.</Text>
        </View>
        <View style={styles.secondContainer}>
            <TextInput style={styles.emailText}
             placeholder='Enter your email' />
        </View>
        <View style={styles.register}>
                <TouchableOpacity style={styles.button}
                onPress={()=>navigation.navigate("SendCode")}>
                <Text style={styles.press}>Send code</Text>
                </TouchableOpacity>
                </View>
                
    </View>
 )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextContainer:{
        marginBottom:50,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        
    },
    secondText:{
        fontSize: 15,
        marginBottom: -10,
        color:'black',
        paddingLeft:20,
        paddingRight:20,
    },
    
    secondContainer: {
        marginBottom: 20,
    },
    emailText: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
        marginRight:10,
        marginLeft:10,
        paddingRight:120,
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 10,
        
    },
    register: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#FAA885',
        borderRadius: 25,
        width: '90%',
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
        fontSize: 20,
      },
})