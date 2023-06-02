
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';

const Student = ({navigation}) => {
    const [search, setSearch] = useState("");
    const [listStudent, setListStudent] = useState(null);

    useEffect(() => {
        axios.get('http://kiemtra.stecom.vn:8888/api/student/PTS170764/get-all?pageSize=1&pageIndex=1&keyword=pts')
            .then((res) => {
                console.log(res.data);
                setListStudent(res.data)
            })

    }, []);

    const StudentDetail = (id) => {
        console.log(id)
        navigation.navigate('StudentDetail',{id})
      }

    const filterList = (listStudent) => {
        return listStudent.filter(
            (listItem) =>
                listItem.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                listItem.body.toLowerCase().includes(search.toLowerCase()),
        );
    }

    const StudentItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => StudentDetail(item.id)}>
                <View style={{ backgroundColor: "#cece", borderBottomWidth: 1, borderBottomColor: " #cececece" }}>
                    <Text style={{ fontWeight: "700" }}>{item.title}</Text>
                    <Text numberOfLines={3}  style={{ marginBottom: 10 }}>{item.body}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: "center" }}>
                <View
                    style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        height: 70,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 17,
                            textAlign: "center",
                            width: "90%",
                        }}
                    >
                        Danh sách bài viết
                    </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddStudent") }}>
                        <Image
                            source={require("../assets/icon/plus.png")}
                            style={{ height: 20, width: 20 }}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        height: 50,
                        width: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <TextInput
                        value={search}
                        onChangeText={(value) => setSearch(value)}
                        style={{ borderWidth: 1.5, height: 25, width: "70%", padding: 5 }}
                    ></TextInput>
                    <TouchableOpacity
                        //onPress={}
                        style={{
                            height: 25,
                            width: 80,
                            borderWidth: 1.5,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ fontWeight: "500" }}>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ScrollView>
                {filterList(listPaper).map((item, id) => (
                    <TouchableOpacity key={id}>
                        <View style={{ padingTop: 10, backgroundColor: "#cece", borderBottomWidth: 1, borderBottomColor: " #cececece" }}>
                            <Text style={{ fontWeight: "700" }}>{item.title}</Text>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={{ marginBottom: 10 }}>{item.body}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView> */}
            <FlatList
            data={listStudent}
            renderItem={StudentItem}
            contentContainerStyle={{ alignItems: "center" }}
            ></FlatList>
        </SafeAreaView>
    );
}

export default Student;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    box: {
        height: "25%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#cececece",
        justifyContent: "space-around",
    },
    txt: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
    },
    Input: {
        width: "85%",
        height: "100%",
        marginHorizontal: 5,
    },
    Suggestions: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    formInput: {
        backgroundColor: "white",
        height: 36,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    buttonHidden: {
        textAlign: "right",
        marginRight: 5,
        color: "#063970"
    },
    showRemain: {
        justifyContent: "flex-end",
        alignItems: 'center',
        flexDirection: 'row'
    },
    showIcon: {
        color: "#063970",
        fontSize: 20,
        textAlign: 'center',
        padding: 7
    }
});
