import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import CarItem from './components/carItem';
import CarsList from './components/carsList';
import Header from './components/Header';

export default function App() {

  console.log("Successful")
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
