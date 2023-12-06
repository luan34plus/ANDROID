import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';

import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Itens from './components/Itens';	
import Texto from '../components/Texto';

export default function Cesta({ topo, detalhes, itens }) {
  return <>
  <FlatList
  data={itens.lista}
  renderItem={item}
  keyExtractor={({nome})=> nome}
  ListHeaderComponent={() => {
  return <>
    <Topo {...topo} />
    <View style={estilos.cesta}>
      <Detalhes {...detalhes} />
      <Texto style={estilos.titulo}>{item.titulo}</Texto>
    </View>
</>
}}
/>
</>
}

const estilos = StyleSheet.create({
titulo:{
  color: "#464646",
  fontWeight: "bold",
  marginTop: 32,
  marginBottom: 8,
  fontsize: 20,
  linrHeight: 32,
},
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
