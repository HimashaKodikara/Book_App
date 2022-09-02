import React from 'react';
import { StyleSheet,View,ImageBackground,Text,TextInput,TouchableOpacity ,placeholder} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import {useState} from 'react'


export default function RegisterScreen({navigation}){
    const image = {uri:"https://mobimg.b-cdn.net/v3/fetch/77/77b54e73aa6e6aee334586f0a86f7760.jpeg"}; 
    return(
       
    <View style={styles.container}>
         <ImageBackground source={image} resizeMode="cover">
        <Card style={styles.card}>
            <Card.Content>
       <View style = {styles.reforms}>
           <Text style={styles.header}>Registration</Text>
           <TextInput style={styles.textinput} placeholder='Your Name'
           underlineColorAndroid={'transparent'}/>

           <TextInput style={styles.textinput} placeholder='Your Email'
               underlineColorAndroid={'transparent'}/>

           < TextInput style={styles.textinput} placeholder='Your Password'
              secureTextEntry={true} underlineColorAndroid={'transparent'}/>

            <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.btnText}  onPress={() => navigation.navigate('Home')}>Sign Up</Text>
                
            </TouchableOpacity>
       </View>
       </Card.Content>
       </Card>
       </ImageBackground>
       </View>
    )
}

const styles =StyleSheet.create({
    card: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:150,
        marginBottom:150
    },
  header:{
      fontSize:30,
      paddingBottom:10,
      marginBottom:40,
      borderBottomColor:'#199187',
      borderBottomWidth:3,
      
  },textinput:{
    
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
    
      borderBottomColor:'green',
      borderBottomWidth:1,
      fontSize:20
  },
  button:{
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      backgroundColor:'#59cbbd',
      marginTop:30,
  },
  btnText:{
      color:'#fff',
      fontWeight:'bold'
  }
});