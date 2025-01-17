import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeader = ({
  title,
  isVisible,
}: {
  title: string;
  isVisible: boolean;
}): JSX.Element => {
  ////////////////////
  //////////////////// RENDER
  ////////////////////

  if (isVisible) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  } else {
    return <></>;
  }
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  titleText: { fontWeight: 'bold', fontSize: 20 },
});

export default SectionHeader;
