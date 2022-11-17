import React, { useEffect, useState } from "react";
import { View, FlatList } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import axios from 'axios';

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
    })

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider
            containerStyle={{ width: 396 }}
            onPress={() => navigation.navigate('Contato', { id: item.id, nome: item.nome, telefone: item.telefone, email: item.email })}
        >
            <Avatar
                size='medium'
                rounded
                source={require('../assets/profile.jpeg')}
            />

            <ListItem.Content style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.telefone}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}

export default ContactsScreen;