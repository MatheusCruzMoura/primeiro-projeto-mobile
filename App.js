import * as React from 'react';
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/homeScreen';
import ContactsScreen from './screens/contactsScreen';
import CadastroScreen from './screens/cadastroScrean';
import CadastroContatoScreen from './screens/cadastroContatoScrean';
import ContatoEdicaoScreen from './screens/contatoEdicaoScrean';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Contatos"
          component={ContactsScreen}
          options={({ navigation }) => ({
            title: 'Lista de Contatos',
            headerRight: () =>
              <Button
                icon={
                  <Icon
                    name="plus"
                    size={15}
                    color="white"
                  />
                }
                buttonStyle={{ paddingHorizontal: 17, paddingVertical: 15, borderRadius: 200 }}
                onPress={() => navigation.navigate('Cadastro de Contato')}
              />
          })}
        />

        <Stack.Screen name="Usuário" component={CadastroScreen} />
        <Stack.Screen name="Cadastro de Contato" component={CadastroContatoScreen} />
        <Stack.Screen name="Contato" component={ContatoEdicaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;