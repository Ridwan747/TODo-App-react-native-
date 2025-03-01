import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Server from '@/constants/server';

//const server = "http://192.168.156.189:5000/api/auth"


const Registration = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()  

   const navigation = useNavigation()

   const handleRegister = async () => {
    try {
      const response = await axios.post(`${Server.serverAuth}/register`, {
        name: name,
        email: email,
        password: password
      });
  
      // Accessing the "status" field from response.data
      if (response.data.status === "success") {
        const token = response.data.token

        await AsyncStorage.setItem("userToken",token)
        console.log("Token:", token)
        console.log("Registered successfully");
        console.log(response.data); // Prints the full response data
        navigation.navigate('Login')
      } else {
        console.log("Registration failed:", response.data.message);
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

      <View style={styles.secondContainer}>

        <Image
          source={require("../../assets/images/shape.png")}
          style={{ width: 250, height: 250, marginBottom: 500, marginRight: 110 }} />
      </View>

      <View style={styles.MasterView}>
        <View style={styles.textView}>
          <Text style={styles.firstText}>Welcome onboard!</Text>
          <Text style={styles.secondText}>Let’s help you meet your tasks</Text>
        </View>
        <View style={styles.thirdContainer}>
          <TextInput style={styles.nameText}
            placeholder='Enter your full name' 
            value={name}
            onChangeText={setName}
            />
          <TextInput style={styles.emailText}
            placeholder='Enter your email'
            value={email}
            onChangeText={setEmail}
             />
          <TextInput style={styles.passwordText}
            placeholder='Enter password' 
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
          <TextInput style={styles.confirmPasswordText}
            placeholder='Confirm password'
            secureTextEntry={true} />
        </View>


      </View>
      <View style={styles.register}>
        <TouchableOpacity style={styles.button}
          onPress={handleRegister}>
          <Text style={styles.press}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
        <Text style={styles.newText}>Already have an account?</Text>
        <Pressable
        onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.loginText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5f0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondContainer: {
    flex: 1,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },

  firstText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  thirdContainer: {
    marginBottom: 40,
    marginTop: 30,
    marginLeft: -40,
    marginRight: -40,

  },
  nameText: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 25,
    backgroundColor: 'white',
  },
  emailText: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 25,
    backgroundColor: 'white',

  },
  passwordText: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 25,
    backgroundColor: 'white',
  },
  confirmPasswordText: {
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 25,
    backgroundColor: 'white',
  },
  register: {
    marginBottom: 40,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 1,
    paddingRight: 100,
    paddingLeft: 100,
    backgroundColor: "#FAA885",

  },
  press: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 0,
    fontSize: 20,
  },
  text: {
    marginTop: 9,
    justifyContent: "center",
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 15,

    fontWeight: 'bold',

  },
  foot: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    marginRight: 15,
  },

  loginText: {
    marginLeft: 10,
    color: '#B83F0B',
    fontWeight: 'bold',
  },

})

