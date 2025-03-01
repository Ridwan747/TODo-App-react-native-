import { StyleSheet, Text, View , TouchableOpacity,Pressable,Modal,modalVisible,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Server from '@/constants/server'
import axios from 'axios'
import { Alert } from "react-native";


const EditDeleteModal = ({  refreshTodos }) => {
  const navigation=useNavigation()
  const route = useRoute()

  const { todoId,userId } = route.params || {}; // ✅ Get todoId safely
  const [allTodos, setAllTodos] = useState([])
  
  const handleDelete = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
  
      if (!token) {
        Alert.alert("Error", "Token is missing!");
        return;
      }
  
      console.log("Deleting To-Do with ID:", todoId);
  
      const response = await axios.delete(`${Server.serverTodos}/delete-todo/${todoId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.data.status === "success") {
        Alert.alert("Success", "To-Do deleted successfully!");
    
        // ✅ Fetch updated todos from backend
        fetchTodos();  
        navigation.navigate('Dashboard');
      } else {
        Alert.alert("Error", response.data.message || "Failed to delete to-do");
      }
    } catch (error) {
      console.error("Delete Error:", error.response?.data || error.message);
      Alert.alert("Error", "Failed to delete the to-do.");
    }
  };
  
  const fetchTodos = async () => {
  
    try {
      const token =  await AsyncStorage.getItem("authToken")

      if(!token){
        alert("Token is absent")
      }
        const response = await axios.get(`${Server.serverTodos}/getusertodos`, {
          headers:{
            "Authorization":`Bearer ${token}`
          }
        });
  
        // Accessing the "status" field from response.data
        if (response.data.status === "success") {
          setAllTodos(response.data.todos)
          console.log("Created TOdos",response.data); // Prints the full response data
  
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
    
} 

 // State to manage the box's background color


useEffect(() => {
fetchTodos();
},[])  ;  



  return (
    
    <View style={styles.container}>
       <Text style={styles.Delete}>delete item?</Text>
       <View style={styles.choseView}>
       
     <TouchableOpacity style={{padding:5 ,marginRight:20,  backgroundColor: '#FAA885',borderRadius: 10,paddingRight:5,paddingLeft: 5,marginTop:5}}
     onPress={handleDelete}>
         <Text>Yes</Text>
         

     </TouchableOpacity>
     <TouchableOpacity style={{padding:5,backgroundColor: '#FAA885',borderRadius: 10,paddingRight:5,paddingLeft:5,marginTop:5}}
     onPress={()=> navigation.navigate("Dashboard")}>
         <Text>No</Text>
        
     </TouchableOpacity>
    
 </View>


  
    </View>
  
  )
}

export default EditDeleteModal

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
     marginTop:'70%',
     padding:20,
     borderRadius:20,
     width:'90%',
     marginLeft:'5%'
   },
  Delete:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    color:'#FAA885',
    marginLeft:-10
  },
  choseView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:20,
    marginLeft:-10
  },


 

}) 