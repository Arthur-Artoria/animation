/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { setTitle } from './src/navigation';
import { Home } from './src/views/Home';
import { Play } from './src/views/Play';
import { Video } from './src/views/Video';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Animation' }}
          />
          <Stack.Screen name="Play" component={Play} />
          <Stack.Screen name="Video" component={Video} options={setTitle} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
