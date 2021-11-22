import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable, Button} from 'react-native';
import { hotelsObjArray } from '../assets/hotels-data';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";

export class HotelPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            goBack: undefined
        }
    }

    render() {
        if (!this.props.hotel) return null
        return (
         <View style={styles.hotelPage}>
              <View >
                 <Image source={{uri: this.props.hotel.img}} style={{width:"100%", height: 200}}/>
              </View>
             <View Style={{ width: "100%", backgroundColor: "#f8a5c2"}}>
                 <Text style={{color: "#546de5", fontSize: 20, textAlign: "center"}}>name: { this.props.hotel.name}</Text>
                 <Text style={{color: "#f5cd79", fontSize: 20,  textAlign: "center"}}>street:  { this.props.hotel['street name']}</Text>
                  <Text style={{color: "#596275", fontSize: 20,  textAlign: "center"}}>number: { this.props.hotel.number}</Text>
                 <Text style={{color: "#3dc1d3", fontSize: 20,  textAlign: "center"}}>phone number: {this.props.hotel.phone}</Text>
              <Button title={"Call Now"} style={{backgroundColor:"#574b90"}}></Button>
              <Button title={"Back"} onPress={() => {this.props.onPress()}}></Button>
             {this.state.goBack === true ? <Redirect to="/"/> : <Redirect to="/hotel-page"/>}
             </View> 
          </View>
        )
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
      color: "#546de5",
      width: 250,
      height: 250,
      backgroundColor: "#cf6a87",
      margin: 10,
      textAlign: "center"
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    hotelPage: {
        flex: 1,
        fontSize: 50
    }
  });