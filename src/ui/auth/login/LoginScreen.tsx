import Realm from "realm";
import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import { useApp } from "@realm/react";
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { AuthStackParamList } from "../../../routes/auth/AuthStack";

type Props = {};

const LoginScreen = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const app = useApp();
  const nav = useNavigation<NavigationProp<AuthStackParamList, "Login">>();

  const loginHandler = useCallback(async () => {
    setLoading(true);
    const credentails = Realm.Credentials.emailPassword(email, password);
    try {
      await app.logIn(credentails);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [app, email, password]);

  const registerHandler = () => {
    nav.dispatch(StackActions.push("Register"));
  };

  return (
    <SafeAreaView>
      <View>
        {/* TODO: Add Login Image */}
        <TextInput
          label="Email"
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={false}
          autoCapitalize="none"
        />
        <Button mode="contained" onPress={loginHandler} loading={loading}>
          Login
        </Button>
        <Button mode="text" onPress={() => console.log("Pressed")}>
          Forgot Password?
        </Button>
        <Text style={{ textAlign: "center" }}>Or</Text>
        <Text>
          Don't have an account?
          <Button mode="text" onPress={registerHandler}>
            Register
          </Button>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
