import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

import { firebaseConfig } from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        userCredential.user;
        navigation.navigate('Contatos')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar
        size="xlarge"
        rounded
        source={require('../assets/profile.jpeg')}
        activeOpacity={0.7}
        containerStyle={{ marginBottom: 60, backgroundColor: '#bbb' }}
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
        title="Login"
        onPress={login}
        buttonStyle={{ width: 290, marginBottom: 10 }}
      />

      <Button
        title="Cadastrar-se"
        type="outline"
        onPress={() => navigation.navigate('Usuário')}
        buttonStyle={{ width: 290 }}
      />


    </View>
  );
}

export default HomeScreen;