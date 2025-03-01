// import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
// import React, { useState } from 'react'
// import { sortRoutes } from "expo-router/build/sortRoutes";
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Server from '@/constants/server';

// //const server = "http://192.168.156.189:5000/api/auth";

// const SendCode = ({route}) => {
//     const navigation = useNavigation()

//     //const [email, setEmail] = useState();
//      const [email, setemail] = useState();
//      const [code, setcode] = useState();
     
//     const handleSendCode = async () => {
  
//       const token =  await AsyncStorage.getItem("userToken")
    
     
//       if (!code) {
//         alert("Please enter the verification code");
//         return;
//       }
    
     
    
//     console.log("Email", route.params.userEmail)
//         try {
//           const response = await axios.post(`${Server.serverAuth}/verifyResetCode`, {
//             code: code,
//             email: route.params.userEmail,
           
//           })
    
//           // Accessing the "status" field from response.data
//           if (response.data.status === "success") {
//             console.log("code sent successfully");
//             console.log(response.data); // Prints the full response data
    
//             navigation.navigate('ResetPassword',{userEmail:route.params.userEmail})
//           } else {
//             console.log("code failed:", response.data.message);
//           }
//        } catch (err) {
//           if (err.response) {
            
//             console.log("Error:", err.response.data);
           
    
//           } else {
//             console.log("Network error:", err.message);
//           }
//         }
//       };
//   return (
//     <View style={styles.container}>
//         <View style={styles.secondContainer}>
//             <View>
//              <Text style={styles.text}>Enter verification Code!</Text>
//              </View>
//         <View style={styles.verificationInput}>
//             <TextInput style={styles.oneText}
//             placeholder='2'
//             keyboardType='number-pad'
//             value={code}
//             onChangeText={setcode}
//             />
//              {/* <TextInput style={styles.twoText}
//             placeholder='2' 
//             keyboardType='number-pad'/>
//              <TextInput style={styles.threeText}
//             placeholder='2' 
//             keyboardType='number-pad'/>
//              <TextInput style={styles.fourText}
//             placeholder='2' 
//             keyboardType='number-pad'/>
//             <TextInput style={styles.fiveText}
//             placeholder='2' 
//             keyboardType='number-pad'/>
//             <TextInput style={styles.sixText}
//             placeholder='2' 
//             keyboardType='number-pad'/> */}
//         </View>
//         <Text>{route.params.userEmail}</Text>
//          <View style={styles.register}>
//                         <TouchableOpacity style={styles.button}
//                         onPress={handleSendCode}>
//                           <Text style={styles.press}>Verify your code</Text>
//                         </TouchableOpacity>
//                         </View>
//         </View>
//     </View>
//   )
// }

// export default SendCode

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     secondContainer:{
        
//     },
//     verificationInput:{
//         flexDirection:'row',
//         justifyContent:'space-around',
//         alignItems:'center',
//         marginTop: 30,
//         marginRight: 30,
//         marginLeft:20,
//         borderRadius:10,
//         borderWidth:1,
//         height:80,
//         paddingRight:10,
//         paddingLeft:10
        
    
//     },
//     oneText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16,
        
//     },

//     twoText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16
        
//     },

//     threeText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16
//     },
    
//     fourText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16
        
//     },
//     fiveText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16
        
//     },
//     sixText:{
//         color:'black',
//         backgroundColor:'white',
//         borderColor:'black', 
//         borderRadius:10, 
//         borderWidth:1, 
//         width:40, 
//         paddingLeft:16
        
//     },
//     text:{
//         fontSize: 20,
//         marginBottom: 20,
//         fontWeight: 'bold',
//         marginLeft:5,
//         textAlign:'center'

//     },
//     register: {
//         marginTop: 50,
//         marginRight:-70,
//         marginLeft: -20,
        
//     },
//     button: {
//         backgroundColor: '#FAA885',
//         borderRadius: 25,
//         width: '80%',
//         padding: 12,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     press: {
//         color: 'white',
//         fontWeight: 'bold',
//         marginLeft: 0,
//         fontSize: 15,
//       },

// })



import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Server from '@/constants/server';

const SendCode = ({ route }) => {
  const navigation = useNavigation();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return; // Prevent multiple characters

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1].focus(); // Move to the next box
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus(); // Move to the previous box
    }
  };

  const handleSendCode = async () => {
    const fullCode = code.join(""); // Combine all digits

    if (fullCode.length !== 6) {
      alert("Please enter a 6-digit code");
      return;
    }

    try {
      const response = await axios.post(`${Server.serverAuth}/verifyResetCode`, {
        code: fullCode,
        email: route.params.userEmail,
      });

      if (response.data.status === "success") {
        console.log("Code verified successfully");
        navigation.navigate('ResetPassword', { userEmail: route.params.userEmail });
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("Error verifying code:", err.response?.data || err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Verification Code</Text>
      <View style={styles.verificationInput}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            placeholder="•"
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            ref={(ref) => (inputs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.press}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  verificationInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FAA885',
    borderRadius: 25,
    width: '80%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
