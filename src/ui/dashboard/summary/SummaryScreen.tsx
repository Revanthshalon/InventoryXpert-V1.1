import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Header from "../../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../../constants/colors";
import { Surface } from "react-native-paper";
import Card from "../../../components/card/Card";
import ChartCard from "../../../components/card/ChartCard";
import TableCard from "../../../components/card/TableCard";

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled>
          <Card title="Profit - Today" content="$2460.89" />
          <Card title="Sales- Today" content="$2460.89" />
          <Card title="Expenditure- Today" content="$2460.89" />
        </ScrollView>
        <ChartCard title="Overview" />
        <TableCard cardTitle="Upcoming Payments" />
        <ChartCard title="Chart Title" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: 10,
  },
});
