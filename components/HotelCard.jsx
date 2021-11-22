import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable} from 'react-native';
import { hotelsObjArray } from '../assets/hotels-data'

export class HotelCard extends React.Component {
    constructor(props) {
       super(props);
       this.hotel = props.value;
    }
    render() {
        return(
         <Pressable key={this.props.value.name} value={this.hotel} onPress={(e) => {this.props.onPress(this.hotel)}}>
         <View style={styles.hotelCard}>
           <View >
             <Image  value={this.hotel} source={{uri: this.props.value.img}} style={{width: "100%", height: "70%"}}/>
           </View>
           <View >
             <Text style={{color: "#546de5"}}>name: {this.props.value.name}</Text>
             <Text style={{color: "#f5cd79"}}>street:  {this.props.value['street name']}</Text>
             <Text style={{color: "#596275"}}>number: {this.props.value.number}</Text>
           <Text style={{color: "#3dc1d3"}}>phone number: {this.props.value.phone}</Text>
         </View>
         </View>
         </Pressable>
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
    }
  });