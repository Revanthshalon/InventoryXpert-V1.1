import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const SummaryScreen = (props: Props) => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header
          placeholder="Search"
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Text>SummaryScreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({});
