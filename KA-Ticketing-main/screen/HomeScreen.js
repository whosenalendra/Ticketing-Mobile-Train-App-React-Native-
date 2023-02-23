import React from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { View, Text, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Active from './Active';
import NotActive from './NotActive';

import Searchscreen from './Searchscreen';
import Keranjang from './Keranjang';

const Stack = createMaterialTopTabNavigator();


function HomeScreen({ navigation }) {
  return (
    <>

      <Appbar.Header style={{
        elevation: 0,
        shadowOpacity: 0,
        height: 75

      }}>
        <Searchbar
          placeholder="Cari kereta"
          style={{ height: 40, marginLeft: 10, width: 300, borderRadius: 15, }}

        />
        <Appbar.Content style={{ marginLeft: -20 }} />
        <Appbar.Action icon="cart" onPress={() => navigation.navigate('Keranjang')} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={{ minHeight: "103%", }}>
        <View>
          <Image></Image>
        </View>
        <View style={{
          marginTop: 5, borderRadius: 25, flexDirection: "row", marginHorizontal: 17,
          alignItems: "center", backgroundColor: "#2445ed", height: 130
        }}>
          <View style={{ flex: 1, marginLeft: 25, alignItems: "center" }}>
            <Image source={require('./payment.png')} style={{ width: 30, height: 30, marginTop: 5 }} />
            <Text style={{ color: "#fff", marginTop: 15 }}>Pay</Text>
            <Text style={{ color: "#fff" }}>Rp. 100.000</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10, alignItems: "center" }}>
            <Image source={require('./line2.png')} style={{ width: 2, height: 80, marginTop: 5 }} />
          </View>
          <View style={{ flex: 1, marginRight: 25, alignItems: "center" }}>
            <Image source={require('./coin.png')} style={{ width: 30, height: 30, marginTop: 5 }} />
            <Text style={{ color: "#fff", marginTop: 15 }}>Poin</Text>
            <Text style={{ color: "#fff" }}>100 poin</Text>
          </View>
        </View>


        <Stack.Navigator
          style={{
            borderColor: 'lightgray',
            width: 350,
            marginLeft: 16,

          }}

          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'lightgray',
            activeBackgroundColor: "#21147a",
            inactiveBackgroundColor: "#21147a",

            tabBarIndicatorStyle: {
              backgroundColor: 'lightgray',
              height: 4,
              width: 150,
              marginLeft: 20

            },

            tabBarStyle: {
              backgroundColor: 'transparent',
              height: 50
            },

            tabBarItemStyle: {
              justifyContent: "flex-end",
              alignitems: "center",
              marginTop: 5,
            }

          }}>
          <Stack.Screen name="KA Antar Kota" component={ Active } />
          <Stack.Screen name="KA Lokal" component={ NotActive } />

        </Stack.Navigator>

        <View style={{
          marginHorizontal: 20,
          marginTop: 10
        }}>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10, }}>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./gti.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Tiket</Text>
            </View>
            {/* Cek Pemesanan */}
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./fork.png')} style={{ width: 30, height: 30, margin: 10 }} />
              </View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Food</Text>
            </View>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./pp.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Pay</Text>
            </View>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./bus.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Bus</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 18 }}>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./car.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Taksi</Text>
            </View>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./top.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Top Up</Text>
            </View>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./tagihan.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>Tagihan</Text>
            </View>
            <View>
              <View style={{
                height: 50, borderRadius: 10, backgroundColor: "lightgray", width: 50,
              }}><Image source={require('./dots.png')} style={{ width: 30, height: 30, margin: 10 }} /></View>
              <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5, }}>More</Text>
            </View>
          </View>
        </View>

      </ScrollView>

    </>
  );
}

export default HomeScreen;