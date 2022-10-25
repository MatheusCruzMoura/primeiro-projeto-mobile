import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";
// import Icon from 'react-native-vector-icons/FontAwesome';

function CadastroScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
            <Input
                label='Nome'
                placeholder='Nome completo'
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
            />

            <Input
                label='CPF'
                placeholder='***.***.***-**'
                leftIcon={{ type: 'font-awesome', name: 'id-card', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
            />

            <Input
                label='Seu endereço de email'
                placeholder='exemplo@email.com'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
            />

            <Input
                label='Senha'
                placeholder='Senha'
                leftIcon={{
                    type: 'font-awesome',
                    name: 'lock',
                    color: '#999'
                }}
                secureTextEntry={true}
                containerStyle={{ width: 300 }}
            />

            <Button
                title="Salvar"
                // onPress={() => navigation.navigate('Contatos')}
                buttonStyle={{ width: 290, marginTop: 10 }}
            />


        </View>
    );
}

export default CadastroScreen;