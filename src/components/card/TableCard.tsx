import { StyleSheet, View } from "react-native";
import React from "react";
import { Surface, Text } from "react-native-paper";

type Props = {
  cardTitle: string;
};

const TableCard = (props: Props) => {
  return (
    <Surface style={styles.cardContainer}>
      <Text variant="titleLarge" style={styles.cardTitle}>
        {props.cardTitle}
      </Text>
    </Surface>
  );
};

export default TableCard;

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
