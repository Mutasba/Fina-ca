import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons"

export default function Ations() {
    return (
        <ScrollView style={styles.conteiner} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaBotton}>
                    <AntDesign name='addfolder' size={26} color="#000" />
                </View>
                <Text style={styles.labelBotton}>Entrada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaBotton}>
                    <AntDesign name='tagso' size={26} color="#000" />
                </View>
                <Text style={styles.labelBotton}>Compar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaBotton}>
                    <AntDesign name='creditcard' size={26} color="#000" />
                </View>
                <Text style={styles.labelBotton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaBotton}>
                    <AntDesign name='barcode' size={26} color="#000" />
                </View>
                <Text style={styles.labelBotton}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaBotton}>
                    <AntDesign name='setting' size={26} color="#000" />
                </View>
                <Text style={styles.labelBotton}>Conta</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    conteiner: {
        maxHeight: 200,
        marginTop: 18,
        marginBottom: 14,
        paddingStart: 14,
        paddingEnd: 14,
        height:150
    },

    actionButton: {
        alignSelf: "center",
        marginRight: 32

    },
    areaBotton: {
        backgroundColor: "#ecf0f1",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    labelBotton: {
        marginTop: 4,
        fontWeight: "bold",
        textAlign: "center"

    }
})