import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balence from '../../components/Balence';
import Moviment from '../../components/Moviment';

const llst = [
    {
        id: 1,
        label: "Boleto de luz",
        value: "300.00",
        date: "05/08/2024",
        type: 0//dispesa
    },
    {
        id: 2,
        label: "pix recebido",
        value: "200.00",
        date: "05/05/2024",
        type: 1//entrada
    },
    {
        id: 3,
        label: "salario",
        value: "300.00",
        date: "03/09/2024",
        type: 1//entrada
    }

]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Mamadu Mutaro Ba" />
            <Balence saldo="1.00.00" gasto="300.00" />
            <Text style={styles.text}>Ultimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={llst}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviment data={item} />
                }


            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
