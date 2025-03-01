import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Server from '@/constants/server';

//const server = "http://192.168.156.189:5000/api/auth"

const ResetPassword = ({route}) => {
    const navigation = useNavigation()
     
 
      const [newPassword, setnewPassword] = useState('')  
      const [confirmPassword, setconfirmPassword] = useState('')

   const handleResetPassword = async () => {
 
     const token =  await AsyncStorage.getItem("userToken")
   
    //  if(!token){
    //    alert("Token is absent")
    //  }
    if (!newPassword || !confirmPassword) {
      alert("Please enter both password fields");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
 
       try {
         const response = await axios.post(`${Server.serverAuth}/reset-password`, {
           email: route.params.userEmail,
           newPassword: newPassword,
           confirmPassword: confirmPassword

          
         })
   
         // Accessing the "status" field from response.data
         if (response.data.status === "success") {
           console.log("Password updated successfully");
           console.log(response.data); // Prints the full response data
   
           navigation.navigate('Login')
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
        <View style={styles.Container}>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#FAA885' }}>Enter New Password</Text>
                </View>
                <View style={{ marginTop: 90 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>New Password</Text>
                    </View>
                    <TextInput style={styles.newPassword}
                        placeholder='New Password'
                        value={newPassword}
                        onChangeText={setnewPassword}
                        secureTextEntry={true} />
                        
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 90, marginBottom: 10 }}>Confirm New Password</Text>
                    </View>
                    <TextInput style={styles.passwordText}
                        placeholder='Confirm New Password'
                        value={confirmPassword}
                        onChangeText={setconfirmPassword}
                        secureTextEntry={true} />
                </View>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.button}
                        onPress={handleResetPassword}>
                        <Text style={styles.press}>Login new password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default ResetPassword

const styles = StyleSheet.create({
    secondContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    newPassword: {
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
    },
    passwordText: {
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
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
        paddingRight: 50,
        paddingLeft: 50,
    },
    press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 0,
        fontSize: 20,
    },
})