import React from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import { View, Text, Image, FlatList } from 'react-native';
import Userprofile from './Userprofile';
import { MaterialIcons } from '@expo/vector-icons';

function Metodepembayaran({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Metode Pembayaran Saya" />
            </Appbar.Header>
            <View style={{
                marginLeft: 120,
                marginTop: 150
            }}>
                <MaterialIcons name="payment" size={150} color="lightgray" style={{
                    alignItems: "center"
                }} />
            </View>
            <Text style={{
                textAlign: "center",
                marginTop: 30,
                color: "lightgray",
                fontSize: 23,
                fontWeight: "bold"
            }}>
                Metode Pembayaran Masih Kosong
            </Text>
            <Text style={{
                textAlign: "center",
                marginTop: 5,
                margin: 45,
                color: "lightgray",
                fontSize: 16,
                fontWeight: "bold"
            }}>
                Silahkan tambahkan kartu debit/ kreditatau E-Wallet anda untuk mempermudah proses pembayaran anda
            </Text>
            <Button
                uppercase={false}
                mode="contained"
                style={{ margin: 10, borderRadius: 10, marginTop: 210, backgroundColor: "orange", height: 40 }}
            >
                Tambah Metode Pembayaran
            </Button>



        </>
    );
}

export default Metodepembayaran;