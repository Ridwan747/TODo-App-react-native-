import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, Pressable, ImageBackground, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddTask = () => {
    const navigation=useNavigation()
  return (
     <View style={{flex:1}}>
         <ImageBackground
                              source={require("../../assets/images/24.jpg")}
                              style={{ width: 417, height: 726,  marginRight: 110 }} >
                    <View style={{ marginBottom:20}}>
                            <Image
                              source={require("../../assets/images/shape.png")}
                              style={{ width: 250, height: 250, marginBottom: -500, marginRight: 110 }} />
                          </View>
                <View style={styles.secondContainer}>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate("Form")}>
                            <Text style={styles.press}>Add Single Task</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.register}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => navigation.navigate("")}>
                            <Text style={styles.press}>Add Multiple Task</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </ImageBackground>
            </View>
    
  )
}

export default AddTask

const styles = StyleSheet.create({
    secondContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        marginRight:50
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
        paddingRight: 50,
        paddingLeft: 50,
    },
    press: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 0,
        fontSize: 20,
    },
})