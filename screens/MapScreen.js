import React from 'react'; 
import { StyleSheet, Text, View, Button, Dimensions, Image} from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Map () {
        const [pin, setPin] = React.useState ({
            latitude: 40.74246,
            longitude: -74.02719,
        })

        const [region, setregion] = React.useState ({
            latitude: 40.74246,
            longitude: -74.02719,
        })
    
        return (
            <View style = {{marginTop: 0, flex : 1}} >
                <MapView style={styles.map}
                      initialRegion={{
                          latitude: 40.74246,
                          longitude: -74.02719,
                          latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421
                      }}
                      provider = "google"
                >
                    <Marker 
                        coordinate= {pin}
                        pinColor = "red"  
                        draggable = {true}
                        onDragStart = {(e)=> 
                            {console.log("Drag Start", e.nativeEvent.coordinates)}
                         }
                        onDragEnd = {(e)=> 
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude, 
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                         }
                    >
                        <Callout>
                            <Text> You are here! </Text>
                        </Callout>
                    </Marker>
                    <Circle center = {pin}
                            radius = {100} />
                </MapView>
       
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
