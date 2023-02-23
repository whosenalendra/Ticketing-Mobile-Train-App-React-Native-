import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screen/HomeScreen';
import TiketScreen from '../screen/TiketScreen';
import Account from '../screen/Account';
import Searchscreen from '../screen/Searchscreen';
import Keranjang from '../screen/Keranjang';
import Pembeliantiket from '../screen/Pembeliantiket'
import PembelianBerhasil from '../screen/PembelianBerhasil'
import Daftarpenumpang from '../screen/Daftarpenumpang';
import Metodepembayaran from '../screen/Metodepembayaran';
import Userprofile from '../screen/Userprofile';
import Daftarkereta from '../screen/Daftarkereta';
import Tiketaktif from '../screen/Tiketaktif';

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={NavigationTab} />
                <Stack.Screen name="Searchscreen" component={Searchscreen} />
                <Stack.Screen name="Keranjang" component={Keranjang} />
                <Stack.Screen name="TiketScreen" component={TiketScreen} />
                <Stack.Screen name="Pembeliantiket" component={Pembeliantiket} />
                <Stack.Screen name="PembelianBerhasil" component={PembelianBerhasil} />
                <Stack.Screen name="Daftarpenumpang" component={Daftarpenumpang} />
                <Stack.Screen name="Metodepembayaran" component={Metodepembayaran} />
                <Stack.Screen name="Userprofile" component={Userprofile}/>
                <Stack.Screen name="Daftarkereta" component={Daftarkereta}/>
                <Stack.Screen name="Tiketaktif" component={Tiketaktif}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function NavigationTab() {
    return (
        <Tab.Navigator
            activeColor="blue"
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Tiket"
                component={TiketScreen}
                options={{
                    tabBarLabel: 'Tiket',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="ticket-confirmation" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Akun"
                component={Account}
                options={{
                    tabBarLabel: 'Akun',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default Navigation;