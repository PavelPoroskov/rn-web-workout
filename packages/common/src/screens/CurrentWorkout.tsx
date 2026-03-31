import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { observer } from 'mobx-react-lite';
import { WorkoutTimer } from '../ui/WorkoutTimer';
import { useNavigate } from '../Router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  wrapper: {
    padding: 10,
  }
});

export const CurrentWorkoutScreen: React.FC = observer(() => {
  const navigate = useNavigate();
  const rootStore = useContext(RootStoreContext)
  useEffect(() => {
    return () => {
      rootStore.workoutTimer.stopTimer()
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Text>Current Workout Screen</Text> */}
        {/* <WorkoutCard exercise='Squat' repsAndWeight='5x5 260' sets={["5", "5", "5", "", "x"]}/> */}
        {rootStore.workoutStore.currentExercise.map((e, exerciseIndex) => {
          return (
            <WorkoutCard
              key={exerciseIndex}
              exercise={e.exercise}
              repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
              sets={e.sets}
              onSetPress={(setIndex) => {
                rootStore.workoutTimer.startTimer()

                const currentValue = e.sets[setIndex]

                let newValue: string

                if (currentValue === '') {
                  newValue = `${e.reps}`
                } else if (currentValue === '0') {
                  rootStore.workoutTimer.stopTimer()
                  newValue = ''
                } else {
                  newValue = `${parseInt(currentValue) - 1}`
                }

                // e.sets[setIndex] = newValue
                rootStore.workoutStore.setReps(exerciseIndex, setIndex, newValue)
              }}
            />
          )
        })}
      </View>
      <Button title='SAVE' onPress={() => {
        rootStore.workoutStore.saveHistory()
        navigate('/')
      }} />

      {(rootStore.workoutTimer.isRunning || null) && <WorkoutTimer
        currentTime={rootStore.workoutTimer.display}
        percent={rootStore.workoutTimer.percent}
        onXPress={rootStore.workoutTimer.stopTimer}
      />}
    </View>
  )
})