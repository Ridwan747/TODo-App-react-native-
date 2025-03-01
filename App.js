// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import MainScreen from "./src/MainScreen";
// import Login from "./src/Authentication/Login";
// import Registration from "./src/Authentication/Registration";
// import Dashboard from "./src/DashboardContainer/Dashboard";
// import ForgetPassword from "./src/Authentication/ForgetPassword";
// import SendCode from "./src/Authentication/SendCode";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ResetPassword from "./src/Authentication/ResetPassword";
// import AddTask from "../ToDoApp/src/DashboardContainer/AddTask";
// import BottomBar from "./src/BottomBar";
// import Preference from "../ToDoApp/src/BottomBarNavigation/Preference";
// import EditInformation from "./src/BottomBarNavigation/EditInformation";
// import InviteFriends from "./src/BottomBarNavigation/InviteFriends";
// import ChangePassword from "./src/BottomBarNavigation/ChangePassword";
// import Form from "./src/DashboardContainer/Form";
// import EditDeleteModal from './src/DashboardContainer/EditDeleteModal'
// import EditForm from './src/DashboardContainer/EditForm'


//import Data from './src/DashboardContainer/Data'
// const Stack = createNativeStackNavigator();

// export default function App() {
 
//   return (
    
   
//     <Stack.Navigator initialRouteName="MainScreen">

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Dashboard"
//         component={BottomBar}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="MainScreen"
//         component={MainScreen}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Registration"
//         component={Registration}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Login"
//         component={Login}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="ForgetPassword"
//         component={ForgetPassword}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="SendCode"
//         component={SendCode}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="ResetPassword"
//         component={ResetPassword}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="AddTask"
//         component={AddTask}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Preference"
//         component={Preference}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="EditInformation"
//         component={EditInformation}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="InviteFriends"
//         component={InviteFriends}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="ChangePassword"
//         component={ChangePassword}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Form"
//         component={Form}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           presentation:'modal'
//         }}
//         name="deleteEdit"
//         component={EditDeleteModal}
//       />

// <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="EditForm"
//         component={EditForm}
//       />
//     </Stack.Navigator>
   
//   );
// }

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import MainScreen from "./src/MainScreen";
import Login from "./src/Authentication/Login";
import Registration from "./src/Authentication/Registration";
import Dashboard from "./src/DashboardContainer/Dashboard";
import ForgetPassword from "./src/Authentication/ForgetPassword";
import SendCode from "./src/Authentication/SendCode";
import ResetPassword from "./src/Authentication/ResetPassword";
import AddTask from "./src/DashboardContainer/AddTask";
import BottomBar from "./src/BottomBar";
import Preference from "./src/BottomBarNavigation/Preference";
import EditInformation from "./src/BottomBarNavigation/EditInformation";
import InviteFriends from "./src/BottomBarNavigation/InviteFriends";
import ChangePassword from "./src/BottomBarNavigation/ChangePassword";
import Form from "./src/DashboardContainer/Form";
import EditDeleteModal from "./src/DashboardContainer/EditDeleteModal";
import EditForm from "./src/DashboardContainer/EditForm";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("authToken");
      setIsAuthenticated(!!token);
    };

    checkLoginStatus();
  }, []);

  if (isAuthenticated === null) return null; // Prevent flashing

  return (
    <Stack.Navigator initialRouteName={isAuthenticated ? "Dashboard" : "Login"}>
      <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={BottomBar} />
      <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Registration" component={Registration} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen options={{ headerShown: false }} name="SendCode" component={SendCode} />
      <Stack.Screen options={{ headerShown: false }} name="ResetPassword" component={ResetPassword} />
      <Stack.Screen options={{ headerShown: false }} name="AddTask" component={AddTask} />
      <Stack.Screen options={{ headerShown: false }} name="Preference" component={Preference} />
      <Stack.Screen options={{ headerShown: false }} name="EditInformation" component={EditInformation} />
      <Stack.Screen options={{ headerShown: false }} name="InviteFriends" component={InviteFriends} />
      <Stack.Screen options={{ headerShown: false }} name="ChangePassword" component={ChangePassword} />
      <Stack.Screen options={{ headerShown: false }} name="Form" component={Form} />
      <Stack.Screen options={{ headerShown: false, presentation: "modal" }} name="deleteEdit" component={EditDeleteModal} />
      <Stack.Screen options={{ headerShown: false }} name="EditForm" component={EditForm} />
    </Stack.Navigator>
  );
}
