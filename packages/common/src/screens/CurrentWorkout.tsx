import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { observer } from 'mobx-react-lite';
import { WorkoutTimer } from '../ui/WorkoutTimer';
import { useNavigate, useParams } from '../Router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50
  }
});

export const CurrentWorkoutScreen: React.FC = observer(() => {
  const navigate = useNavigate();
  const { date } = useParams();
  const rootStore = useContext(RootStoreContext)
  useEffect(() => {
    return () => {
      rootStore.workoutTimer.stopTimer()
    }
  }, [])

  if (date && !rootStore.workoutStore.history[date]) {
    navigate('/')
  }

  // const todayDate = dayjs().format('YYYY-MM-DD')
  // const isCurrentWorkout = !date || date == todayDate;
  const isCurrentWorkout = !date;

  const isEditMode = isCurrentWorkout

  const exerciseList = isCurrentWorkout
    ? rootStore.workoutStore.currentExercise
    : rootStore.workoutStore.history[date]

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.scrollContainer}>
        {/* <Text>Current Workout Screen</Text> */}
        {/* <WorkoutCard exercise='Squat' repsAndWeight='5x5 260' sets={["5", "5", "5", "", "x"]}/> */}
        {exerciseList.map((e, exerciseIndex) => {
          return (
            <WorkoutCard
              key={exerciseIndex}
              exercise={e.exercise}
              repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
              sets={e.sets}
              isEditMode={isEditMode}
              onSetPress={(setIndex) => {
                if (isCurrentWorkout) {
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
                }
              }}
            />
          )
        })}
        {(isEditMode || null) && <Button title='SAVE' onPress={() => {
          rootStore.workoutStore.saveHistory()
          navigate('/')
        }} />}
        {(!isEditMode || null) && <Button title='CLOSE' onPress={() => {
          navigate('/')
        }} />}
      </ScrollView>

      {(rootStore.workoutTimer.isRunning || null) && <WorkoutTimer
        currentTime={rootStore.workoutTimer.display}
        percent={rootStore.workoutTimer.percent}
        onXPress={rootStore.workoutTimer.stopTimer}
      />}
    </View>
  )
})