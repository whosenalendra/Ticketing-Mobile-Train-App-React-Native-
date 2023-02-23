import { Appbar, Button, TextInput, RadioButton } from 'react-native-paper';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import supabase from '../supabase';
import Userprofile from './Userprofile';
import TiketScreen from './TiketScreen';
import PembelianBerhasil from './PembelianBerhasil';

function Pembeliantiket({ navigation, route }) {
    //console.log(route)

    const [nama, setNama] = React.useState("");
    const [telepon, setTelepon] = React.useState("");
    const [checked, setChecked] = React.useState('');

    const onSimpan = async () => {

        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('costumer')
            .insert({
                nama: nama,
                no_telepon: telepon,
                jenis_kelamin: checked,
                tanggal_berangkat: route.params.date
            })


        const tiket = await supabase
            .from('tiket')
            .insert({
                id_reservasi: route.params.id_reservasi,
                id_tujuan: route.params.id_tujuan,
                id_kereta: route.params.id_kereta,
                id_costumer: data[0].id_costumer
            })


        Alert.alert(
            "Pemesanan",
            "Apakah data yang anda masukkan telah benar?",
            [
                {
                    text: "Tidak",
                    onPress: () => console.log("Cancel"),
                    style: "cancel"
                },
                { text: "Iya", onPress: () => navigation.navigate('TiketScreen') }
            ]
        );
    }



    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Ringkasan Pemesanan" />
            </Appbar.Header>
            <ScrollView>
                {/* Detail Penumpang */}
                <View style={{
                    margin: 10,
                    marginLeft: 22,
                    marginTop: 20,
                    flexDirection: "row"
                }}>
                    <Text style={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: 20,
                        flex: 1
                    }}>
                        Detail Penumpang
                    </Text>
                </View>

                <View style={{
                    backgroundColor: "lightgray",
                    margin: 20,
                    height: 400,
                    borderRadius: 10,
                    marginTop: 7
                }}>
                    <Text style={{ margin: 20, fontSize: 15 }}>
                        Nama Lengkap
                    </Text>
                    <TextInput
                        value={nama}
                        style={{
                            height: 20,
                            width: 300,
                            marginLeft: 20,
                            marginTop: 20,
                            backgroundColor: "transparent"
                        }}
                        onChangeText={text => setNama(text)}
                    />
                    <Text style={{ margin: 20, fontSize: 15, marginTop: 40 }}>
                        Nomor Telepon
                    </Text>
                    <TextInput
                        value={telepon}
                        keyboardType="number-pad"
                        style={{
                            height: 20,
                            width: 300,
                            marginLeft: 20,
                            backgroundColor: "transparent",
                            marginTop: 20,
                        }}
                        onChangeText={text => setTelepon(text)}
                    />
                    <View>
                        <Text style={{
                            color: "#000",
                            margin: 20,
                            fontSize: 15
                        }}>
                            Jenis kelamin</Text>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    color: "#000",
                                    flex: 1,
                                    marginLeft: 20,
                                    fontSize: 15,
                                    marginTop: 12
                                }}>Laki-laki</Text>
                                <RadioButton
                                    color='black'
                                    value="Laki-laki"
                                    status={checked === 'Laki-laki' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Laki-laki')}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    color: "#000",
                                    flex: 1,
                                    marginLeft: 20,
                                    fontSize: 15,
                                    marginTop: 15,
                                }}>Perempuan</Text>
                                <RadioButton
                                    color='black'
                                    value="Perempuan"
                                    status={checked === 'Perempuan' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Perempuan')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Button
                onPress={onSimpan}
                mode="contained"
                style={{ margin: 20, borderRadius: 10, marginTop: -15, backgroundColor: "orange" }}
                uppercase={false}
            >
                Lanjutkan
            </Button>


        </>
    );
}

export default Pembeliantiket;