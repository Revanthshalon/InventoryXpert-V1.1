import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { DashboardStackParamList } from "../../routes/app/dashboard/DashboardStack";
import { IconButton } from "react-native-paper";

type Props = {};

const Header = (props: Props) => {
  const nav =
    useNavigation<NavigationProp<DashboardStackParamList, "summary">>();
  const { width, height } = Dimensions.get("window");

  const menuHandler = () => {
    nav.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={[styles.headerContainer, { width: width }]}>
      <Image
        style={{ width: 45, height: 45 }}
        source={require("../../../assets/logo.png")}
      />
      <View style={styles.buttonContainer}>
        <IconButton icon="magnify" size={30} iconColor="black" />
        <IconButton
          icon="menu"
          size={30}
          iconColor="black"
          onPress={menuHandler}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    top: 0,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30%",
  },
});
