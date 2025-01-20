import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from "expo-router";


const Login = () => {
  const navigation = useNavigation()
  return (
    <ScrollView 
    contentContainerStyle={styles.container}
    >

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
          <Image
            source={require("../../assets/images/shape3.png")}
            style={{ width: 150, height: 150, }} />

        </View>
        <View style={styles.lastContainer}>

          <TextInput style={styles.emailText}
            placeholder='Enter your email' />
          <TextInput style={styles.passwordText}
            placeholder='Enter password' 
            secureTextEntry={true}/>
            
          <Text style={styles.lastText}
          onPress={()=>navigation.navigate("ForgetPassword")}>Forget Password</Text>
        </View>

      </View>
      <View style={styles.register}>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate("Dashboard")}>
          <Text style={styles.press}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
        <Text style={styles.newText}>Already have an account?</Text>
        <Pressable
        onPress={()=>navigation.navigate("Registration")}>
          <Text style={styles.loginText}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5f0',
    alignItems: 'center',
    justifyContent: 'center',

  },
  MasterView: {
    marginBottom: 25
  },

  secondContainer: {
    flex: 1,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  firstText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,

  },

  thirdContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  lastContainer: {
    marginBottom: 10,
    marginTop: 30,
    marginLeft: -40,
    marginRight: -40,
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
  lastText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B83F0B',
    marginLeft: 75,
    marginRight: 80,

  },
  register: {
    marginBottom: 50,
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
    marginBottom: 25,
    marginRight: 15,
  },

  loginText: {
    marginLeft: 10,
    color: '#B83F0B',
    fontWeight: 'bold',
  },

})