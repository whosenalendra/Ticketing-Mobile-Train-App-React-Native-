import React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { View, Text, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack = createMaterialTopTabNavigator();



function PembelianBerhasil({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
                height: 250,
                flexDirection: "column"
            }}>

                <View style={{
                    marginTop: 100,
                    flexDirection: "row"
                }}>
                    <Ionicons name="checkmark-circle" size={24} color="white" />
                    <Text style={{
                        fontSize: 20,
                        color: "#fff",
                        marginLeft: 5
                    }}>
                        Pembelian Tiket Berhasil
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 30, margin: 7, marginTop: 50 }}>
                    <Button
                        onPress={() => navigation.navigate('HomeScreen')}
                        mode="contained"
                        style={{
                            borderRadius: 10,
                            borderColor: "white", borderWidth: 3,
                            flex: 1
                        }}
                        uppercase={false}>
                        <Text style={{ color: "white" }}> Beranda</Text>
                    </Button>
                    <Button
                        onPress={() => navigation.navigate('TiketScreen')}
                        mode="contained"
                        style={{
                            borderRadius: 10,
                            marginLeft: 10,
                            flex: 1,
                            borderColor: "white", borderWidth: 3
                        }}
                        uppercase={false}>
                        <Text style={{ color: "white" }}> Lihat Tiket</Text>
                    </Button>
                </View>
            </Appbar.Header>



        </>
    );
}

export default PembelianBerhasil;