import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "@react-native-community/blur";

type Props = {};

const SummaryScreen = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header />
        <Text>SummaryScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({});
