import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

import ColorPaletteModal from './screens/ColorPaletteModal';




//style prop can have array 
//in native we should never use map to display items

//flat list has three parts
//data, keyExtractor, RenderItem
//sectonList is same but with additonal features 
//and it's an array of objects (each section)
//and each object should have feature array 

//use scrollview only if you don't have a list compon


//stack navigator 
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

//ListEmptyComponent
//use extraData to also prompt rerender 

//everything is done using flex (automatically assigned)
//o

//can use styled components as well -- but with View
//no units for 

export default App;
