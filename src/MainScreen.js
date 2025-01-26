import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from '@react-navigation/native';
const MainScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <View style={styles.secondContainer}>

        <Image
          source={require("../assets/images/shape.png")}
          style={{ width: 250, height: 250, marginBottom: 500, marginRight: 110 }} />

      </View>
      <View style={styles.thirdContainer}>
        <Image
          source={require("../assets/images/shape2.png")}
          style={{ width: 150, height: 150, }} />

      </View>
      <View style={styles.textContainer}>
        <Text style={styles.firstText}>Get things done with TODo</Text>

      </View>
      <View style={styles.secondTextContainer}>
        <Text style={styles.secondText}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Amt.</Text>
      </View>
     
      <TouchableOpacity style={styles.registerView}
      onPress={()=>navigation.navigate("Registration")}>
      
        <Text style={styles.registerText}>Get Started</Text>
      </TouchableOpacity>
      


    </View>
  )
}

export default MainScreen

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
  thirdContainer: {
    flex: 1,

    marginTop: -10,



  },
  textContainer: {

    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 20,

  },
  firstText: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondTextContainer: {

    marginBottom: 100,
    marginRight: 70,
    marginLeft: 70,

  },
  secondText: {
    paddingBottom: 50,
    textAlign: 'center',

  },
  registerView: {

    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    marginLeft: 3,
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 70,
    borderRadius: 5,
    backgroundColor: '#0070C0',
    marginBottom: 70,
    borderRadius: 5,
    backgroundColor: '#FAA885',
    length: 50
  },
  registerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

  },

})