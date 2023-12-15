import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useUser } from "@realm/react";

type Props = {};

const SettingsHomeScreen = (props: Props) => {
  const user = useUser();

  const signOutHandler = React.useCallback(() => {
    user.logOut();
  }, [user]);

  return (
    <View>
      <Text>SettingsHomeScreen</Text>
      <Button mode="contained" onPress={signOutHandler}>
        Logout
      </Button>
    </View>
  );
};

export default SettingsHomeScreen;

const styles = StyleSheet.create({});
