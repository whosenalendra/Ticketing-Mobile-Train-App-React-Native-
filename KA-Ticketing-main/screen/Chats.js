import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const data = [
    {
        id: 1,
        name: "Ahmad",
        lastMessage: "kamu siapa",
        profilePic: "",
        lastSeen: "1:30 AM",
    },
    {
        id: 2,
        name: "mamah",
        lastMessage: "dimana makk",
        profilePic: "",
        lastSeen: "9:22 PM",
    },
    {
        id: 3,
        name:"Maulana",
        lastMessage: "Haloo ajg",
        profilePic: "",
        lastSeen: "10:20 PM",
    },
    {
        id: 4,
        name: "Juned",
        lastMessage: "oke thanks",
        profilePic: "",
        lastSeen: "10:36 PM",
    },
    {
        id: 5,
        name: "Sueb",
        lastMessage: "juancok kui",
        profilePic: "",
        lastSeen: "10:36 PM",
    },
];

const Chats = () => {
    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            marginHorizontal: 10,
            justifyContent: "space-between"
        }}>
            <View style={{ flexDirection:"row", alignItems: "center" }}>
                <View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: "grey",
                }}
                ></View>
            </View>
            <View style={{ marginRight: 150, marginLeft: 10 }}>
                <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                <Text>{item.lastMessage}</Text>
            </View>
            <View>
                <Text>{item.lastSeen}</Text>
            </View>
        </View>

    );
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <View style={{
                backgroundColor: '#25D366',
                width: 60,
                height: 60,
                borderRadius: 40,
                position: "absolute",
                right: 15,
                bottom: 20,
            }}>
                <TouchableOpacity style={{
                    justifyContent:
                        "center", alignItems: "center",
                    width: '100%',
                    height: '95%',
                    transform: [{ rotate: '180deg' }]

                }}>
                    <MaterialIcons name="message" size={25} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Chats;

