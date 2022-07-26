import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Main from '../screens/main';
import Camera from '../screens/camera';
import Aposta from '../screens/Apostas';
import Cambista from '../screens/Cambista';
import Jogo from '../screens/Jogos';
import Rede from '../screens/Rede';
import Financeiro from '../screens/Financeiro';
import {FontAwesome} from "@expo/vector-icons";
import { UserContext } from '../contexts/UserContext';
import Api from '../Api';


const Tab = createBottomTabNavigator();

export default function Routes() {
  const { dispatch: userDispatch } = useContext(UserContext);
 const { state: userState } = useContext(UserContext);
 const [Venc, setVenc] = useState(0);
 const [Rec, setRec] = useState(0);
 const [DatVenc, setDatVenc] = useState(0);
 const [Notif, setNotif] = useState(0);
 const [NomeComp, setNomeComp] = useState("");
 const [Tel, setTel] = useState("");
 const [VersBanc, setVersBanc] = useState("");

 useEffect(() => {
  inicial();

 }, [])

 useEffect(() => {
  Receber();

 }, [Rec])

 useEffect(() => {
 Noficicar();

 }, [Notif])

 useEffect(() => {
 VerNome();
 
  }, [NomeComp])

  useEffect(() => {
    Telefone();
   
    }, [Tel])

 useEffect(() => {
  Vencimento();

 }, [Venc])

 useEffect(() => {
  VencimentoData();

 }, [DatVenc])

 useEffect(() => {
  VendoVersao();

 }, [VersBanc])


 const inicial = ()=>{
 Api.DadosCli(Venc, setVersBanc, setVenc, setRec, setDatVenc, setNotif, setNomeComp, setTel)


 }

 const Receber = ()=>{
  userDispatch({
    type: 'setNome',
    payload:{
      nome: Rec
    }
  });



 }

 const VendoVersao = ()=>{
  userDispatch({
    type: 'setVersaoBanco',
    payload:{
      versaoBanco: VersBanc
    }
  });



 }
 const Noficicar = ()=>{
  userDispatch({
    type: 'setNoti',
    payload:{
      Noti: Notif
    }
  });



 }

 const VerNome = ()=>{
  userDispatch({
    type: 'setNomecompleto',
    payload:{
      nomeCompleto: NomeComp
    }
  });



 }

 const Telefone = ()=>{
  userDispatch({
    type: 'setTelefone',
    payload:{
      telefone: Tel
    }
  });



 }

 const Vencimento = ()=>{


  userDispatch({
    type: 'setData_nasc',
    payload:{
      data_nasc: Venc
    }
  });

 }

 const VencimentoData = ()=>{


  userDispatch({
    type: 'setDatAti',
    payload:{
      DatAti: DatVenc
    }
  });

 }
  

    return (
      

        <Tab.Navigator 
        tabBarOptions={{
          style:{
            backgroundColor:"#000",
            borderTopColor: "transparent",
          },
          activeTintColor:"#FFF",
          tabStyle:{
            paddingBottom:5,
            paddingTop:5,
          }
        }}
        >
            <Tab.Screen name="Aposta" component={Aposta} 
             options={{
              tabBarIcon: ({size, color}) => (
                <FontAwesome name="futbol-o" size={size} color={color}/>
  
              )
            }}
          />
          <Tab.Screen name="Jogos" component={Jogo} 
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesome name="flag-checkered" size={size} color={color}/>

            )
          }}
          />
        
          <Tab.Screen name="Financeiro" component={Financeiro} 
             options={{
              tabBarIcon: ({size, color}) => (
                <FontAwesome name="dollar" size={size} color={color}/>
  
              )
            }}
          />
          <Tab.Screen name="Rede" component={Rede}
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesome name="sitemap" size={size} color={color} />
            )
          }}
          />
          <Tab.Screen name="Cambista" component={Cambista} 
             options={{
              tabBarIcon: ({size, color}) => (
                <FontAwesome name="calculator"  size={size} color={color}/>
  
              )
            }}
          />

        </Tab.Navigator>
      
    );
  }