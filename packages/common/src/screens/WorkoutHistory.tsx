import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

export const WorkoutHistoryScreen: React.FC = () => {
  const routerStore = useContext(RouterStoreContext)

  return (
    <View>
      <Text>Workout History Screen</Text>
      <Button title='Create Workout' onPress={() => {
        routerStore.setScreen('CurrentWorkout')
      }} />
    </View>
  )
}