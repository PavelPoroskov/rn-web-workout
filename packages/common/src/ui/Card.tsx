import React from 'react';
import { StyleSheet, View } from "react-native"

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
  },
})

interface CardProps {
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {

  return (
    <View style={styles.cardContainer}>
      { children }
    </View>
  )
}