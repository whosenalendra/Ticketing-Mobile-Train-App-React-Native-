import React from 'react';
import { Appbar } from 'react-native-paper';

function SettingScreen({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack("HomeScreen")} />
        <Appbar.Content title="Setting" />
      </Appbar.Header>
    </>
  );
}

export default SettingScreen;