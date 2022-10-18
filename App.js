import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Avatar, Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const user = {
  name: 'Matheus',
  avatar: 'assets/profile.jpeg'
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar
        size="xlarge"
        rounded
        source={require('./assets/profile.jpeg')}
        onPress={() => console.log("Works!")}
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
        buttonStyle={{ width: 290, marginBottom: 10 }}
      />

      <Button
        title="Cadastrar-se"
        type="outline"
        buttonStyle={{ width: 290 }}
      />


    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;