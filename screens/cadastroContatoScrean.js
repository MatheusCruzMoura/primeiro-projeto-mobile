import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

function inserirDados() {

    axios.post('http://professornilson.com/testeservico/clientes'
        , {

            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);

        });

}

function CadastroContatoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
            <Input
                label='Nome'
                placeholder='Nome do contato'
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#999' }}
                containerStyle={{ width: 300 }}
            />

            <Input
                label='E-mail'
                placeholder='e-mail do contato'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ width: 300 }}
            />

            <Input
                label='Número'
                placeholder='(**) *****-****'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ width: 300 }}
            />

            <Button
                title="Salvar"
                onPress={() => navigation.navigate('Contatos')}
                buttonStyle={{ width: 290, marginTop: 10 }}
            />


        </View>
    );
}

export default CadastroContatoScreen;