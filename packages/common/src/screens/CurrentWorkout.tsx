import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WorkoutCard } from '../ui/WorkoutCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    margin: 10,
  },
});

export const CurrentWorkoutScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* <Text>Current Workout Screen</Text> */}
      <WorkoutCard exercise='Squat' repsAndWeight='5x5 260' sets={["5", "5", "5", "", "x"]}/>
    </View>
  )
}