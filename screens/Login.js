import React from 'react';
import { ScrollView,ImageBackground, StyleSheet,View,TextInput } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import {useState} from 'react'
function LoginScreen ({ navigation }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const image = {uri:"https://mobimg.b-cdn.net/v3/fetch/77/77b54e73aa6e6aee334586f0a86f7760.jpeg"};
    return (
        <ScrollView style={styles.scrollView}>
          <ImageBackground source={image} resizeMode="cover">
             <View style={styles.container}>
            <View style={styles.inputView}>  
            <TextInput
           style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
       
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    </View>
          <Card style={styles.card}>
            <Card.Title  />
            <Card.Content>
              <Button mode="contained" onPress={() => navigation.navigate('Home')}>
                Login
              </Button>
              <Button style={{marginTop:15}} mode="contained" onPress={() => navigation.navigate('Register')}>
                Register
              </Button>
            </Card.Content>
          </Card>
          </ImageBackground>
        </ScrollView>
      )
    }

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:150,
    marginBottom:80
  },TextInput:{
    height: 50,
   
padding: 10,
marginLeft: 20,
height: 50,
padding: 10,
margin: 20,
textAlign:'center',
backgroundColor:'lightpink',
borderRadius:80,
fontSize:15
  }
  ,inputView:{
    marginTop:150
  }
});

export default LoginScreen