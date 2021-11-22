import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ImageBackground, Pressable}  from 'react-native';
// import { hotelsObjArray } from './assets/hotels-data';
import { HotelsGallery } from './components/HotelsGallery'
import { HotelPage } from './components/HotelPage';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import { createPortal } from 'react-dom';


export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotel: undefined,
      enterd: 1
    }
  }
  handlePress(e) {
    this.setState({
      hotel: e
    });
    alert(e.name);
 }

 handleReturn() {
     this.setState({
        hotel: undefined
     })
 }
 
render() {
    console.log(this.state.hotel)
  return (
    < SafeAreaView style={styles.container} >
      <ImageBackground  resizeMode="cover" style={styles.image} source={{uri: "https://www.israel21c.org/wp-content/uploads/2017/08/shutterstock_turkishmarket-1168x657.jpg"}}>
      <Text style={styles.header}>
      Search And Book Hotels In Haifa
      </ Text>
      <NativeRouter >
          <Route exact path="/" exact>
                 <Pressable >
                     <HotelsGallery onPress={(e) => {this.handlePress(e)}} />
                     { this.state.hotel === undefined ? <Redirect to="/"/> : <Redirect to="/hotel-page"/>}
                 </Pressable>
        </Route>
        <Route exact path="/hotel-page">
            <HotelPage hotel={this.state.hotel} onPress={() => this.handleReturn()} />
            { this.state.hotel === undefined ? <Redirect to="/"/> : <Redirect to="/hotel-page"/>}
        </Route>
     </NativeRouter>
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
