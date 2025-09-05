import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti';
export default function Moviment({ data }) {

    const [showValue, setShowValue] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>

            <Text style={styles.data} >{data.date}  </Text>

            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>

                {showValue ? (
                    <AnimatePresence exitBeforeEnter >

                        <MotiText style={data.type == 1 ? styles.value : styles.exp}
                        from={{
                            translateX:100
                        }}
                        animate={{
                            translateX:0
                        }}
                        transition={{
                            type:"spring",
                            direction:500
                        }}
                        >
                            {data.type == 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>

                ) : (<AnimatePresence exitBeforeEnter>

                    <MotiView style={styles.esconder}
                    from={{opacity:0}} animate={{opacity:1}} transition={{type:"spring"}}
                    >
                    </MotiView>

                </AnimatePresence>
                )}

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
    esconder: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8
    }
})