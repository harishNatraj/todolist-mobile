import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './navigation/rootNavigation';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#140A26"/>
      <RootNavigation />
    </>
  );
}

export default App;
