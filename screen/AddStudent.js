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

const AddStudent = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [titleErr, setTitleErr] = useState(null);
    const [body, setBody] = useState(null);
    const [bodyErr, setBodyErr] = useState(null);
    // Data can truyen vao
    const data = { title, body }

    const validInput = (title, body) => {
        const err = {};

        if (title.length < 20) {
            err.title = "Vui lòng nhập tiêu đề lớn hơn 20 ki tu.";
        }

        if (!body) {
            err.body = "Hãy nhap noi dung.";
        }
        return {
            errMsg: err,
            errLength: Object.keys(err).length,
        };
    };

    const Add = (data) => {
        console.log(data);
        const check = validInput(title, body);
        console.log(check.errLength)
        if (check.errLength > 0) {
            setTitleErr(check.errMsg.title)
            setBodyErr(check.errMsg.body)
        }
        else {
            setTitleErr(null)
            setBodyErr(null)
            axios.post('http://kiemtra.stecom.vn:8888/api/student/PTS170764/create',
                data,
                'Authorization: Bearer a11957bad5fa9d0dae33002acc90cc2e23e0094fbd066fab3ec65c2e54c89243'
            )
                .then((res => {
                    console.log("Thanh cong");
                    navigation.navigate("Student")
                }))
                .catch((err) => {
                    console.log(err);
                })
        }
    }



    const alertValid = (err) =>
        Alert.alert(
            `${err}`,
            "",
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );

    const cancelAlert = () =>
        Alert.alert(
            "Ban co muon quay lai danh sach ko?",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Khong",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Co", onPress: () => navigation.navigate("View3") }
            ]
        );
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <View
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    height: 100,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Student");
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
                        width: "90%",
                    }}
                >
                    Thêm sinh viên mới
                </Text>
            </View>
            
            <Text style={{ width: "95%", textAlign: "left", fontWeight: "600", padding: 5 }}>
                    Tên sinh viên
                </Text>
                <TextInput 
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                    style={{ marginTop: 15,  borderWidth: 1.5, height: 25, width: "95%", padding: 10 }}
                ></TextInput>
                <Text style={styles.textErr}>
                    {titleErr}
                </Text>
                <Text style={{ width: "95%", textAlign: "left", fontWeight: "600", padding: 5 }}>
                    MSSV
                </Text>
                <TextInput 
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                    style={{ marginTop: 15,  borderWidth: 1.5, height: 25, width: "95%", padding: 10 }}
                ></TextInput>
                <Text style={styles.textErr}>
                    {titleErr}
                </Text>
                <Text style={{ width: "95%", textAlign: "left", fontWeight: "600", padding: 5 }}>
                    Lớp
                </Text>
                <TextInput 
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                    style={{ marginTop: 15,  borderWidth: 1.5, height: 25, width: "95%", padding: 10 }}
                ></TextInput>
                <Text style={styles.textErr}>
                    {titleErr}
                </Text>
                <Text style={{ width: "95%", textAlign: "left", fontWeight: "600", padding: 5 }}>
                    Email
                </Text>
                <TextInput 
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                    style={{ marginTop: 15,  borderWidth: 1.5, height: 25, width: "95%", padding: 10 }}
                ></TextInput>
                <Text style={styles.textErr}>
                    {titleErr}
                </Text>
            <View style={{ height: 150, width: "95%", marginTop: 10 }}>
                <Text
                    style={{
                        width: "90%",
                        textAlign: "left",
                        fontWeight: "600",
                    }}
                >
                    Nội dung bài viết
                </Text>
                <TextInput
                    value={body}
                    onChangeText={(value) => setBody(value)}
                    style={{ height: "80%", width: "100%", borderWidth: 1, marginTop: 4 }}
                ></TextInput>
                <Text style={styles.textErr}>
                    {bodyErr}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        height: 60,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text onPress={cancelAlert}>Hủy bỏ</Text>
                    <TouchableOpacity
                        style={{
                            height: 30,
                            width: 90,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                        }}
                        onPress={() => Add(data)}
                    >
                        <Text>Lưu lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textErr: {
        color: "red",
        marginTop: 10,
        marginLeft: "5%",
        fontSize: 12
      },
})
export default AddStudent;
