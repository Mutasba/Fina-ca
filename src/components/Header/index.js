import React from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const statusbarnigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Header({name}) {
    return (
        <View style={styles.conteiner}>

            <View style={styles.context}>

                <Text style={styles.username}>{name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.bottonuser}>

                    <Feather name="user" size={27} color="#fff"  />

                </TouchableOpacity>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#49056dff",
        paddingTop: statusbarnigth,
        flexDirection:"row",
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:50
    },
    context:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    username:{
        fontSize:18,
        color:"#fff",
        fontWeight:"bold"
    },
    bottonuser:{
        width:44,
        height:44,
        backgroundColor:"rgba(250,250,250,0.5)",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:44/2
    }

})