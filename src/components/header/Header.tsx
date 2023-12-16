import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { DashboardStackParamList } from "../../routes/app/dashboard/DashboardStack";
import { IconButton } from "react-native-paper";
import Search from "../search/Search";

type Props = {
  placeholder: string;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  headerContainerStyle?: any;
};

const Header = (props: Props) => {
  const nav =
    useNavigation<NavigationProp<DashboardStackParamList, "summary">>();
  const { width, height } = Dimensions.get("window");

  const menuHandler = () => {
    nav.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View
      style={[
        styles.headerContainer,
        { width: width },
        props.headerContainerStyle,
      ]}>
      <Image
        style={{
          flex: 1,
          maxWidth: 45,
          maxHeight: 45,
        }}
        source={require("../../../assets/logo.png")}
      />
      <Search
        containerStyle={styles.searchContainer}
        placeholder={props.placeholder}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
      />
      <IconButton
        icon="menu"
        size={30}
        iconColor="black"
        onPress={menuHandler}
      />
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
  searchContainer: {
    flex: 2,
    borderRadius: 40,
  },
  menuButton: {
    flex: 1,
  },
});
