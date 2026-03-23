import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10
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
    backgroundColor: "#8FB299"
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
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
  repsAndWeight: string;
  sets: string[]
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ exercise, repsAndWeight, sets }) => {

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{exercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          const key = `${set}${index}`

          if (set === 'x') {
            return (
              <View key={key} style={[styles.circle, styles.fadedBackground]}>
                <Text style={[styles.circleText, styles.grayText]}>X</Text>
              </View>
            )
          }

          if (set === '') {
            return (
              <View key={key} style={[styles.circle, styles.fadedBackground]}>
                <Text style={[styles.circleText, styles.grayText]}></Text>
              </View>
            )
          }

          return (
            <View key={key} style={styles.circle}>
              <Text style={[styles.circleText, styles.whiteText]}>{set}</Text>
            </View>
          )
        })}

      </View>
    </View>
  )
}