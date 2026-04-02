import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigate } from '../Router';
import { RootStoreContext } from '../stores/RootStore';
import { Text } from '../ui/CustomRN';
import { Fab } from '../ui/Fab';
import { HistoryCard } from '../ui/HistoryCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  }
});

export const WorkoutHistoryScreen: React.FC = observer(() => {
  const rootStore = useContext(RootStoreContext)
  const navigate = useNavigate();

  const dataList = Object.entries(rootStore.workoutStore.history)
    .map(([date, workout]) => ({ date, workout, type: 1 }))
    .toSorted((a, b) => a.date.localeCompare(b.date))
  const rest3 = dataList.length % 3

  if (rest3 !== 0) {
    let addPlaceholder = 3 - rest3

    while (0 < addPlaceholder) {
      dataList.push({
        date: `placeholder${dataList.length + addPlaceholder}`,
        workout: [],
        type: 0,
      })
      addPlaceholder = addPlaceholder - 1
    }
  }
  // console.log('WorkoutHistoryScreen', dataList.length)

  return (
    <View style={styles.container}>
      <Text>Workout History Screen</Text>

      <FlatList
        data={dataList}
        renderItem={({ item }) => (
          <>
            {item.type === 1 && <View key={item.date} style={styles.cardContainer}>
              <HistoryCard
                header={item.date}
                exercises={item.workout}
                onPress={() => {
                  navigate(`/workout/${item.date}`)
                }}
              />
            </View>
            }
            {item.type === 0 && <View key={item.date} style={styles.cardContainer} />}
          </>
        )}
        keyExtractor={item => item.date}
        numColumns={3}
      />
      <Fab onPress={() => {
        rootStore.workoutStore.fillExercises()

        // rootStore.routerStore.setScreen('CurrentWorkout')
        navigate('/current-workout')
      }} />
    </View>
  )
})