import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './DashboardContainer/Dashboard'
import Home from './BottomBarNavigation/Chat';
import ProfileScreen from './BottomBarNavigation/ProfileScreen';
//import WelcomeOne from './WelcomeOne';
//import History from './BottomBarNavigation/History';
import HomeLogo from 'react-native-vector-icons/Feather'
import ChatLogo from 'react-native-vector-icons/Ionicons'
import AddLogo from 'react-native-vector-icons/Ionicons'
import ProLogo from 'react-native-vector-icons/AntDesign'
import ConstantColors from '../constants/color';

const BottomBar = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{
        tabBarBadgeStyle: {
            color: 'black',
            backgroundColor: 'yellow',
          },
          

    }}
    >
       {/* <Tab.Screen name="WelcomeOne" component={WelcomeOne} />  */}
      <Tab.Screen name="Home" component={Dashboard}
     
       options={{
        headerShown:false,
        tabBarIcon:(({focused})=>(
            focused ?
        <>

         <View style={styles.Homelogo}> 
                                 <HomeLogo
                                name="home"
                                size={20}
                               color='#FAA885'
                                />
                                </View>
        </>:
        <>
        <View style={styles.Homelogo}> 
        <HomeLogo
       name="home"
       size={20}
      color='black'
       />
       </View>
</>

       ))}}
       />
      <Tab.Screen name="Add ToDo" component={Home} 
        options={{
            headerShown:false,
            tabBarIcon:(({focused})=>(
                focused ?
            <>
            <View style={styles.Addlogo}> 
                                 <AddLogo
                                name="add-circle-outline"
                                size={20}
                                color='#FAA885'
                                />
                                </View>
            </>:
             <>
             <View style={styles.Addlogo}> 
                                  <AddLogo
                                 name="add-circle-outline"
                                 size={20}
                                 color={ConstantColors.main}
                                 />
                                 </View>
                    </>
           ))}}/>
      
      <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        headerShown:false,
        tabBarIcon:(({focused})=>(
            focused ?
        <>
        <View style={styles.Prologo}> 
                                 <ProLogo
                                name="profile"
                                size={20}
                               color='#FAA885'
                                />
                                </View>
        </>:
        <>
        <View style={styles.Prologo}> 
                                 <ProLogo
                                name="profile"
                                size={20}
                               color={ConstantColors.main}
                                />
                                </View>
        </>
       ))}}/> 
    
    </Tab.Navigator>
  
  )
  
}

export default BottomBar

const styles = StyleSheet.create({})