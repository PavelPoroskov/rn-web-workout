import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../ui/CustomRN';
import { Card } from './Card';
import type { CurrentExercise } from '../stores/WorkoutStore';

const styles = StyleSheet.create({
  // row: {
  //   flexDirection: "row",
  // },
});

interface HistoryCardProps {
  header: string
  exercises: CurrentExercise[]
  onPress: () => void
}

const exerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<HistoryCardProps> = ({ header, exercises, onPress }) => {

  return (
    <Card onPress={onPress}>
      <Text>{header}</Text>
      {exercises.map(ex => (
        <Text key={ex.exercise}>{`${exerciseShortName[ex.exercise as keyof typeof exerciseShortName]
          } ${ex.numSets}x${ex.reps} ${ex.weight}`}</Text>
      ))}
    </Card>
  )
}