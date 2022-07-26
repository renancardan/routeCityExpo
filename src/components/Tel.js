import React from 'react';
import styled from 'styled-components/native';
import  {  TextInputMask  }  from  'react-native-masked-text';
import { StyleSheet } from 'react-native';
import Api from '../Api';
//52 -criando o os inputs padronizados para usar em varios lugares
const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #fff;
    flex-direction: row;
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #999;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password, autoCapitalize, keyboardType,  setTe1}) => {
    const Styles = StyleSheet.create ({
        masked :{
            flex: 1,
            fontSize: 16,
            color: '#000',
            marginLeft: 10,
        }
    });

    const AnalizarTel = () =>{
       
        Api.AnaliseTel(value, setTe1)
       
     }

    // const validateEmail = (value) => {
    
    //     let resp =  value.toLowerCase().match(
    //        /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
    //      );
    //      console.log(resp);
    //      if(resp === null){
    //          if(value !== ''){
    //             setTel(true)
    //          }
            
    //      } else {
    //          setTel(false);
    //      }
    //  };

    return (
        <InputArea>
          <IconSvg width="24" height="24" fill="#000" />
            <TextInputMask
                  type = { 'cel-phone' } 
                  options = { { 
                    maskType : 'BRL' , 
                    withDDD : true , 
                    dddMask : '(99)' 
                  } } 
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor="#000"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                style = {Styles.masked}
                onBlur={()=>  AnalizarTel()
                }
                onFocus={()=>{
                    setTe1(false)
                }}
            />
        </InputArea>
    );
}