import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Moviment({ data }) {

    const [showValue, setShowValue] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={()=>setShowValue(!showValue)}>

            <Text style={styles.data} >{data.date}  </Text>

            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>

                {showValue ?
                    <Text style={data.type == 1 ? styles.value : styles.exp}>
                        {data.type == 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                    :
                    <View style={styles.esconder}>
                    </View>
                }

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8
    },
    data: {
        color: "#Dadada",
        fontWeight: "bold"
    },
    label: {
        fontWeight: "bold",
        fontSize: 16
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2ecc71"
    },
    exp: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e74c3c"
    },
    esconder:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:"#dadada",
        borderRadius:8
    }
})