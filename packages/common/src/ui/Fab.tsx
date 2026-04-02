import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native"
import { Text } from '../ui/CustomRN';

const styles = StyleSheet.create({
  fabContainer: {
    height: 40,
    width: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: '50%',
    boxShadow: '2px 2px 3px rgb(0 0 0 / 30%)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2196F3",
  },
  fabText: {
    fontSize: 18,
    color: 'white',
  }
})

interface FabProps {
  onPress: () => void
}

export const Fab: React.FC<FabProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.fabContainer}
    >
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
}