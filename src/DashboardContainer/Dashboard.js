import {
  StyleSheet,
  Text,
  CheckBox,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { sortRoutes } from "expo-router/build/sortRoutes";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import EditButton from "./EditButton";
import Server from "@/constants/server";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from "@react-navigation/native";

const Dashboard = (route, todoId) => {
  const navigation = useNavigation();

  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState(null);

  const [time, setTime] = useState(0); // Elapsed time in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer state (running/stopped)
  const intervalRef = useRef(null); // Ref to store the interval ID
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(true);
  // Function to start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 second
      }, 1000);
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current); // Clear the interval
      setIsRunning(false);
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
    setIsRunning(false);
    setTime(0); // Reset time to 0
  };

  // Format time into HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const loadImage = async () => {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
          setUserId(storedUserId);
          const storedImage = await AsyncStorage.getItem(
            `profileImage_${storedUserId}`
          );
          if (storedImage) {
            setProfileImage(storedImage);
          }
        }
      };
      loadImage();
    }, [])
  );

  //   const fetchProfileImage = async () => {
  //     const image = await AsyncStorage.getItem("profileImage");
  //     setProfileImage(image);
  //   };

  //   fetchProfileImage();
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      const loadUserData = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem("userId");
          if (storedUserId) {
            setUserId(storedUserId);

            // Fetch and set profile image
            const storedImage = await AsyncStorage.getItem(
              `profileImage_${storedUserId}`
            );
            if (storedImage) setProfileImage(storedImage);

            // Fetch and set user name
            const storedUserName = await AsyncStorage.getItem("userName");
            if (storedUserName) setUserName(storedUserName);
          }
          // Set the greeting based on time
          setGreeting(getGreeting());
        } catch (error) {
          console.log("Error loading user data:", error);
        }
      };

      loadUserData();
    }, [])
  );
 
  
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (!token) {
          navigation.replace("Login"); // Redirect if token is absent
        }
      } catch (error) {
        console.log("Error checking auth status:", error);
      } finally {
        setLoading(false); // Finish loading regardless of the outcome
      }
    };
  
    checkAuthStatus();
  }, []);
  
 
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        alert("Token is absent");
      }
      const response = await axios.get(`${Server.serverTodos}/getusertodos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // if (response.data.status === "success") {
      //   setAllTodos(response.data.todos)
      //   console.log("Created TOdos",response.data); // Prints the full response data
      if (response.data.status === "success") {
        // Add a `completed` field to each todo item
        const todosWithStatus = response.data.todos.map((todo) => ({
          ...todo,
          completed: false,
        }));
        setAllTodos(todosWithStatus);
        console.log("Fetched Todos:", todosWithStatus);
      } else {
        console.log("Error querying Todos", response.data.message);
      }
    } catch (err) {
      if (err.response) {
        console.log("Error:", err.response.data);
      } else {
        console.log("Network error:", err.message);
      }
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleTask = (taskId) => {
    setAllTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => (
    <View style={styles.listTaskView}>
      <View style={styles.textView}>
        <Text style={{ color: "blue" }}>{item.title}</Text>
        <Text style={{ color: "red" }}>{item.description}</Text>

        <EditButton todoId={item.id} refreshTodos={fetchTodos} />

        <View style={styles.line}></View>
      </View>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Icon
          name={item.completed ? "checkbox-outline" : "checkbox-blank-outline"}
          size={25}
          color="black"
          style={{ marginLeft: 10, marginTop: 24 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          source={require("../../assets/images/shape.png")}
          style={{
            width: 370,
            height: 260,
            marginBottom: -150,
            backfaceVisibility: "visible",
            backgroundColor: "#be5c3d", //#e1a388 //#be4a26 
          }}
        />
      </View>

      <View style={styles.imageView}>
       
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../../assets/images/image2.png")
          }
          style={{ width: 80, height: 80, borderRadius: 37,marginLeft: 15 }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.firstText}>
          Welcome {userName ? userName : "User"}
        </Text>
      </View>

      <View style={styles.greetText}>
        <Text style={styles.secondText}>{greeting}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={startTimer}
            style={[styles.button, styles.startButton]}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stopTimer}
            style={[styles.button, styles.stopButton]}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resetTimer}
            style={[styles.button, styles.resetButton]}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Task}>
        <Text style={styles.taskText}>Tasks List</Text>
        <Text>{allTodos.title}</Text>
      </View>

      <View style={styles.dailyTaskView}>
        <Text style={styles.Text}>Daily Tasks</Text>
        <Pressable onPress={() => navigation.navigate("AddTask")}>
          <Image
            source={require("../../assets/images/plus.png")}
            style={{
              width: 24,
              height: 24,
              marginLeft: 290,
              marginBottom: -10,
              top: -20,
            }}
          />
        </Pressable>
        <FlatList
          data={allTodos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5f0",
    alignItems: "center",
    justifyContent: "center",
  },

  imageView: {
    marginBottom: 20,
  },
  textView: {
    marginBottom: 20,
  },
  firstText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    color: "white",
  },
  greetText: {
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 220,
  },

  secondText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  clockImage: {
    marginBottom: 15,
  },
  Task: {
    marginBottom: -10,
    marginTop: 25,
    marginRight: 260,
  },
  taskText: {
    fontWeight: "bold",
  },
  dailyTaskView: {
    height: 200,
    width: 330,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 20,
  },
  Text: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
  listTaskView: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 18,
    marginLeft: 20,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginLeft: -500,
    marginRight: -500,
    marginTop: 5,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 1,
    color: "#FAA885",
  },
  buttonContainer: {
    flexDirection: "row",
    
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  startButton: {
    backgroundColor: "#4CAF50", // Green
  },
  stopButton: {
    backgroundColor: "#F44336", // Red
  },
  resetButton: {
    backgroundColor: "#2196F3", // Blue
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
