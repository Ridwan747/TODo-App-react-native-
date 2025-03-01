import { StyleSheet, Text, View, TouchableOpacity,Pressable, Modal, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import Server from '@/constants/server';
import EditDeleteModal from './EditDeleteModal';
//const server = "http://192.168.156.189:5000/api/todos";

const EditButton = ({todoId, }) => {
    const navigation=useNavigation()

    const [allTodos, setAllTodos] = useState([])
    
  

    useEffect(() => {
      const fetchTodos = async () => {
        try {
          const token = await AsyncStorage.getItem("authToken");
    
          if (!token) {
            alert("Token is absent");
            return; // Exit the function early if no token
          }
    
          const response = await axios.get(`${Server.serverTodos}/getusertodos`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
    
          // Check if response was successful
          if (response.data.status === "success") {
            const todos = response.data.todos;
            setAllTodos(todos); // Store todos in state
    
            // Extracting and logging IDs
            const todoIds = todos.map(todo=> todo.id);
            console.log("Todo IDs:", todoIds); // Logs an array of IDs
    
            // Example: Logging the first todo's ID if available
            if (todos.length > 0) {
              console.log("First Todo ID:", todos[0].id);
            }
    
          } else {
            console.log("Error querying Todos", response.data.message);
          }
        } catch (err) {
          if (err.response) {
            console.log("Error:", err.response.data);
          } else {
            console.log("Network error:", err.message);
          }
        }
      };
    
      fetchTodos();
    }, []);

    const handlePress = (todoId) => {
      navigation.navigate('deleteEdit', { todoId }); // Pass todoId as a param
    };
    
    const handleEditPress = (todoId) => {
      navigation.navigate('EditForm', { todoId }); // Pass todoId as a param
    };
    
  return (
    
    <View >
       <View style={{flexDirection:'row'}}>
     
     <TouchableOpacity style={{padding:5 ,marginRight:20,  backgroundColor: '#FAA885',borderRadius: 10,paddingRight:5,paddingLeft: 5,marginTop:5}}
     onPress={()=> handleEditPress(todoId)}>
         <Text>Edit</Text>
     </TouchableOpacity>
    
    <TouchableOpacity style={{padding:5,backgroundColor: '#FAA885',borderRadius: 10,paddingRight:5,paddingLeft:5,marginTop:5}}
    onPress={()=> handlePress(todoId)}>
        <Text>Delete</Text>

    </TouchableOpacity>
    



   
 </View>
 
 {/* <Modal
       transparent
       visible={modalVisible}
       onRequestClose={()=>setModalVisible(false)}
       >
         <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
           <Text style={styles.Delete}>delete item?</Text>
           <View style={styles.choseView}>
         <Pressable onPress={handleDeleteButton}>
         
         <Text style={styles.Yes}>Yes</Text>
         </Pressable>
         
         <Pressable onPress={()=>setModalVisible(false)}>
         <Text style={styles.No}>No</Text>
         </Pressable>
         </View>
           </View>
         </View>
         
       </Modal> */}
    </View>
  )
}


export default EditButton

const styles = StyleSheet.create({
  modalContainer:{
   backgroundColor:'white',
    marginTop:'70%'
  
  },
  modalContent:{
    width:300,
    height:200
  },
  choseView:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    marginLeft:20

  },
  Delete:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    color:'#FAA885',
    marginLeft:50
  },
  Yes:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FAA885',
    marginLeft:20

  },
  No:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FAA885',
    marginLeft:20
  }
})