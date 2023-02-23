import React from 'react';
import { Appbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Stack = createMaterialTopTabNavigator();

import Tiketaktif from './Tiketaktif';


function TiketScreen({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.Content title="TIket" onPress={() => navigation.navigate('HomeScreen')} />
            </Appbar.Header>
            <Stack.Navigator


                screenOptions={{
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    activeBackgroundColor: "#2445ed",
                    inactiveBackgroundColor: "#2445ed",

                    tabBarIndicatorStyle: {
                        backgroundColor: 'white',
                        height: 2,

                    },

                    tabBarStyle: {
                        backgroundColor: '#2445ed',
                        height: 50
                    },

                    tabBarItemStyle: {
                        justifyContent: "flex-end",
                        alignitems: "center",
                        marginTop: 5,
                    }

                }}>
                <Stack.Screen name="Tiket Aktif" component={Tiketaktif} />
            </Stack.Navigator>

        </>
    );
}

export default TiketScreen;