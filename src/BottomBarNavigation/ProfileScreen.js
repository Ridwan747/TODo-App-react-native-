import { StyleSheet, Text, View,Pressable, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import SetLogo from 'react-native-vector-icons/Ionicons'
import GoLogo from 'react-native-vector-icons/AntDesign'
import KeyLogo from 'react-native-vector-icons/MaterialCommunityIcons'
import CosLogo from 'react-native-vector-icons/AntDesign'
import OutLogo from 'react-native-vector-icons/Feather'
import AddLogo from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import BackLogo from 'react-native-vector-icons/AntDesign'
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const navigation=useNavigation()
    const [profileImage, setProfileImage] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
    // Function to load user data
    
    useEffect(() => {
      const getUserData = async () => {
          try {
              const storedName = await AsyncStorage.getItem("userName");
              const storedEmail = await AsyncStorage.getItem("userEmail");

              setUserName(storedName || "User Name");
              setUserEmail(storedEmail || "example@email.com");

              console.log("Retrieved userName:", storedName);
              console.log("Retrieved userEmail:", storedEmail);
          } catch (error) {
              console.error("Error loading user data:", error);
          }
      };
      getUserData();
  }, []);
    
  
  


  useEffect(() => {
    const getUserData = async () => {
        try {
            const storedUserId = await AsyncStorage.getItem("userId");
            if (storedUserId) {
                setUserId(storedUserId);

                // Retrieve the correct profile image for this user
                const storedImage = await AsyncStorage.getItem(`profileImage_${storedUserId}`);
                if (storedImage) {
                    setProfileImage(storedImage);
                }
            }
        } catch (error) {
            console.error("Error loading profile data:", error);
        }
    };
    getUserData();
}, []);



const pickImage = async () => {
    if (!userId) {
        alert("User ID is missing. Please log in again.");
        return;
    }

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Permission to access gallery is required!');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    if (!result.canceled && result.assets[0]?.uri) {
        const imageUri = result.assets[0].uri;
        setProfileImage(imageUri);
        await AsyncStorage.setItem(`profileImage_${userId}`, imageUri);
        console.log("Profile image saved:", imageUri);
    } else {
        console.log("Image selection canceled");
    }
};

// const handleLogout = async () => {
//   await AsyncStorage.removeItem("authToken");
//   await AsyncStorage.removeItem("userId");
//   await AsyncStorage.removeItem("userName");
  
//   navigation.replace("Login"); // Redirect to Login screen
// };
const handleLogout = async () => {
  await AsyncStorage.removeItem(); // Clears all stored items
  navigation.replace("Login"); // Redirect to login screen
};

  return (
    <View style={{backgroundColor:'white', flex:1}}>
    <View style={styles.imageView}>
   
             <View style={styles.Backlogo}> 
             <Pressable
        onPress={()=>navigation.goBack()}>
             <BackLogo
             name="leftcircle"
             size={20}
            style={{marginTop:-20, marginLeft:-150,width:150,height:55, color:'gray'}}
            />
            </Pressable>
        </View>
        
                         </View>
                        
                       
     <View style={{}}>
     <View style={{marginTop:-40, marginLeft:50,marginRight:60,  }}>
        <Text style={{color:'#FAA885',fontSize:25,fontWeight:'bold',textAlign:'center'}}>Profile</Text>
        </View>
        <View style={styles.imageView}>
           
            <Image
          source={profileImage ? { uri: profileImage } : require('../../assets/images/pro.png')}
          style={styles.profileImage}
        />
         <Pressable onPress={pickImage} style={styles.addIcon}>
          <AddLogo name="add-a-photo" size={25} color="#FAA885" />
        </Pressable>
        </View>
        <View style={{marginTop:10, marginLeft:50,marginRight:60,  }}>
        <Text style={{color:'',fontSize:25,fontWeight:'bold',textAlign:'center'}}> {userName || "User Name"}</Text>
        </View>
        
        <View style={{marginTop:5, marginLeft:50,marginRight:60,}}>
        <Text style={{color:'gray',textAlign:'center', }}>{userEmail || "example@email.com"}</Text>
        </View>
        <View style={styles.preference}>
           <View style={styles.Setlogo}> 
             <SetLogo
             name="settings-outline"
             size={30}
            style={{marginLeft:30, marginTop:40, color:'#FAA885'}}
            />
        </View>
        <Pressable
        onPress={()=>navigation.navigate('Preference')}>
        <View style={{marginTop:-27, marginLeft:-30,marginRight:60,  }}>
        
        <Text style={{color:'',fontSize:20,fontWeight:'',textAlign:'center', fontWeight: "bold",}}>Preferences</Text>
        
        </View>
        <View style={styles.Gologo}> 
             <GoLogo
             name="right"
             size={20}
            style={{marginLeft:300, marginTop:-20, color:'gray'}}
            />
        </View>
        </Pressable>
        <View style={styles.Keylogo}> 
             <KeyLogo
             name="shield-key-outline"
             size={30}
            style={{marginLeft:30, marginTop:40, color:'#FAA885'}}
            />
        </View>
        <View style={{marginTop:-30, marginLeft:-20,marginRight:60,  }}>
        <Text style={{color:'',fontSize:20,fontWeight:'',textAlign:'center', fontWeight: "bold",}}>Account Security</Text>
        </View>
        <View style={styles.Gologo}> 
             <GoLogo
             name="right"
             size={20}
            style={{marginLeft:300, marginTop:-20, color:'gray'}}
            />
        </View>

        <View style={styles.Coslogo}> 
             <CosLogo
             name="customerservice"
             size={30}
            style={{marginLeft:30, marginTop:40, color:'#FAA885'}}
            />
        </View>
        <View style={{marginTop:-30, marginLeft:-10,marginRight:60,  }}>
        <Text style={{color:'',fontSize:20,fontWeight:'',textAlign:'center', fontWeight: "bold",}}>customer Support</Text>
        </View>
        <View style={styles.Gologo}> 
             <GoLogo
             name="right"
             size={20}
            style={{marginLeft:300, marginTop:-20, color:'gray'}}
            />
        </View>

        <View style={styles.Outlogo}> 
             <OutLogo
             name="log-out"
             size={30}
            style={{marginLeft:35, marginTop:40, color:'#FAA885'}}
            />
        </View>
        <Pressable>
        
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
       </TouchableOpacity>

        </Pressable>
        </View>
        
     </View>
   </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    imageView:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-around'
      },
      backLogo: {
        marginLeft: -150,
        color: 'gray',
      },
      
      profileImage: {
        width: 102,
        height: 100,
        borderRadius: 50,
      },
      addIcon: {
        position: 'absolute',
        right: 100,
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
        
      },
      logoutButton: {
        
        borderRadius: 5,
        marginTop: 20,
        marginTop:-30, 
        marginLeft:-70,
        marginRight:60,
      },
      logoutText: {
        color: "",
        fontWeight: "bold",
        fontSize:20,
        textAlign:'center',

      }
      
})