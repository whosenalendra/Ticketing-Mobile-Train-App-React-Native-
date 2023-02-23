import { View, Text } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Daftarkereta from './Daftarkereta';


const Stack = createMaterialTopTabNavigator();

function Searchscreen({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                height: 60
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daftar kereta" />
            </Appbar.Header>
            <Stack.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#fc9403',
                    tabBarInactiveTintColor: 'black',
                    activeBackgroundColor: "#2445ed",
                    inactiveBackgroundColor: "#2445ed",


                    tabBarIndicatorStyle: {
                        backgroundColor: '#fc9403',
                        height: 4,

                    },

                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 70,
                    },

                    tabBarItemStyle: {
                        justifyContent: "flex-end",
                        alignitems: "center",
                        marginTop: 5,
                    }

                }}>
                <Stack.Screen name="Selasa 31" component={Daftarkereta} />
                <Stack.Screen name="Rabu  01" component={Daftarkereta} />
                <Stack.Screen name="Kamis 02" component={Daftarkereta} />
                <Stack.Screen name="Jumat 03" component={Daftarkereta} />
                <Stack.Screen name="Sabtu 04" component={Daftarkereta} />
            </Stack.Navigator>

        </>


    )
}

export default Searchscreen;