import { StyleSheet, Text, View ,Image, ImageBackground,TextInput,TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import MailLogo from 'react-native-vector-icons/Fontisto'
import PassLogo from 'react-native-vector-icons/MaterialIcons'
import EyeLogo from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import BackLogo from 'react-native-vector-icons/AntDesign'
const ChangePassword = () => {
    const navigation=useNavigation()
  return (
    <View style={{backgroundColor:'white', flex:1}}>
    <View style={{}}>
    
       <View style={styles.imageView}>
       <Pressable
        onPress={()=>navigation.goBack()}>
       <View style={styles.Backlogo}> 
             <BackLogo
             name="arrowleft"
             size={20}
            style={{marginTop:-20, marginLeft:-150,width:100,height:55, color:'gray'}}
            />
        </View>
        </Pressable>
       </View>
       
       <View style={{marginTop:50, marginLeft:20,marginRight:20,  }}>
       
       <Text style={{color:'#FAA885',fontSize:25,fontWeight:'bold',}}>Change Password</Text>
       </View>
       <View style={styles.Log}>
          <TextInput style={styles.password}
          placeholder='Old Password'
          secureTextEntry={true}/>
          <View style={styles.Passlogo}> 
           <PassLogo
          name="password"
          size={20}
          style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          <View style={styles.Eyelogo}> 
           <EyeLogo
          name="eye-off"
          size={20}
          style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          </View>

       <View style={styles.LogTwo}>
          <TextInput style={styles.password}
          placeholder='New Password'
          secureTextEntry={true}/>
          <View style={styles.Passlogo}> 
           <PassLogo
          name="password"
          size={20}
          style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          <View style={styles.Eyelogo}> 
           <EyeLogo
          name="eye-off"
          size={20}
          style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          </View>
          <View style={styles.LogThree}>
          <TextInput style={styles.password}
          placeholder='Confirm Password'
          secureTextEntry={true}/>
          <View style={styles.Passlogo}> 
           <PassLogo
          name="password"
          size={20}
          style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          <View style={styles.Eyelogo}> 
           <EyeLogo
          name="eye-off"
          size={20}
          style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
          />
          </View>
          </View>
          <View style={styles.Reset}>
                  <TouchableOpacity style={styles.button}
                  onPress={()=>navigation.navigate('HomePage')}>
                    <Text style={styles.press}>Change</Text>
                  </TouchableOpacity>
                </View>
               
          </View>
          </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    imageView:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-around'
      },
      Log:{
        marginTop:50
       },
      
      LogTwo:{
       marginTop:10
      },
     
      password: {
        marginBottom: 20,
        borderRadius: 10,
        padding: 15,
        paddingLeft: 50,
        backgroundColor: 'white',
        color:'black',
        marginLeft: 40,
        marginRight:40,
        fontSize: 15,
        borderWidth:1
       
      },
      LogThree:{
        marginTop:10
      },

      Reset: {
        marginTop: 50
      },
      button: {
        marginRight: 40,
        marginLeft: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        paddingRight: 100,
        paddingLeft: 100,
        backgroundColor: "#FAA885",
    
      },
      press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 0,
        fontSize: 15,
      },
})