import { StyleSheet, Text, View ,TextInput, TouchableOpacity, Pressable} from 'react-native'
import React, { useState ,useEffect}from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Server from '@/constants/server'
import axios from 'axios'
import { Alert } from "react-native";
const EditForm = ({  refreshTodos }) => {
    const navigation=useNavigation()
    const route = useRoute()
    const { todoId, userId } = route.params || {}; // ✅ Get todoId safely

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");

//   const handleEdit = async () => {
//     try {
//       const token = await AsyncStorage.getItem("authToken");
  
//       if (!token) {
//         Alert.alert("Error", "Token is missing!");
//         return;
//       }
  
//       console.log("Updating To-Do with ID:", todoId);
  
//       const response = await axios.put(`${Server.serverTodos}/update-todo/${todoId}`, {
//         title: title, 
//         description:description, 
//         completed:true,

//         headers: { Authorization: `Bearer ${token}` },
//       });
  
//       if (response.data.status === "success") {
//         Alert.alert("Success", "To-Do updated successfully!");
    
//         navigation.navigate('Dashboard');
//       } else {
//         Alert.alert("Error", response.data.message || "Failed to delete to-do");
//       }
//     } catch (error) {
//       console.error("Update Error:", error.response?.data || error.message);
//       Alert.alert("Error", "Failed to update the to-do.");
//     }
//   };

  const handleEdit = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
  
      if (!token) {
        Alert.alert("Error", "Token is missing!");
        return;
      }
  
      console.log("Deleting To-Do with ID:", todoId);
  
      const response = await axios.put(`${Server.serverTodos}/update-todo/${todoId}`,{
        title: title, 
        description:description, 
        completed:true,
        
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.data.message === "To-Do updated") {
        Alert.alert("Success", "To-Do updated successfully!");
        navigation.navigate('Dashboard');
      } else {
        Alert.alert("Error", response.data.message || "Failed to delete to-do");
      }
    } catch (error) {
      console.error("Delete Error:", error.response?.data || error.message);
      Alert.alert("Error", "Failed to delete the to-do.");
    }
  };
  
  
  const fetchSingleTodos = async () => {
  
    try {
      const token =  await AsyncStorage.getItem("authToken")

      if(!token){
        alert("Token is absent")
      }
        const response = await axios.get(`${Server.serverTodos}/getsingletodos/${todoId}`, {
          headers:{
            "Authorization":`Bearer ${token}`
          }
        });
  
        // Accessing the "status" field from response.data
        if (response.data.status === "success") {
          setAllTodos(response.data.todo)

          const todoTitle = response.data.todo.title
          const todoDescription = response.data.todo.description

          setNewTitle(todoTitle)
          setNewDescription(todoDescription)

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


useEffect(() => {
fetchSingleTodos();
},[])  ;  



  return (
    <View style={{ backgroundColor: "white", flex:1}}>
             <View style={styles.formContainer}>
                          <Text style={styles.add}>Task Title</Text>
                           <TextInput style={styles.Task}
                            multiline
                           placeholder='Finish React Native UI'
                           value={title} 
                 onChangeText={setNewTitle} />
                       </View>
       <View style={styles.formContainerTwo}>
                      <Text style={styles.add}>Task Description</Text>
                       <TextInput style={styles.Task}
                       multiline
                       placeholder='Design and implement the main UI components'
                       value={description} 
                       onChangeText={setNewDescription}/>
                   </View>
      
                    <View style={styles.thirdContainer}>
                                       <View style={styles.register}>
                                           <TouchableOpacity style={styles.button}
                                              onPress={handleEdit}>
                                               <Text style={styles.press}>Edit</Text>
                                           </TouchableOpacity>
                                       </View>
    </View>
    </View>
  )
}

export default EditForm

const styles = StyleSheet.create({

    formContainer:{
        justifyContent: 'center',
        alignContent: 'center',
    },
    add:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
        textAlign:'center',
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
        //marginLeft: -30,
       
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