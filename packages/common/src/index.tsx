import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from './stores/CounterStore';

export const App: React.FC = observer(() => {
  const counterStore = useContext(CounterStoreContext)

  return (
    <View style={styles.container}>
      <Text>Hello from React Native from common</Text>
      <Text>{counterStore.count}</Text>
      <Button title='Increment' onPress={counterStore.incrementCount}/>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
});
