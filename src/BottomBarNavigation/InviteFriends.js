import { StyleSheet, Text, View ,Pressable, TouchableOpacity, TextInput, Image, ImageBackground, Clipboard,} from 'react-native'
import React from 'react'
import CopyLogo from 'react-native-vector-icons/FontAwesome5'
import {useState} from 'react';
import BackLogo from 'react-native-vector-icons/AntDesign'
    
  
const InviteFriends = () => {
    const [copiedText, setCopiedText] = useState('');
  
    const copyToClipboard = () => {
      Clipboard.setString('InnovixAiPartnerMR');
    };
  
    const fetchCopiedText = async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    };
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
                                     <View style={{marginTop:-40, marginLeft:80,marginRight:60,  }}>
                                                             <Text style={{color:'#FAA885',fontSize:25,fontWeight:'',textAlign:'center'}}>Invite Friends</Text>
                                                             </View>
                 <View style={{}}>
                 
                    <View style={styles.imageView}>
                       <Image source={require('../../assets/images/tion.png')} 
                       style={{marginTop:50, marginLeft:20,backgroundColor:"#FAA885",borderRadius:10 }} />
                    </View>
                    <View style={{marginTop:20, marginLeft:60,marginRight:60,  }}>
                    
                    <Text style={{color:'#FAA885',fontSize:25,fontWeight:'bold',textAlign:'center'}}>Refer A Friend</Text>
                    </View>
                    
                    <View style={{marginTop:20, marginLeft:60,marginRight:60,}}>
                    <Text style={{color:'gray',textAlign:'center', }}>Share Your Promo Code & Get $3 For Each Friend</Text>
                    </View>
                   <View style={styles.Copy}>
                           <TouchableOpacity style={styles.button}
                           onPress={() => copyToClipboard()}>
                             <Text style={styles.press}>TodoPartnerMR</Text>
                             
                           </TouchableOpacity>
                           <View style={styles.Copylogo}> 
                                                      <CopyLogo
                                                     name="copy"
                                                     size={20}
                                                     style={{marginLeft:270, marginTop:-35, color:'#FAA885'}}
                                                     />
                                                     </View>
                         </View>
                 </View>
               </View>
  )
}

export default InviteFriends

const styles = StyleSheet.create({
    textInput:{
        color:'white',
        marginTop:100
    },
    
   
    imageView:{
      flexDirection:'row',
      marginTop:40,
      justifyContent:'space-around'
    },
    Copy: {
        marginTop: 50
      },
      button: {
        marginRight: 40,
        marginLeft: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        borderWidth:2,
        borderColor:'#FAA885',
        paddingRight: 50,
        paddingLeft: 50,
        backgroundColor: "",
    
      },
      press: {
        color: 'black',
        marginLeft: -90,
        fontSize: 15,
      },
})