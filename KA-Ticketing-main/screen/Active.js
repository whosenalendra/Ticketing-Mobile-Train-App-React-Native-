import { View, Text, Image, ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import supabase from '../supabase';
import DatePicker from 'react-native-datepicker';


import Searchscreen from './Searchscreen';


function Active({ navigation }) {

    const [Kotaasal, setKotaasal] = useState("");
    const [dataPicker, setDataPicker] = useState([]);
    const [Kotatujuan, setKotatujuan] = useState("");
    const [Penumpang, setPenumpang] = useState("");
    const [date, setDate] = useState('');


    //script dijalankan ketika screen diakses
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('reservasi')
            .select('id_reservasi, kotaasal, kotatujuan, penumpang')
            .order('id_reservasi', { ascending: true });
        //mengisi state data
        setDataPicker(data);
    }

    const onCari = () => {
        navigation.navigate('Daftarkereta', {
            Kotaasal: Kotaasal,
            Kotatujuan: Kotatujuan,
            date: date,
            Penumpang: Penumpang
        })

    }

    
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
                    <Image source={require('./png1.png')} style={{ width: 20, height: 15, marginTop: 25 }}/>
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
                        selectedValue={Kotaasal}
                        onValueChange={(value) => setKotaasal(value)}
                    >
                        <Picker.Item label="Pilih Kota asal" value="" />
                        {dataPicker.map((row) =>
                            <Picker.Item label={row.kotaasal} value={row.id_reservasi} />
                        )}
                    </Picker>

                </View>
                <View style={{
                    marginLeft: 16,
                    width: 150,
                    flex: 1

                }}>
                    <Picker
                        selectedValue={Kotatujuan}
                        onValueChange={(value) => setKotatujuan(value)}
                    >
                        <Picker.Item label="Pilih Kota tujuan" value="" />
                        {dataPicker.map((row) =>
                            <Picker.Item label={row.kotatujuan} value={row.id_reservasi} />
                        )}
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
            </View>
            <View style={{ marginTop: 29 }}>
                {/* input tanggal */}
                <DatePicker
                    date={date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 25,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 60,
                        },
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
            </View>
            {/* penumpang */}
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
                <TextInput
                    value={Penumpang}
                    keyboardType="number-pad"
                    style={{
                        height: 20,
                        marginLeft: 10,
                        backgroundColor: "transparent",
                        marginTop: 20,
                    }}
                    onChangeText={text => setPenumpang(text)}
                />



            </View>
            <Button
                mode="contained"
                uppercase={false}
                onPress={onCari}
                style={{
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    height: 40,
                    marginBottom: 20,
                    width: 260,
                    marginLeft: 40
                }}
            >
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

export default Active;