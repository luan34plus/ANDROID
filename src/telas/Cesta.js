import {  Image, StyleSheet, Dimensions } from "react-native"

import topo from '../../assents/topo.png'

const width = Dimensions.get('screen').width

export default function Cesta () {
    return <>
    <Image source={topo} style={estilos.topo}/>
    </>
}

const estilos = StyleSheet.create({
    topo: ()
})