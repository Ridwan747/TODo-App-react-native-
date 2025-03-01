import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground,} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BackLogo from 'react-native-vector-icons/AntDesign'

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Server from '@/constants/server';

//const server = "http://192.168.156.189:5000/api/todos";
const Form = ({ route}) => {
      const navigation=useNavigation()
      //const [todos, setTodos] = useState();
      const [title, setTitle] = useState();
      const [description, setDescription] = useState();
     
     const handleForm = async () => {
     
        try {

          const token =  await AsyncStorage.getItem("authToken")

          if(!token){
            alert("Token is absent")
          }
            const response = await axios.post(`${Server.serverTodos}/create-todo`, {
              title: title,
              description: description,
            },{
              headers:{
                "Authorization":`Bearer ${token}`
              }
            });
      
            // Accessing the "status" field from response.data
            if (response.data.status === "created") {
              console.log("Task Added successfully");
              console.log(response.data); // Prints the full response data
      
            navigation.navigate('Dashboard')
            } else {
              console.log("Task failed To Be Added:", response.data.message);
            }
          } catch (err) {
            if (err.response) {
             
              console.log("Error:", err.response.data);
            
            } else {
              console.log("Network error:", err.message);
            }
          }
        
    }     

  return (
     <View style={{ backgroundColor: "white", flex:1}}>
          <View style={styles.secondContainer}>
            
          <View style={styles.Backlogo}>
              <Pressable onPress={() => navigation.goBack()}>
                <BackLogo
                  name="arrowleft"
                  size={20}
                  style={{
                  marginTop: 10,
                  marginLeft:10
                  }}/>
                  </Pressable>
              </View>
             
             <View style={styles.formContainer}>
                <Text style={styles.add}>Add Task Title</Text>
                 <TextInput style={styles.Task}
                  multiline
                 placeholder='Finish React Native UI'
                 value={title} 
                 onChangeText={setTitle} />
             </View>

             <View style={styles.formContainerTwo}>
                <Text style={styles.addTwo}>Add Description</Text>
                 <TextInput style={styles.TaskTwo}
                 multiline
                 placeholder='Design and implement the main UI components'
                 value={description} 
                onChangeText={setDescription} />
             </View>

              <View style={styles.thirdContainer}>
                                 <View style={styles.register}>
                                     <TouchableOpacity style={styles.button}
                                         onPress={handleForm}>
                                         <Text style={styles.press}>Add Task</Text>
                                     </TouchableOpacity>
                                 </View>
           </View>
          </View>
          </View>
  )
};

export default Form

const styles = StyleSheet.create({
    formContainer:{
        justifyContent: 'center',
        alignContent: 'center',
    },

   add:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 90,
    color:"#FAA885"
   },
   Task:{
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    width: '90%',
    height:100,
    padding: 12,
    marginBottom: 20,
    marginLeft: 16,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 40,
    color: '#424242',
    fontSize: 18,
   },

   addTwo:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 90,
    color:"#FAA885"
   },

   TaskTwo:{
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    width: '90%',
    height:200,
    padding: 12,
    marginBottom: 20,
    marginLeft: 16,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 100,
    color: '#424242',
    fontSize: 18,
   },


    thirdContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight:-10
    },
   

    register: {
        marginTop: 30,
    },
    button: {
        backgroundColor: '#FAA885',
        borderRadius: 25,
        width: '90%',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 60,
        paddingLeft: 60,
    },
    press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 0,
        fontSize: 20,
    },
})