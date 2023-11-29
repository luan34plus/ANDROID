import {  Image, StyleSheet, Dimensions, Text, View,} from "react-native"

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta () {
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da cesta</Text>
    

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verdura</Text>

        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>

    <Text style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
    </Text>
    <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 570/ 768 * width
},
    titulo:{
        widht: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineheight: 26,
        color: "white",
        fontweight: 'bold',
        padding:16
    },
    nome: {
        color: "#464646",
        fontsize: 26,
        lineheight: 42,
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32
    },
    nomeFazenda:{
        fonteSize: 16,
        lineheight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})