import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";

type Props = {};

const CompanyHomeScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <Header placeholder="Search Companies" />
      <Text>CompanyHomeScreen</Text>
    </SafeAreaView>
  );
};

export default CompanyHomeScreen;

const styles = StyleSheet.create({});
