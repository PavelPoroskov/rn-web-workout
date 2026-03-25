import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 3,
    backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    boxShadow: '2px 2px 3px rgb(0 0 0 / 30%)',
    flexDirection: "column",
    padding: 10,
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
    // borderRadius: '25px',
    backgroundColor: "#8FB299",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 16,
    // margin: "auto",
    // fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Liberation Sans", Helvetica, Arial, sans-serif'
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
  onSetPress: (index: number) => void
}

export const WorkoutCard: React.FC<WorkoutCardProps> = observer(({ exercise, repsAndWeight, sets, onSetPress }) => {

  return (
    <View style={styles.cardContainer}>
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

          if (set === '') {
            return (
              <TouchableOpacity
                key={key}
                style={[styles.circle, styles.fadedBackground]}
                onPress={() => onSetPress(index)}
              >
                <Text style={[styles.circleText, styles.grayText]}></Text>
              </TouchableOpacity>
            )
          }

          return (
            <TouchableOpacity
              key={key}
              style={styles.circle}
              onPress={() => onSetPress(index)}
            >
              <Text style={[styles.circleText, styles.whiteText]}>{set}</Text>
            </TouchableOpacity>
          )
        })}

      </View>
    </View>
  )
})