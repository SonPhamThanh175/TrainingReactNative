import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    Alert
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
import Student from "./Student";
  
  const StudentDetail = ({
    navigation,
    route: {
      params: { id },
    },
  }) => {
   
    const [body, setBody]= useState(null);
    useEffect(() => {
      axios.get(`https://gorest.co.in/public/v2/posts/${id}`)
      .then((res) => {
        //console.log(res.data);
        setBody(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    });
  
    const Delete = () => {
      axios.delete(`https://gorest.co.in/public/v2/delete/${id}`)
      .then((res) => {
        //console.log(res.data);
        navigation.navigate("Student")
      })
      .catch((err) => {
        console.log(err)
      });
    }
  
    const buttonAlert = () => {
        Alert.alert(
          "Ban co muon quay lai danh sach ko?",
          "",
          [
            {
              text: "Khong",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Co", onPress: () => Delete()}
          ]
        
      )};
    return (
      <View style={{ flex: 1}}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            height: 70,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("View3");
            }}
          >
            <Image
              source={require("../assets/icon/left-arrow.png")}
              style={{ height: 20, width: 20 }}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 17,
              textAlign: "center",
              width: "70%",
            }}
          >
            Thông tin chi tiết sinh viên
          </Text>
          <Text onPress={buttonAlert}>Xóa sinh viên</Text>
        </View>
        <View
          style={{
            height: 100,
            width: "100%",
            justifyContent: "space-around",
            marginTop:50
          }}
        >
          <Text style={{ fontWeight: "500" }}>
            {body?.title}
          </Text>
          <Text
            style={{
              textAlign: "right",
              width: "90%",
              fontSize: 12,
            }}
          >
            Đăng ngày: 20/12/2022
          </Text>
          <Text style = {{marginTop: 30}}> {body?.body}</Text>
        </View>
      </View>
    );
  };
  
  export default StudentDetail;
  