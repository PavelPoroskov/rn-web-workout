import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, type DimensionValue } from 'react-native';
import { Text } from '../ui/CustomRN';

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    backgroundColor: "#486550",
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 30
  },
  timeText: {
    fontSize: 18,
    color: "#fff",
  },
  x: {
    fontSize: 30,
    color: "#B2A1A1",
  },
  line: {
    height: 3,
    backgroundColor: "#B2A1A1",
  }
});

interface WorkoutTimerProps {
  currentTime: string
  percent: string
  onXPress: () => void
}

export const WorkoutTimer: React.FC<WorkoutTimerProps> = observer(({ currentTime, percent, onXPress }) => {

  return (
    <View style={styles.container}>
      {/* <Text>WorkoutTimer</Text> */}
      <View style={[styles.line, { width: percent as DimensionValue }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity
          onPress={onXPress}
        >
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})
