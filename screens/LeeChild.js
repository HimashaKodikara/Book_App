import React from 'react';
import { ScrollView,Text,Image,ImageBackground, StyleSheet,View,TextInput } from 'react-native';
import { Button, Card } from 'react-native-paper';
export default function Book(){

    
    return(
        <ScrollView style={styles.container}>
            <Card style={styles.heading}>
                <Text style={styles.hd}>THE SENTINEL</Text>
                <Text style={styles.hd}>LEE CHILD</Text>
            </Card>
            <Card style={styles.paragaph}>
                <View style={styles.image}>
            <Image
            source={{
               
              height: 300,
              width: 200,
             
              uri :"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFxsNl_9O7Ry9Iv32eqGEv0NuemNH76FzONDPRvyhoFfwI0EVH"
            }}
           
          />
          </View>
            <Text style={styles.author}>Author: Lee Child </Text>
          <Text></Text>
           <Text style={styles.series}>Series: Jack Reacher </Text>
           <Text></Text>
           <Text style={styles.price}>
                Price :$56
            </Text>
           <Text></Text>
           <Text style={styles.des}>
               Description :

           The Sentinel is the 25th novel in the Jack Reacher series and was published on 27 October 2020. It is the first Jack Reacher book to be co-authored by James Grant and his younger brother Andrew Grant but published using their respective pen names of Lee Child and Andrew Child. Wikipedia
Originally published: October 27, 2020
What is The Sentinel by Lee Child about?
The Sentinel will be the 26th book in Child's bestselling series, and will follow the events of last year's Blue Moon. This time around, Reacher's wandering ways will take him to Nashville, Tennessee, where he uncovers a town full of people with dark and dangerous secrets</Text>
           
          
           </Card>
        </ScrollView>
    )
  
}

const styles =StyleSheet.create({
   container:{
       padding:10
   },
   des:{
      fontSize:20,
      marginBottom:50,
      padding:10,
      
   },
   author:{
       fontSize:20,
       paddingLeft:5
   },
   series:{
       fontSize:20,
       paddingLeft:5
   },
   price:{
       fontSize:20,
       paddingLeft:5
   },heading:{
      backgroundColor:'red'
   },hd:{
       textAlign:'center',
       fontSize:30,
       color:'white'
   },paragaph:{
       marginTop:15,
       marginBottom:40,
       backgroundColor:'#ffd700'
   },
   image:{
       margin:10,
       borderRadius:80
   }
})