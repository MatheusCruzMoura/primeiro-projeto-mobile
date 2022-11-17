import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    const cadastroUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then(userCredential => {
                alert('Conta criada!')
                userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
            <Input
                label='Nome'
                placeholder='Nome completo'
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <Input
                label='CPF'
                placeholder='***.***.***-**'
                leftIcon={{ type: 'font-awesome', name: 'id-card', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
                onChangeText={(text) => setCpf(text)}
                value={cpf}
                keyboardType="numeric"
                maxLength={11}
            />

            <Input
                label='Seu endereço de email'
                placeholder='exemplo@email.com'
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#999' }}
                containerStyle={{ marginBottom: 0, width: 300 }}
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
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
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />

            <Button
                title="Salvar"
                buttonStyle={{ width: 290, marginTop: 10 }}
                onPress={cadastroUsuario}
            />


        </View>
    );
}

export default CadastroScreen;