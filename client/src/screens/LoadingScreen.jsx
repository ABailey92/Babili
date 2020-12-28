/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  View, StyleSheet, ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function LoadingScreen({ navigation: { navigate } }) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        console.warn('user', user);
        if (user) { // a user is already logged in on this device
          navigate('Home');
        } else {
          navigate('Login');
        }
      },
    );
  };

  useEffect(() => {
    checkIfLoggedIn();
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
