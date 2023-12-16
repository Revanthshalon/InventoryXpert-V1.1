import { View, StyleSheet } from "react-native";
import React from "react";
import { Text, Surface } from "react-native-paper";

type Props = {
  title: string;
  content: string;
};

const Card = (props: Props) => {
  return (
    <Surface style={styles.cardContainer}>
      <Text variant="titleLarge" style={[styles.cardTitle]}>
        {props.title}
      </Text>
      <Text variant="displayLarge" style={styles.cardContent}>
        {props.content}
      </Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
  },
  cardTitle: {
    color: "#595959",
  },
  cardContent: {
    fontWeight: "500",
  },
});

export default Card;
