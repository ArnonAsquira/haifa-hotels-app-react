import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ImageBackground, Pressable}  from 'react-native';
// import { hotelsObjArray } from './assets/hotels-data';
import { HotelsGallery } from './components/HotelsGallery'
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from './Home'
import { HotelPage } from './components/HotelPage';



export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotel: Home.state
    }
  }

render() {

  console.log(Home);

  return (
    < SafeAreaView style={styles.container} >
      <ImageBackground  resizeMode="cover" style={styles.image} source={{uri: "https://www.israel21c.org/wp-content/uploads/2017/08/shutterstock_turkishmarket-1168x657.jpg"}}>
    
          <Home />

       < StatusBar /> 
       </ImageBackground>
    </ SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63cdda',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "scroll"
  },
  hotelCard: {
    width: 250,
    height: 250,
    backgroundColor: "#cf6a87",
    margin: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  header: {
    backgroundColor:"#303952",
    marginTop: 50,
    fontSize: 20,
    color: "#f19066"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
