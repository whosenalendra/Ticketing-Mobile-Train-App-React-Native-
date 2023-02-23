import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import supabase from '../supabase';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function Tiketaktif() {
    const [data, setData] = useState([]);

    //script dijalankan ketika screen diakses
    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('tiket')
            .select('costumer: id_costumer(*), kereta: id_kereta(*), reservasi: id_reservasi(*), tujuan: id_tujuan(*)')
            .order('id_tiket', { ascending: true })
        // console.log(data)
        //mengisi state data
        setData(data);
    }

    const onPrint = async (data) => {
        //file content
        let html = `<ul>`;
        data.map((item) => {
            html += `<h1 style="text-align: center;">` + 'E-Tiket' + `<h1>`;
            html += `<h2>` + `Nama Kereta : ` + item.kereta.nama_kereta + `<h2>`;
            html += `<h2>` + `Nama Penumpang : ` + item.costumer.nama + `<h2>`;
            html += `<h2>` + `Jenis Kelamin : ` + item.costumer.jenis_kelamin + `<h2>`;
            html += `<h2>` + `No. Telepon : ` + item.costumer.no_telepon + `<h2>`;
            html += `<h2>` + `Tanggal Berangkat : ` + item.costumer.tanggal_berangkat + `<h2>`;
            html += `<h2>` + `Jam : ` + item.kereta.jam + `<h2>`;
        })
        html += `</ul>`;

        //print file
        const { uri } = await Print.printToFileAsync({
            html
        });

        //share file
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }


    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id_kereta}
                renderItem={({ item, index }) => (
                    <View key={index} style={{
                        borderRadius: 30,
                        backgroundColor: 'lightgray',
                        height: 500,
                        marginHorizontal: 20,
                        marginTop: 10,
                        width: 350,
                        marginBottom: 30,
                        marginLeft: 5
                    }}>
                        <View style={{ backgroundColor: "blue", borderTopEndRadius: 30, borderTopStartRadius: 30, marginTop: 2, height: 70 }}>
                            <View style={{ margin: 20 }}>
                                <Text style={{ fontSize: 20, color: "#fff" }}>e-tiket</Text>
                                <Text style={{ fontSize: 10, color: "#fff", fontStyle: "italic" }}>e-ticket</Text>
                            </View>
                            <View style={{ backgroundColor: "orange", height: 7, marginTop: -8 }}></View>
                        </View>
                        <View style={{ margin: 15, flexDirection: "row" }}>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nama Kereta</Text>
                                <Text style={{ color: "black", fontSize: 20, marginTop: 5 }}>{item.kereta.nama_kereta}</Text>
                            </View>
                            <View>
                                <Image source={require('./barcode.png')} style={{ width: 100, height: 10, flex: 1, marginLeft: 80, marginTop: 10 }} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fff", height: 1 }}></View>
                        <View style={{ justifyContent: "center", marginTop: 20, flexDirection: "row" }}>
                            <View>
                                <Text style={{ fontSize: 10, flex: 1 }}> {item.reservasi.kotaasal} </Text>
                            </View>
                            <AntDesign name="arrowright" size={10} color="black" style={{ marginTop: 1 }} />
                            <View>
                                <Text style={{ fontSize: 10, flex: 1 }}> {item.tujuan.kotatujuan} </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fff", height: 1, marginTop: 20 }}></View>
                        <View style={{ margin: 15, flexDirection: "row" }}>
                            <Text style={{ flex: 1 }}>Penumpang</Text>
                            <Text style={{ flex: 1 }}>No. Telepon</Text>
                            <Text style={{ flex: 1 }}>Jenis kelamin</Text>
                        </View>
                        <View style={{ margin: 15, flexDirection: "row", marginTop: -15 }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                flex: 1
                            }}>{item.costumer.nama}</Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                flex: 1
                            }}>{item.costumer.no_telepon}</Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                flex: 1
                            }}>{item.costumer.jenis_kelamin}</Text>
                        </View>
                        <View style={{ backgroundColor: "#fff", height: 1, marginTop: 10 }}></View>
                        <View style={{ margin: 15, flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text>Tgl Berangkat</Text>
                            </View>
                            <Text style={{ flex: 1 }}>Jam</Text>
                        </View>
                        <View style={{ margin: 15, flexDirection: "row", marginTop: -5 }}>
                            <View style={{ flex: 1 }}>
                                <Text> {item.costumer.tanggal_berangkat}</Text>
                            </View>
                            <Text style={{ flex: 1 }}> {item.kereta.jam} </Text>
                        </View>
                        <View style={{ backgroundColor: "#fff", height: 1, marginTop: 10 }}></View>
                        <View style={{ margin: 15, flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginTop: 6 }}>Harga</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ marginTop: 6 }}>{item.kereta.harga}</Text>
                            </View>
                        </View>
                        <Button
                            mode="contained"
                            uppercase={false}
                            onPress={() => onPrint(data)}
                            style={{
                                backgroundColor: 'orange',
                                height: 40,
                                marginTop: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                            }}
                        >
                            <Text style={{
                                alignContent: "center",
                                fontSize: 18,
                                color: "#fff",
                                fontWeight: "bold"

                            }}>
                                Print
                            </Text>
                        </Button>
                    </View>
                )} />
        </>
    )
}