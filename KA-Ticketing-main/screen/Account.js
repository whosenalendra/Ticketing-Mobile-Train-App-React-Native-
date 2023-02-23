import React from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import { View, Text, Image, FlatList } from 'react-native';
import Userprofile from './Userprofile';
import Daftarpenumpang from './Daftarpenumpang';

function Account({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.Content title="Akun" />
            </Appbar.Header>
            <View>
                <View style={{
                    backgroundColor: "lightgray",
                    margin: 20,
                    height: 180,
                    borderRadius: 10
                }}>

                    <List.Item
                        style={{
                            marginTop: 30,
                            marginLeft: 14
                        }}
                        title="Reza Wahyu Abdillah"
                        description="41520010031"
                        left={props => <Image {...props} source={require('./deadpool.jpeg')}
                            style={{ width: 50, height: 50, borderRadius: 30 }} />}
                    />
                    <Button
                        onPress={() => navigation.navigate('Userprofile')}
                        mode="contained"
                        style={{ margin: 20, borderRadius: 10, marginTop: 20 }}>
                        Lihat Profil Saya
                    </Button>
                </View>
                <Button
                    onPress={() => navigation.navigate('Daftarpenumpang')}
                    style={{
                        backgroundColor: "lightgray",
                        margin: 20,
                        marginTop: 35,
                        borderRadius: 10,
                        flexDirection: "row"
                    }}>
                    <Text style={{
                        margin: 16,
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 15,
                    }}>Daftar Penumpang
                    </Text>


                </Button>
                {/* Metode Pembayaran Saya */}
                <Button
                    onPress={() => navigation.navigate('Metodepembayaran')}
                    style={{
                        backgroundColor: "lightgray",
                        marginTop: -17,
                        margin: 20,
                        flexDirection: "row",
                        borderRadius: 10
                    }}>
                    <Text style={{
                        color: "black",
                        margin: 16,
                        fontWeight: "bold",
                        fontSize: 15

                    }}>Metode Pembayaran Saya
                    </Text>
                </Button>
                <Button style={{
                    backgroundColor: "lightgray",
                    margin: 20,
                    marginTop: -17,
                    flexDirection: "row",
                    borderRadius: 10
                }}>
                    <Text style={{
                        color: "black",
                        margin: 16,
                        fontWeight: "bold",
                        fontSize: 15

                    }}>Bahasa
                    </Text>

                </Button>
                <Button style={{
                    backgroundColor: "lightgray",
                    margin: 20,
                    marginTop: -17,
                    flexDirection: "row",
                    borderRadius: 10
                }}>
                    <Text style={{
                        color: "black",
                        margin: 16,
                        fontWeight: "bold",
                        fontSize: 15

                    }}>Pusat Bantuan
                    </Text>

                </Button>
                <Button style={{
                    backgroundColor: "lightgray",
                    margin: 20,
                    marginTop: -17,
                    flexDirection: "row",
                    borderRadius: 10
                }}>
                    <Text style={{
                        color: "black",
                        margin: 16,
                        fontWeight: "bold",
                        fontSize: 15

                    }}>Keluar
                    </Text>

                </Button>
                <Text style={{
                    margin: 20,
                    marginLeft: 140,
                    color: "lightgray"
                }}>Versi aplikasi 0.1</Text>
            </View>

        </>
    );
}

export default Account;