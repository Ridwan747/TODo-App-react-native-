import { StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Server from '@/constants/server';

//const server = "http://192.168.156.189:5000/api/auth";
const ForgetPassword = () => {
    const navigation=useNavigation()

     const [email, setEmail] = useState();
    
     

      const handleForgotPassword = async () => {
    
        const token =  await AsyncStorage.getItem("userToken")
      
        // if(!token){
        //   alert("Token is absent")
        // }
        if (!email) {
          alert("Please enter your email");
          return;
        }
      
      
          try {
            const response = await axios.post(`${Server.serverAuth}/forgotPassword`, {
              email: email,
             
            },{
              headers:{
                "Authorization":`Bearer ${token}`
              }
            });
      
            // Accessing the "status" field from response.data
            if (response.data.status === "success") {
              console.log("email sent successfully");
              console.log(response.data); // Prints the full response data
      
              navigation.navigate('SendCode', {userEmail:email})
            } else {
              console.log("password failed:", response.data.message);
            }
         } catch (err) {
            if (err.response) {
              
              console.log("Error:", err.response.data);
             
      
            } else {
              console.log("Network error:", err.message);
            }
          }
        };
      
  return (


    <View style={styles.container}>
        <View style={styles.TextContainer}>
        <Text style={styles.text}>Forget Password!</Text>
        <Text style={styles.secondText}>Enter your registered email address to send your a verification code.</Text>
        </View>
        <View style={styles.secondContainer}>
            <TextInput style={styles.emailText}
             placeholder='Enter your email' 
             value={email}
             onChangeText={setEmail}/>
        </View>
        <View style={styles.register}>
                <TouchableOpacity style={styles.button}
                onPress={handleForgotPassword}>
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