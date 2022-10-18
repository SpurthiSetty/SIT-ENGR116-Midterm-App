import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image} from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import MapScreen from './screens/MapScreen'; 
import ColorChangerScreen from './screens/ColorChangerScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Click here for a Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />

      <Button
        title="Click here for a Map"
        onPress={() => navigation.navigate('Map')}
      />

      <Button
        title="Click here for a fun game!"
        onPress={() => navigation.navigate('ColorChangerGame')}
      />

     
    </View>
  );
}

function Calculator_Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Spurthi's Calculator </Text>
      <CalculatorScreen />
    </View>
  );
}


function Map_Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapScreen/>
    </View> 
  );
}

function ColorChanger_Screen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ColorChangerScreen/>
  </View> 
  );
}



const Stack = createNativeStackNavigator();

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



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Calculator" component={Calculator_Screen} />
          <Stack.Screen name="Map" component={Map_Screen} />
          <Stack.Screen name="ColorChangerGame" component={ColorChanger_Screen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
}


