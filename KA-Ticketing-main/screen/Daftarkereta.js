import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Appbar } from 'react-native-paper';
import React, { useState, useEffect } from 'react'

import supabase from '../supabase';


function Daftarkereta({ navigation, route }) {
    // console.log(route)

    const [data, setData] = useState([]);


    //script dijalankan ketika screen diakses
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('kereta')
            .select('id_kereta, nama_kereta, harga, jam, kelas')
            .match({ id_kotaasal: route.params.Kotaasal, id_kotatujuan: route.params.Kotatujuan, tanggal: route.params.date })
            .order('id_kereta', { ascending: true });
        //mengisi state data
        setData(data);
    }

    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                height: 60
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daftar kereta" />
            </Appbar.Header>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id_kereta}
                renderItem={({ item, index }) => (
                    < View key={index} >
                        <TouchableOpacity onPress={() => navigation.navigate('Pembeliantiket', { id_reservasi: route.params.Kotaasal, id_tujuan: route.params.Kotatujuan, id_kereta: item.id_kereta, date: route.params.date, Penumpang: route.params.Penumpang })}>
                            <View style={{
                                backgroundColor: "lightgray",
                                marginHorizontal: 20,
                                height: 200,
                                borderRadius: 10,
                                marginTop: 20,
                            }}>
                                <Image source={require('./kai.png')} style={{
                                    width: 70, height: 25, marginTop: 25,
                                    marginLeft: 20
                                }} />
                                <View style={{
                                    marginLeft: 20, marginTop: 15, flexDirection: "row",
                                }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: "blue",
                                        flex: 1
                                    }}
                                    >{item.nama_kereta}</Text>
                                    <Text style={{
                                        marginLeft: 150,
                                        fontWeight: "bold",
                                        color: "blue",
                                        flex: 1
                                    }}>Rp. {item.harga}</Text>
                                </View>

                                <View style={{
                                    marginLeft: 20, flexDirection: "row",
                                }}>
                                    <Text>{item.kelas}</Text>
                                </View>
                                {/* Tujuan */}
                                {/* <View style={{
                                    marginLeft: 20, marginTop: 15, flexDirection: "row",
                                }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: "blue"
                                    }}
                                    >{Kotaasal} - {Kotatujuan}</Text>
                                </View> */}

                                <View key={index} style={{
                                    marginLeft: 20, marginTop: 35, flexDirection: "row",
                                }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: "blue"
                                    }}
                                    >{item.jam}</Text>
                                </View>
                                <View style={{
                                    marginLeft: 20, flexDirection: "row"
                                }}>
                                    <Text style={{
                                        fontSize: 13,
                                        flex: 1
                                    }}>{route.params.date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </>
    )
}
export default Daftarkereta;