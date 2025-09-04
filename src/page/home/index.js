import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balence from '../../components/Balence';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name ="Mamadu Mutaro Ba"/>
        <Balence  saldo ="1.00.00" gasto= "300.00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
