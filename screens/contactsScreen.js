import { View } from 'react-native'
import { Text, Avatar, ListItem } from 'react-native-elements'

function ContactsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>


            <ListItem containerStyle={{ width: 396, borderBottomWidth: 4 }}>
                <Avatar
                    size='large'
                    rounded
                    source={require('../assets/profile.jpeg')}
                />

                <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                    <Text h4>Matheus Cruz 1</Text>
                    <Text>(81) 91234-5678</Text>
                </View>
            </ListItem>

            <ListItem containerStyle={{ width: 396, borderBottomWidth: 4 }}>
                <Avatar
                    size='large'
                    rounded
                    source={require('../assets/profile.jpeg')}
                />

                <View style={{ width: 255, marginLeft: 5, alignItems: 'flex-start' }}>
                    <Text h4>Matheus Cruz 2</Text>
                    <Text>(81) 99876-5432</Text>
                </View>
            </ListItem>




        </View>
    );
}

export default ContactsScreen;