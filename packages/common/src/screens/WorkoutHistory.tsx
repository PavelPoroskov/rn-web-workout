import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';

export const WorkoutHistoryScreen: React.FC = () => {
  const rootStore = useContext(RootStoreContext)

  return (
    <View>
      <Text>Workout History Screen</Text>
      <Button title='Create Workout' onPress={() => {
        rootStore.routerStore.setScreen('CurrentWorkout')
      }} />
    </View>
  )
}