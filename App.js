import { StatusBar } from 'expo-status-bar';
import {useState, useEffect} from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import{FlatList, SafeAreaView, StatusBar, StyleSheet, View}
import Picker from '@react-native-picker/picker';


import NotaEditor from './src/componentes/NotaEditor';
import Nota from './src/componentes/NotaEditor;
 import from  {criarTabela, buscarNotas} from './src/services/Notas';

 export default function App(){
  const [ notas, setNotas] = useState([]);
  const [ notaSel, setNotaSel] = useState({});
  const [ categoria, setCategoria] = useState('*');


  useEffect(()=>{
    criarTabela();
  }, []);
  useEffect(()=>{
    async function iniciarNotas(){;
    await mostrarNotas();
    }, [categorias]);

  
    async function mostrarNotas(){
      const  tarefas = await buscarNotas (categorias);
      setNotas(tarefas);
    }

    return(
      <SafeAreaView> style={estilos.container}
        <view style={estilos.modalPicker}>
          <Picker> selectedValue={categoria}
          onValueChange={(itemValue)=> setCategoria(itemValue)}
        
                        <Picker.Item Label="Pessoal" value="Pessoal"/>
                        <Picker.Item Label="Trabalho" value="Trabalho"/>
                        <Picker.Item Label="Outros" value="Outros"/>
          </Picker>
        </view>
        <FlatList data={notas}>
          renderItem={(nota)=>(
            <Nota item={nota.item} setNotaSel={ setNotaSel}
            ></>

          )}
          keyExtractor={(nota)=> nota.id}</>
      <NotaEditor showNotas={mostarNotas}
        notaSel={notaSel}
        setNotaSel={setNotaSel}
/>
        </FlatList>
      </SafeAreaView>

    );

 }

 const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
 
  modalPicker: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#eee',
    margin: 10,
  },
})

