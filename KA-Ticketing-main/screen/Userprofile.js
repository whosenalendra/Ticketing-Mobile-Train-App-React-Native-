import React from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import { View, Text, Image, FlatList } from 'react-native';


function Userprofile({ navigation }) {
    return (
        <>
            <Appbar.Header style={{
                elevation: 0,
                shadowOpacity: 0,
            }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Detail Akun" />
            </Appbar.Header>
            <View style={{
                margin: 10,
                marginLeft: 22,
                flexDirection: "row"
            }}>
                <Text style={{
                    color: "#2445ed",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1
                }}>
                    Informasi pribadi
                </Text>
                <Button uppercase={false} style={{
                    marginTop: -7,
                }}>
                    <Text style={{
                        color: "orange"
                    }}>Ubah</Text>
                </Button>
            </View>
            <View style={{
                backgroundColor: "lightgray",
                margin: 15,
                marginTop: 5,
                borderRadius: 10,
                flexDirection: "row",
            }}
            >
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1
                }}>Nama Lengkap
                </Text>
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontSize: 17,
                    flex: 1
                }}>Reza Wahyu Abdillah
                </Text>

            </View>
            <View style={{
                backgroundColor: "lightgray",
                margin: 15,
                marginTop: -13,
                borderRadius: 10,
                flexDirection: "row"

            }}
            >
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1
                }}>No ID
                </Text>
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontSize: 17,
                    flex: 1
                }}>41520010031
                </Text>

            </View>
            <View style={{
                backgroundColor: "lightgray",
                margin: 15,
                marginTop: -13,
                borderRadius: 10,
                flexDirection: "row"

            }}
            >
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1
                }}>Alamat Email
                </Text>
                <Text style={{
                    margin: 10,
                    color: "black",
                    fontSize: 17,
                    flex: 1
                }}>rezawahyu151@gmail.com
                </Text>

            </View>
            <View style={{
                backgroundColor: "lightgray",
                margin: 15,
                marginTop: -13,
                borderRadius: 10,
                flexDirection: "row"

            }}
            >
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1
                }}>Nomor Telepon
                </Text>
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontSize: 17,
                    flex: 1
                }}>08781966029
                </Text>

            </View>
            <View style={{
                backgroundColor: "lightgray",
                margin: 15,
                marginTop: 20,
                borderRadius: 10,
                flexDirection: "row"

            }}
            >
                <Text style={{
                    margin: 20,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 17,
                }}>Ganti Kata Sandi
                </Text>

            </View>




        </>
    );
}

export default Userprofile;