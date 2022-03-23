<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
=======
import {StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
>>>>>>> 3013c9f (1번)

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Tab Two</Text>
=======
      <Text style={styles.title}>Tab Three</Text>
>>>>>>> 3013c9f (1번)
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
<<<<<<< HEAD
=======
      <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
>>>>>>> 3013c9f (1번)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
=======
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
>>>>>>> 3013c9f (1번)
  },
  separator: {
    marginVertical: 30,
    height: 1,
<<<<<<< HEAD
    width: "80%",
=======
    width: '80%',
>>>>>>> 3013c9f (1번)
  },
});
