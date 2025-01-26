import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ResetPassword = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#FAA885' }}>Enter New Password</Text>
                </View>
                <View style={{ marginTop: 90 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>New Password</Text>
                    </View>
                    <TextInput style={styles.newPassword}
                        placeholder='New Password'
                        secureTextEntry={true} />
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 90, marginBottom: 10 }}>Confirm New Password</Text>
                    </View>
                    <TextInput style={styles.passwordText}
                        placeholder='Confirm New Password'
                        secureTextEntry={true} />
                </View>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.press}>Login new password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default ResetPassword

const styles = StyleSheet.create({
    secondContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    newPassword: {
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
    },
    passwordText: {
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
    },

    register: {
        marginTop: 20,
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