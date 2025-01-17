import Lock from '@/assets/lock.png';
import { FONT_SIZES } from '@/theme';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ScreenHeader = ({
  addOnPress,
  lockOnPress,
}: {
  addOnPress: () => void;
  lockOnPress: () => void;
}): JSX.Element => {
  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <View style={styles.container}>
      <Pressable onPress={lockOnPress} hitSlop={30}>
        <Image source={Lock} style={styles.lockImage} />
      </Pressable>
      <Text style={styles.titleText}>My todos</Text>
      <Pressable onPress={addOnPress}>
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </View>
  );
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lockImage: { width: 25, height: 25 },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FONT_SIZES.screenHeader,
  },
  addText: { fontSize: 35, fontWeight: 'bold', width: 20 },
});

export default ScreenHeader;
