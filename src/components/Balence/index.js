import { StyleSheet, Text, View } from 'react-native';

export default function Balence({saldo,gasto}) {
  return (
    <View style={styles.container}>

      <View style={styles.iten}>
        <Text style={styles.itenTitle}>Saldo</Text>

        <View style={styles.content}>
          <Text style={styles.carrenbySimble}>R$</Text>
          <Text style={styles.balence}>{saldo}</Text>

        </View>

      </View>
      <View style={styles.iten}>
        <Text style={styles.itenTitle}>Gastos</Text>
        <View  style={styles.content} >
          <Text style={styles.carrenbySimble}>R$</Text>
          <Text style={styles.balencgostoe}>{gasto}</Text>

        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingStart:18,
    paddingEnd:18,
    marginTop:-24,
    marginStart:14,
    marginEnd:14,
    borderRadius:4,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99
  },
  itenTitle:{
    fontSize:24,
    color:"#DaDaDa"
  },
  content:{
    flexDirection:"row",
    alignItems:"center"
  },
  carrenbySimble:{
   color:"#DaDaDa",
   marginRight:6

  },
  balence:{
    fontSize:22,
     color:"#2ecc71"
  },
  balencgostoe:{
    fontSize:22,
    color:"#e74c3c"
  }

});
