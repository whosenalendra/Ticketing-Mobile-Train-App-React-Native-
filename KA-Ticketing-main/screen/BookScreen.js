import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Appbar, Button, Switch, List } from 'react-native-paper';
import supabase from '../supabase';

function BookScreen({ navigation }) {
    const [data, setData] = useState([]);

    //script dijalankan ketika screen diakses
    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('Buku')
            .select('id, judul, stok')
            .order('id', { ascending: true});
        setData(data);
    }
        
    
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Buku" />
            </Appbar.Header>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => (
                    <List.Item
                        key={index}
                        title={item.judul}
                        description={item.stok}
                        left={props => <List.Icon {...props} icon={item.status ? "check" : "folder"}/>}
                        right={props => <List.Icon {...props} icon="pencil" />}
                        onPress={() => navigation.navigate('KategoriUbahScreen', {id: item.id})}
                    />
                 )}
            />

            <Button
                icon="plus"
                mode="contained"
                onPress={() => navigation.navigate('KategoriTambahScreen')}
                style={{ margin: 10 }}
            >
                Tambah Buku
            </Button>
        </>
    );
}

export default BookScreen;