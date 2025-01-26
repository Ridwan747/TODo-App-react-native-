import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from '@react-navigation/native';



const Dashboard = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>

      <View style={styles.secondContainer}>
        <Image
          source={require("../../assets/images/shape.png")}
          style={{ width: 370, height: 260, marginBottom: -150, backfaceVisibility: 'visible', backgroundColor: '#e1a388', }} />

      </View>

      <View style={styles.imageView}>

        <Image
          source={require("../../assets/images/image2.png")}
          style={{ width: 75, height: 75, marginLeft: 15, marginBottom: -2 }} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.firstText}>Welcome Oliva Grace</Text>

      </View>

      <View style={styles.greetText}>
        <Text style={styles.secondText}>Good Afternoon</Text>

      </View>

      <View style={styles.clockImage}>

        <Image
          source={require("../../assets/images/clock.png")}
          style={{ width: 110, height: 110, }} />
      </View>

      <View style={styles.Task}>
        <Text style={styles.taskText}>Tasks List</Text>
      </View>
      <View style={styles.dailyTaskView}>
        <Text style={styles.Text}>Daily Tasks</Text>
        <Pressable
        onPress={()=>navigation.navigate('AddTask')}>
        <Image
          source={require("../../assets/images/plus.png")}
          style={{ width: 24, height: 24, marginLeft: 290, marginBottom: -10, top: -20 }} />
          </Pressable>
        <View style={styles.listTaskView}>
          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ width: 10, height: 10, marginLeft: 15 }} />
          <Text style={styles.textOne}>Learn programming by 12am</Text>

          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ width: 10, height: 10, marginLeft: 15 }} />
          <Text style={styles.textTwo}>Learn how to cook by 1pm</Text>

          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ width: 10, height: 10, marginLeft: 15 }} />
          <Text style={styles.textThree}>Pick up the kid by 2pm</Text>

          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ width: 10, height: 10, marginLeft: 15 }} />
          <Text style={styles.textFour}>Have launch by 3pm</Text>

          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ width: 10, height: 10, marginLeft: 15, top: -9 }} />
          <Text style={styles.textFive}>Go visit mum by 4pm</Text>
        </View>
      </View>
    </View>
  )
}

export default Dashboard

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

  imageView: {
    marginBottom: 20,
  },
  textView: {
    marginBottom: 20,
  },
  firstText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: 'white',


  },
  greetText: {
    marginBottom: 50,
    marginLeft: 220,
  },

  secondText: {
    fontSize: 12,
    fontWeight: 'bold',

  },
  clockImage: {
    marginBottom: 15,
  },
  Task: {
    marginBottom: 20,
    marginRight: 260,
  },
  taskText: {
    fontWeight: 'bold',
  },
  dailyTaskView: {
    height: 200,
    width: 330,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 20
  },
  Text: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray'
  },
  textOne: {
    marginLeft: 35,
    marginBottom: -5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    top: -15,
  },
  textTwo: {
    marginLeft: 35,
    marginBottom: -5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    top: -15,
  },
  textThree: {
    marginLeft: 35,
    marginBottom: -5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    top: -15,
  },
  textFour: {
    marginLeft: 35,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    top: -15,
  },
  textFive: {
    marginLeft: 35,
    marginBottom: -5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    top: -25,
  },

})