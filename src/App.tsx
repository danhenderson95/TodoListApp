import Home from '@/screens/Home';
import SignIn from '@/screens/SignIn';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// NOTE: I'm using components as "screens" here but in
// practice would be components associated with routes
// in a routing library like React navigation

const App = (): React.JSX.Element => {
  ////////////////////
  //////////////////// STATE
  ////////////////////

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <SafeAreaView style={styles.container}>
      {isAuthenticated ? (
        <Home setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <SignIn setIsAuthenticated={setIsAuthenticated} />
      )}
    </SafeAreaView>
  );
};

////////////////////
//////////////////// RENDER
////////////////////

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
