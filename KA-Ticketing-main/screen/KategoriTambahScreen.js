import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, Switch, List } from 'react-native-paper';
import supabase from '../supabase';

function KategoriTambahScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [status, setIsSwitchOn] = React.useState('false');

  const onToggleSwitch = () => setIsSwitchOn(!status);

  const onSimpan = async () => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
      .from('Kategori')
      .insert({
        nama: nama,
        penerbit: penerbit,
        status: status,
      });


    Alert.alert("Pesan", "Data berhasil disimpan");
    navigation.goBack()
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Tambah Kategori" />
      </Appbar.Header>

      <TextInput
        label="Nama"
        value={nama}
        onChangeText={text => setNama(text)}
      />

      <TextInput
        label="Penerbit"
        value={penerbit}
        onChangeText={text => setPenerbit(text)}
      />

      <List.Item
        title="Status"
        right={props => <Switch {...props}
          value={status} onValueChange={onToggleSwitch} />}
      />

      <Button
        icon="content-save"
        mode="contained"
        onPress={() => onSimpan()}
        style={{ margin: 10 }}
      >
        Simpan
      </Button>
    </>
  );
}

export default KategoriTambahScreen;