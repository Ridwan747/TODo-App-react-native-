import { StyleSheet, Text, View, Image, ImageBackground,TextInput,TouchableOpacity, Pressable  } from 'react-native'
import React from 'react'
import UseLogo from 'react-native-vector-icons/AntDesign'
import MailLogo from 'react-native-vector-icons/Feather'
import PassLogo from 'react-native-vector-icons/MaterialIcons'
import PenLogo from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import BackLogo from 'react-native-vector-icons/AntDesign'
const EditInformation = () => {
    const navigation=useNavigation()
  return (
    <View style={{backgroundColor:'white', flex:1}}>
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
                     <View style={{marginTop:-40, marginLeft:100,marginRight:20,  }}>
                     
                     <Text style={{color:'#FAA885',fontSize:25,fontWeight:'',}}>Edit Information</Text>
                     </View>
                  <View style={{marginTop:50}}>

                  <View style={styles.Log}>
                  <TextInput style={styles.name}
                        placeholder='Full Name'/>
                        <View style={styles.Uselogo}> 
                         <UseLogo
                        name="user"
                        size={20}
                        style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        <View style={styles.Penlogo}> 
                         <PenLogo
                        name="pencil-square-o"
                        size={20}
                        style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        </View>

                     <View style={styles.LogTwo}>
                        <TextInput style={styles.email}
                        placeholder='Email'/>
                        <View style={styles.Maillogo}> 
                         <MailLogo
                        name="mail"
                        size={20}
                        style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        <View style={styles.Penlogo}> 
                         <PenLogo
                        name="pencil-square-o"
                        size={20}
                        style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        </View>
                        <View style={styles.LogThree}>
                        <TextInput style={styles.password}
                        placeholder='Password'
                        secureTextEntry={true}/>
                        <View style={styles.Passlogo}> 
                         <PassLogo
                        name="password"
                        size={20}
                        style={{marginLeft:60, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        <View style={styles.Penlogo}> 
                         <PenLogo
                        name="pencil-square-o"
                        size={20}
                        style={{marginLeft:270, marginTop:-53, color:'#FAA885'}}
                        />
                        </View>
                        </View>
                        <View style={styles.Save}>
                                <TouchableOpacity style={styles.button}
                                onPress={()=>navigation.navigate('Preference')}>
                                  <Text style={styles.press}>SAVE CHANGES</Text>
                                </TouchableOpacity>
                              </View>
                             
                        </View>
                        </View>
  )
}

export default EditInformation

const styles = StyleSheet.create({
    imageView:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-around'
      },

      Log:{
        marginTop:60
       },
       name: {
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

      LogTwo:{
       marginTop:5
      },
      email: {
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
        marginTop:2
      },

      Save: {
        marginTop: 30
      },
      button: {
        marginRight: 20,
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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