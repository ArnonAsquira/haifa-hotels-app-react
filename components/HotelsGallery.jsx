import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable} from 'react-native';
import { hotelsObjArray } from '../assets/hotels-data'
import { HotelCard } from './HotelCard';

export class HotelsGallery extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
    return(
     <ScrollView>
        {hotelsObjArray.map(hotel => {
        return (
            <Pressable key={hotel.name}>
           < HotelCard value={hotel} onPress={(e) => {this.props.onPress(e)}} />
           </Pressable>
        )
      })}
    </ScrollView>
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