import React, { useEffect, useState } from "react";
import { View } from 'react-native'
import { Text, Avatar, ListItem } from 'react-native-elements'
import axios from 'axios';
import { ScrollView } from "react-native";

// const data = [
//     {
//         nome: 'Amy Farha',
//         telefone: '(81) 91234-5678'
//     },
//     {
//         nome: 'Chris Jackson',
//         telefone: '(81) 99876-5432'
//     }
// ]

function ContactsScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function resgatarDados() {
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
            )
            setData(result.data);
        }
        resgatarDados();
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

            <ScrollView>
                {
                    data.map((l, i) => (
                        <ListItem key={i} bottomDivider
                            containerStyle={{ width: 396 }}
                            onPress={() => navigation.navigate('Contato')}
                        >
                            <Avatar
                                size='medium'
                                rounded
                                source={require('../assets/profile.jpeg')}
                            />

                            <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                                <Text h4>{l.nome}</Text>
                                <Text>{l.telefone}</Text>
                            </View>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default ContactsScreen;