import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainScreen from './src/MainScreen'
import Login from './src/Authentication/Login'
import Registration from './src/Authentication/Registration'
import Dashboard from './src/Dashboard'
import ForgetPassword from './src/Authentication/ForgetPassword'
import SendCode from './src/Authentication/SendCode'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App () {
    return(
        <Stack.Navigator
        initialRouteName="MainScreen"
        >
        <Stack.Screen 
        options={{
            headerShown:false
        }}
        name="MainScreen"
         component={MainScreen} />


        <Stack.Screen 
        options={{
            headerShown:false
        }}
        name="Registration"
         component={Registration} />

<Stack.Screen 
        options={{
            headerShown:false
        }}
        name="Login"
         component={Login} />

<Stack.Screen 
        options={{
            headerShown:false
        }}
        name="Dashboard"
         component={Dashboard} />

<Stack.Screen 
        options={{
            headerShown:false
        }}
        name="ForgetPassword"
         component={ForgetPassword} />

<Stack.Screen 
        options={{
            headerShown:false
        }}
        name="SendCode"
         component={SendCode} />

    </Stack.Navigator>
    )
}