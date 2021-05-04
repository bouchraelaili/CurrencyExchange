// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/Home.jsx';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar  />
//       <Home />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
   
//   },
// });
import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home.jsx'


import Menu from './screens/Menu.jsx'






function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Menu/>
    </View>
  );
}


 function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Home/>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer >
    <Tab.Navigator
     tabBarOptions={{
      labelStyle: { fontSize: 16,marginBottom:15,color:'white' },
      tabStyle: { width: 100 },
      style: { backgroundColor: '#30336b' },
    }}
    >     
     <Tab.Screen name="Home" component={MenuScreen} />
      <Tab.Screen name="Exchange" component={HomeScreen}/>

     
    </Tab.Navigator>
  </NavigationContainer>




  );
}



