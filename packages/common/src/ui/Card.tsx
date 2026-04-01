import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native"

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
  onPress?: () => void
}

export const Card: React.FC<CardProps> = ({ children, onPress }) => {

  // return (
  //   <View style={styles.cardContainer}>
  //     { children }
  //   </View>
  // )

  if (onPress) {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={styles.cardContainer}>{children}</View>;
}