import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListEmpty = (): JSX.Element => {
  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No todos found, add one to get started!</Text>
    </View>
  );
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    // NOTE: approximate offset for SafeArea top inset
    marginTop: -100,
  },
});

export default ListEmpty;
