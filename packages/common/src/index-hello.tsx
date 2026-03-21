import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Hello from React Native from common</Text>
      <Text>{count}</Text>
      <Button title='Increment' onPress={() => setCount(count + 1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
});
