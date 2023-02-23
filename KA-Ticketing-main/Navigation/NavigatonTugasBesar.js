import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from './screen/Chats';
import Calls from './screen/Calls';
import Status from './screen/Status'
import Camera from './screen/Camera';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


const MaterialTopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Chats'}
      tabBarOptions = {{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        headerTintColor: '#fff',
        style: {
          backgroundColor: '#128C7E',
          paddingBottom: 3
        },
        indicatorStyle: {
          backgroundColor: 'white',
          height: 2,
        },
        labelStyle: {
          fontWeight: 'bold'
        }

      }}>
      <Tab.Screen name="Camera" component={Camera}
        options={{
          tabBarIcon: ({ }) => <Fontisto name="camera" size={18} color="white" />,
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  )
}


function Navigation({ }) {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={MaterialTopTab}
          options={({ }) => ({
            title: "WhatsApp",
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#128C7E',
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between',
              }}>
                <TouchableOpacity >
                  <Octicons name="search" size={22} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
                </TouchableOpacity>
              </View>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default Navigation;