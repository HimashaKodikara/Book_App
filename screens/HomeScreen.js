import React, { useRef, useState } from "react";
import { Button,ImageBackground, DrawerLayoutAndroid, SectionList,TouchableOpacity,ScrollView,Text, StyleSheet, View } from "react-native";
import { Searchbar } from 'react-native-paper';

const App = ({navigation}) => {
  const drawer = useRef(null);
  
 
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = sections => setSearchQuery(sections);

  const image = {uri:"https://mobimg.b-cdn.net/v3/fetch/77/77b54e73aa6e6aee334586f0a86f7760.jpeg"};
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
       
    
       <ScrollView>
        <Searchbar 
        style={styles.search}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}/>
          <SectionList
          sections={[
              {title:'ACTION AND ADVENTURE',data:[<TouchableOpacity><Text onPress={() => navigation.navigate('LeeChild Book')} style={styles.item}>LEE CHILD</Text></TouchableOpacity>,<TouchableOpacity><Text onPress={() => navigation.navigate('LeeChild Book')} style={styles.item}>TREASURE ISALAND</Text></TouchableOpacity>,'THE COUNT OF MONTE CRISTO','DREAM TOWN']},
              {title:'HORROR',data:['STEPHEN KING','BRAM STOKER','THE EXORCIST','BIRD BOX','THE HUNGER','HOUSE OF LEAVES']},
              {title:'FANTACY',data:['THE FIFTH SEASON','SIX OF CROWS','THE LAST UNICORN','THE GANE OF THRONES']},
              {title:'HISTORICAL FICTION',data:['THE UNDERGROUND','WOLF HALL','HOEGOING','THE NIGHTINGALE','THE RED TENT']},
              {title:'DETECTIVE AND MYSTERY',data:['MURDER ON THE ORIENT','THE SWEETNESS','THE MOONSTONE','DA VINCI CODE']}
          ]}
          renderItem={({item})=><Text  style={styles.item}>{item}</Text>}

          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item,index) =>index}/>
          
     
       
        </ScrollView>
      
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      
      renderNavigationView={navigationView}
    >
       
      <View style={styles.containe}>
     
          <TouchableOpacity style={styles.button} onPress={() => drawer.current.openDrawer()}>
            <Text style={styles.buttontext}>Choose your favorite book</Text>
          </TouchableOpacity>
         
        
      </View>

    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({

  containe:{
    justifyContent:'center',
    padding:50,
    flex:1,

  },
  navigationContainer: {
    backgroundColor: "yellow",
    alignItems:'center'
  },
  
  scrollView: {
    
    paddingTop: 10
  },
  
  text:{
    fontSize:25,
    marginBottom:20
  },data:{
    marginBottom:10
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'lightgrey',
  },
  item:{
    padding:5,
    fontSize:18,
    height:44
  },button:{
    alignSelf:'stretch',
    alignItems:"center",
    padding:20,
    backgroundColor:'#59cbbd',
    marginTop:30,
  },
  buttontext:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  },search:{
    marginTop:10,
    marginBottom:10
  }
});

export default App;
