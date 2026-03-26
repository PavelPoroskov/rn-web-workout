import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppRoutes } from './Routes';

export const App: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AppRoutes />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425
  },
});
