import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import {Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { css } from './assets/css/css';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

//-27.571071573530304, -48.415592167949015 = Florianopolis

export default function App() {

  const [origin,setOrigin]=useState(null);
  const [destination,setDestination]=useState(null);

useEffect(()=>{
  (async function(){
    const { status, permissions } = await Permissions.askAsync(Permissions.Location);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    }
    else{
      throw new Error('Permissão para usar localização não permitida');
    }

  })();
}, []);

  return (
    <View style={css.container}>
      <MapView 
        style={css.mapa}
        initialRegion={{
        latitude: -27.571071573530304,
        longitude: -48.415592167949015,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }}
      >
        
      </MapView>
    </View>
  );
}


