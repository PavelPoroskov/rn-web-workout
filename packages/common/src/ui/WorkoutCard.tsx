import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../ui/CustomRN';
import { Card } from './Card';

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    // borderRadius: 25,
    backgroundColor: "#8FB299",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 16,
    // margin: "auto",
    userSelect: 'none',
  },
  whiteText: {
    color: "#fff"
  },
  grayText: {
    color: "#655252"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
  }
});

interface WorkoutCardProps {
  exercise: string
  repsAndWeight: string
  sets: string[]
  isEditMode: boolean
  onSetPress: (index: number) => void
}

export const WorkoutCard: React.FC<WorkoutCardProps> = observer(({ exercise, repsAndWeight, sets, onSetPress, isEditMode }) => {

  return (
    <View style={styles.cardContainer}>
      <Card>
        <View style={styles.topRow}>
          <Text style={styles.topRowText}>{exercise}</Text>
          <Text style={styles.topRowText}>{repsAndWeight}</Text>
        </View>
        <View style={styles.bottomRow}>
          {sets.map((set, index) => {
            // const key = `${set}${index}`
            const key = index

            if (set === 'x') {
              return (
                <View
                  key={key}
                  style={[styles.circle, styles.fadedBackground]}
                >
                  <Text style={[styles.circleText, styles.grayText]}>X</Text>
                </View>
              )
            }

            const btnStyle = set === '' ? [styles.circle, styles.fadedBackground] : styles.circle
            const textStyle = set === '' ? [styles.circleText, styles.grayText] : [styles.circleText, styles.whiteText]
            const text = set === '' ? '' : set

            if (isEditMode) {
              return (
                <TouchableOpacity
                  key={key}
                  style={btnStyle}
                  onPress={() => onSetPress(index)}
                >
                  <Text style={textStyle}>{text}</Text>
                </TouchableOpacity>
              )
            } else {
              return (
                <View
                  key={key}
                  style={btnStyle}
                >
                  <Text style={textStyle}>{text}</Text>
                </View>
              )
            }
          })}
        </View>
      </Card>
    </View>
  )
})