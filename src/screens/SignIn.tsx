import * as LocalAuthentication from 'expo-local-authentication';
import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const SignIn = ({
  setIsAuthenticated,
}: {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  ////////////////////
  //////////////////// METHODS
  ////////////////////

  const performAuthentication = async () => {
    try {
      // NOTE: check that biometric authentication is available
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert('Error', 'Biometric authentication is not available.');
        return;
      }

      // NOTE: check if the device already has biometrics on device
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert('Error', 'No biometrics are enrolled.');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with Face ID',
        fallbackLabel: 'Enter password',
        cancelLabel: 'Cancel',
      });

      if (result.success) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  ////////////////////
  //////////////////// RENDER
  ////////////////////

  return (
    <View style={styles.unauthenticatedContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Your todos are protected</Text>
        <Text style={styles.subTitleText}>Please authenticate to access</Text>
      </View>

      <Pressable onPress={performAuthentication} style={styles.button}>
        <Text style={styles.buttonText}>Authenticate now</Text>
      </Pressable>
    </View>
  );
};

////////////////////
//////////////////// STYLES
////////////////////

const styles = StyleSheet.create({
  unauthenticatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  button: { backgroundColor: 'black', padding: 20, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  titleContainer: {
    gap: 5,
    alignItems: 'center',
  },
  titleText: { fontSize: 30, fontWeight: 'bold' },
  subTitleText: { fontSize: 25 },
});

export default SignIn;
