import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

import axios from "axios";

function CadastroContatoScreen({ navigation }) {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: nome,
            telefone: telefone,
            email: email
        }).then(function (response) {
            navigation.navigate('Contatos')
        }).catch(function (error) {
            console.log(error);

        });

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
            <Input
                label='Nome'
                placeholder='Nome do contato'
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#999' }}
                containerStyle={{ width: 300 }}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <Input
                label='E-mail'
                placeholder='e-mail do contato'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ width: 300 }}
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />

            <Input
                label='Número'
                placeholder='(**) *****-****'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ width: 300 }}
                onChangeText={(text) => setTelefone(text)}
                value={telefone}
                keyboardType="phone-pad"
                maxLength={15}
            />

            <Button
                title="Salvar"
                onPress={() => inserirDados()}
                buttonStyle={{ width: 290, marginTop: 10 }}
            />


        </View>
    );
}

export default CadastroContatoScreen;