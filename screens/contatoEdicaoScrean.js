import React, { useState, useEffect } from 'react';

import { View } from 'react-native';
import { Input, Button } from "react-native-elements";

import axios from "axios";

function ContatoEdicaoScreen({ route, navigation }) {
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    async function alterarDados() {
        await axios.put("http://professornilson.com/testeservico/clientes/" + id, {
            nome: nome,
            email: email,
            telefone: telefone
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function excluirDados() {

        axios.delete("http://professornilson.com/testeservico/clientes/" + id)
            .then(function (response) {
                console.log(response);
                navigation.navigate('Contatos')
            }).catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        if (route.params) {
            const { id } = route.params;
            const { nome } = route.params;
            const { email } = route.params;
            const { telefone } = route.params;

            setNome(nome);
            setId(id);
            setEmail(email);
            setTelefone(telefone);
        }
    }, []);

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
                title="Editar"
                onPress={() => alterarDados()}
                buttonStyle={{ width: 290, marginTop: 10 }}
            />

            <Button
                title="Excluir"
                onPress={() => excluirDados()}
                buttonStyle={{ width: 290, marginTop: 10, backgroundColor: '#ff3933' }}
            />


        </View>
    );
}

export default ContatoEdicaoScreen;