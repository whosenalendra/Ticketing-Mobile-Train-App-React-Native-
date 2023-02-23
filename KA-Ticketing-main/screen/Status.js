import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const status = [
    {
        id: 1,
        name: "My Status",
        lastupdate: "Tap to add status update",
    },
    {
        id: 2,
        name: "Bu sri",
        lastupdate: "Today, 12:45PM",
    },
    {
        id: 3,
        name: "Pak ahmad",
        lastupdate: "Today, 12:10PM",

    },

];


const Chats = () => {
    const renderItem= ({ item }) => (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            marginHorizontal: 10,
            justifyContent: "space-between"
        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    backgroundColor: "grey",
                }}
                ></View>
            </View>
            <View style={{ marginRight: 170, marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.name}</Text>
                <Text style={{ marginVertical: 3, color: '#696969' }}>{item.lastupdate}</Text>
            </View>
        </View>

    );
    return (
        <View style={styles.container}>
            <FlatList
                data={status}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <View style={{
                backgroundColor: '#DCDCDC',
                width: 40,
                height: 40,
                borderRadius: 35,
                position: "absolute",
                right: 23,
                bottom: 95,
            }}>
                <TouchableOpacity style={{
                    justifyContent:
                        "center", alignItems: "center",
                    width: '100%',
                    height: '95%',

                }}>
                    <MaterialCommunityIcons name="pencil" size={24} color="black" />
                </TouchableOpacity>
            </View>
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

                }}>
                    <Entypo name="camera" size={24} color="white" />
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

