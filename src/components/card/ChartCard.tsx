import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Surface } from "react-native-paper";

type Props = {
  title: string;
};

const ChartCard = (props: Props) => {
  return (
    <Surface style={styles.cardContainer}>
      <Text variant="titleLarge" style={[styles.cardTitle]}>
        {props.title}
      </Text>
    </Surface>
  );
};

export default ChartCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    height: 400,
  },
  cardTitle: {
    color: "#595959",
    fontWeight: "600",
  },
  cardContent: {
    fontWeight: "500",
  },
});
