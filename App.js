import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Chip
        title="Solid Chip"
      />

      <Chip
        title="Disabled Chip"
        disabled
      />

      <Chip
        title="Outlined Chip"
        type="outline"
      />

      <Chip
        title="Outlined & Disabled"
        type="outline"
        disabled
      />

      <Chip
        title="Left Icon Chip"
        icon={{
          name: "bluetooth",
          type: "font-awesome",
          size: 20,
          color: 'white',
        }}
      />

      <Chip
        title="Right Icon Chip"
        icon={{
          name: "close",
          type: "font-awesome",
          size: 20,
          color: "white",
        }}
        iconRight
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
