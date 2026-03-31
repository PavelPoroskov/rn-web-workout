import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigate } from '../Router';
import { RootStoreContext } from '../stores/RootStore';
import type { CurrentExercise } from '../stores/WorkoutStore';
import { Text } from '../ui/CustomRN';
import { HistoryCard } from '../ui/HistoryCard';

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

export const WorkoutHistoryScreen: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const navigate = useNavigate();

  const rows: Array<
    Array<{
      date: string;
      workout: CurrentExercise[];
    }>
  > = [];

  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, workout], i) => {
      if (i % 3 === 0) {
        rows.push([
          {
            date,
            workout
          }
        ]);
      } else {
        rows[rows.length - 1].push({
          date,
          workout
        });
      }
    }
  );


  return (
    <View>
      <Text>Workout History Screen</Text>
      <Button title='Create Workout' onPress={() => {
        rootStore.workoutStore.addExercises([
          {
            exercise: 'Squat',
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

      {rows.map((row, rowIndex) => {
        return (
          <View key={rowIndex} style={styles.row}>
            <HistoryCard key={row[0].date} header={row[0].date} exercises={row[0].workout} />
            {(row[1] || null) && <HistoryCard key={row[1].date} header={row[1].date} exercises={row[1].workout} />}
          </View>
        )
      })}
    </View>
  )
}