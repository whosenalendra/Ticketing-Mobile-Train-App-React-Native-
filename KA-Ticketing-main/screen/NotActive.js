import { View, Text, Image } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';

import Searchscreen from './Searchscreen';


function NotActive({ navigation }) {

    const [Kotaasal, setKotaasal] = useState();
    const [Kotatujuan, setKotatujuan] = useState();
    const [Penumpang, setPenumpang] = useState();
    const [text, setText] = React.useState("");

    return (
        <View style={{
            borderRadius: 30,
            backgroundColor: '#DCDCDC',
            height: 350,
            marginTop: 10,
            width: 330,
            marginLeft: 0,

        }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        marginLeft: 25,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>
                        Asal</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", marginRight: 12 }}>
                    <Image source={require('./png1.png')} style={{ width: 27, height: 22, marginTop: 20 }} />
                </View>
                <View style={{ flex: -1, marginRight: 25 }}>
                    <Text style={{
                        marginLeft: 25,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>
                        Tujuan</Text>
                </View>
            </View>
            {/* picker */}
            <View style={{
                flexDirection: "row"
            }}>
                <View style={{
                    marginLeft: 16,
                    width: 150

                }}>
                    <Picker
                        mode='dialog'
                        selectedValue={Kotaasal}
                        onValueChange={(itemValue, itemIndex) =>
                            setKotaasal(itemValue)
                        }>
                        <Picker.Item label="Jakarta" value="Jakarta" />
                        <Picker.Item label="Bandung" value="Bandung" />
                        <Picker.Item label="Malang" value="Malang" />
                        <Picker.Item label="Surabaya" value="Surabaya" />
                        <Picker.Item label="Tegal" value="Tegal" />
                        <Picker.Item label="Pemalang" value="Pemalang" />
                    </Picker>

                </View>
                <View style={{
                    marginLeft: 16,
                    width: 150,
                    flex: 1

                }}>
                    <Picker
                        mode='dialog'
                        selectedValue={Kotatujuan}
                        onValueChange={(itemValue, itemIndex) =>
                            setKotatujuan(itemValue)
                        }>
                        <Picker.Item label="Jakarta" value="Jakarta" />
                        <Picker.Item label="Bandung" value="Bandung" />
                        <Picker.Item label="Malang" value="Malang" />
                        <Picker.Item label="Surabaya" value="Surabaya" />
                        <Picker.Item label="Tegal" value="Tegal" />
                        <Picker.Item label="Pemalang" value="Pemalang" />
                    </Picker>

                </View>
            </View>
            {/* tanggal berangkat */}
            <View style={{ flexDirection: "row", marginTop: -5 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        marginLeft: 25,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>
                        Tanggal berangkat</Text>
                </View>
                <View style={{ flex: -1, marginRight: 25 }}>
                    <Text style={{
                        marginLeft: 25,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>
                        Tanggal kembali</Text>
                </View>
            </View>
            <View style={{ marginTop: 29 }}>
                <TextInput
                    value={text}
                    style={{
                        height: 20,
                        width: 110,
                        marginLeft: 27,
                        backgroundColor: "transparent"
                    }}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={{ flexDirection: "row", marginTop: 2 }}>
                <View style={{ flex: -1, marginRight: 25 }}>
                    <Text style={{
                        marginLeft: 25,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>
                        Penumpang</Text>
                </View>
            </View>
            <View style={{
                marginLeft: 16,
                width: 150,
                flex: 1

            }}>
                <Picker
                    mode='dialog'
                    selectedValue={Penumpang}
                    onValueChange={(itemValue, itemIndex) =>
                        setPenumpang(itemValue)
                    }>
                    <Picker.Item label="1 Penumpang" value="1 Penumpang" />
                    <Picker.Item label="2 Penumpang" value="2 Penumpang" />
                    <Picker.Item label="3 Penumpang" value="3 Penumpang" />
                    <Picker.Item label="4 Penumpang" value="Surabaya" />
                    <Picker.Item label="5 Penumpang" value="5 Penumpang" />
                    <Picker.Item label="6 Penumpang" value="6 Penumpang" />
                </Picker>


            </View>


            <Button style={{
                borderRadius: 10,
                backgroundColor: 'orange',
                height: 40,
                marginBottom: 20,
                width: 260,
                marginLeft: 40
            }}
                mode="contained"
                uppercase={false}
                onPress={() => navigation.navigate('Searchscreen')}>

                <Text style={{
                    alignContent: "center",
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "bold"

                }}>
                    Cari
                </Text>


            </Button>


        </View>
    )
}

export default NotActive;