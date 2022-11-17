import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";


import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function HomeScreen({ navigation }) {
  

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
        title="Login"
        onPress={() => navigation.navigate('Contatos')}
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