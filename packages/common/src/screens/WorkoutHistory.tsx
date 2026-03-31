import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigate } from '../Router';
import { RootStoreContext } from '../stores/RootStore';

export const WorkoutHistoryScreen: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const navigate = useNavigate();

  return (
    <View>
      <Text>Workout History Screen</Text>
      <Button title='Create Workout' onPress={() => {
        rootStore.workoutStore.addExercises([
          {
            exercise: 'Squad',
            numSets: 5,
            reps: 5,
            sets: ['5', '5', '5', '5', '5'],
            weight: 260,
          },
          {
            exercise: 'Bench Press',
            numSets: 5,
            reps: 5,
            sets: ['5', '5', '5', '5', '5'],
            weight: 200,
          },
          {
            exercise: 'Deadlift',
            numSets: 1,
            reps: 5,
            sets: ['5', 'x', 'x', 'x', 'x'],
            weight: 360,
          },
        ])

        // rootStore.routerStore.setScreen('CurrentWorkout')
        navigate('/current-workout')
      }} />
    </View>
  )
}