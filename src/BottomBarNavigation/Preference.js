import { StyleSheet, Text, View ,Pressable, TouchableOpacity, TextInput, Image,} from 'react-native'
import React from 'react'
import UseLogo from 'react-native-vector-icons/Entypo'
import GoLogo from 'react-native-vector-icons/AntDesign'
import PassLogo from 'react-native-vector-icons/MaterialIcons'
import PayLogo from 'react-native-vector-icons/MaterialIcons'
import PenLogo from 'react-native-vector-icons/FontAwesome5'
import { useNavigation} from '@react-navigation/native'
import BackLogo from 'react-native-vector-icons/AntDesign'

const Preference = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.imageView}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.Backlogo}>
            <BackLogo
              name="arrowleft"
              size={20}
              style={{
                marginTop: -20,
                marginLeft: -150,
                width: 100,
                height: 55,
                color: "gray",
              }}
            />
          </View>
        </Pressable>
      </View>
      <View style={{}}>
        <View style={{ marginTop: -40, marginLeft: 80, marginRight: 60 }}>
          <Text
            style={{
              color: "#FAA885",
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Preference
          </Text>
        </View>

        <View style={styles.preference}>
          <View style={styles.uselogo}>
            <UseLogo
              name="user"
              size={30}
              style={{ marginLeft: 30, marginTop: 40, color: "#FAA885" }}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("EditInformation")}>
            <View style={{ marginTop: -27, marginLeft: 30, marginRight: 60 }}>
              <Text
                style={{
                  color: "",
                  fontSize: 20,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                Account Information
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: -10, marginRight: 60 }}>
              <Text
                style={{
                  color: "gray",
                  fontSize: 10,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                Change yur Account Information
              </Text>
            </View>
          </Pressable>
          <View style={styles.Passlogo}>
            <PassLogo
              name="password"
              size={30}
              style={{ marginLeft: 30, marginTop: 40, color: "#FAA885" }}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("ChangePassword")}>
            <View style={{ marginTop: -30, marginLeft: -55, marginRight: 60 }}>
              <Text
                style={{
                  color: "",
                  fontSize: 20,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                {" "}
                Password
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: -45, marginRight: 60 }}>
              <Text
                style={{
                  color: "gray",
                  fontSize: 10,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                Change your Password
              </Text>
            </View>
          </Pressable>

          <View style={styles.Penlogo}>
            <PenLogo
              name="pen"
              size={30}
              style={{ marginLeft: 35, marginTop: 40, color: "#FAA885" }}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("InviteFriends")}>
            <View style={{ marginTop: -30, marginLeft: 30, marginRight: 60 }}>
              <Text
                style={{
                  color: "",
                  fontSize: 20,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                Invite Your Friends
              </Text>
            </View>
            <View style={{ marginTop: 5, marginLeft: -20, marginRight: 60 }}>
              <Text
                style={{
                  color: "gray",
                  fontSize: 10,
                  fontWeight: "",
                  textAlign: "center",
                }}
              >
                Get $3 For Each Invitation!
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  imageView: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-around",
  },
});