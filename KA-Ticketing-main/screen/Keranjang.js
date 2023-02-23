import { View, Text } from 'react-native'
import { Appbar, TextInput, Button, Checkbox, Switch } from 'react-native-paper';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function Keranjang({ navigation }) {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Keranjang" />
                <Appbar.Action icon="delete" />
            </Appbar.Header>

            <View style={{
                marginTop: 585,
                backgroundColor: "orange",
                height: 40,
                margin: 10,
                borderRadius: 5,
                flexDirection: "row"

            }}>
                <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="black" style={{ margin: 7 }} />
                <Text style={{ marginTop: 10 }}>Voucher </Text>
            </View>

            <View style={{
                marginTop: -7,
                backgroundColor: "orange",
                height: 40,
                margin: 10,
                borderRadius: 5,
                flexDirection: "row"



            }}>
                <FontAwesome5 name="coins" size={20} color="black" style={{ margin: 7 }} />
                <Text style={{ margin: 7 }}>100 poin</Text>
                <Text style={{ marginLeft: 210, marginTop: -5 }}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </Text>
            </View>

            <View style={{
                marginTop: -7,
                backgroundColor: "orange",
                height: 55,
                margin: 10,
                borderRadius: 5,
                flexDirection: "row"

            }}
            >
                <Checkbox />
                <Text style={{
                    marginTop: 7
                }}>Semua</Text>
                <Text style={{
                    marginLeft: 80,
                    marginTop: 10
                }}>
                    Total
                </Text>
                <Text style={{
                    marginLeft: 5,
                    marginTop: 10
                }}>
                    Rp. 0
                </Text>
                <Button style={{
                    backgroundColor: "lightgray",
                    height: 35,
                    marginTop: 10,
                    marginLeft: 10,
                    width: 130,

                    borderRadius: 5,
                }}>
                    <Text style={{
                        fontSize: 13,
                        color: "black"
                    }}>Checkout</Text>

                </Button>
            </View>
        </>

    )
}

export default Keranjang;