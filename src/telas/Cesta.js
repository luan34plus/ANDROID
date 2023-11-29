import {  Image, StyleSheet, Dimensions } from "react-native"

import topo from '../../assents/topo.png'

const width = Dimensions.get('screen').width

export default function Cesta () {
    return <>
    <Image source={topo} style={estilos.topo}/>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 570/ 768 * width
},
    titulo:{
        widht: "100%",
        position: "absoute",
        textAlign: "center",
        fontSize: 16,
        lineheight: 26,
        color: "white",
        fontweight: 'bold',
        padding:16
    }
})