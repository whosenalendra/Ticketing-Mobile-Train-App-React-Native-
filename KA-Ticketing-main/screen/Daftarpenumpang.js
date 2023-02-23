import React from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import { View, Text, Image, FlatList } from 'react-native';
import Userprofile from './Userprofile';

function Daftarpenumpang({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daftar Penumpang" />
            </Appbar.Header>
            <Text style={{
                textAlign: "center",
                marginTop: 20,
                color: "#000"
            }}>
                Anda dapat menambahkan hingga 25 orang
            </Text>
            <Button
                uppercase={false}
                mode="contained"
                style={{ margin: 10, borderRadius: 10, marginTop: 630, backgroundColor: "orange", height: 40 }}
            >
                Daftar Penumpang
            </Button>



        </>
    );
}

export default Daftarpenumpang;