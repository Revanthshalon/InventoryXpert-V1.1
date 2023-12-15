import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../ui/auth/login/LoginScreen";
import LoginResetScreen from "../../ui/auth/loginreset/LoginResetScreen";
import RegisterScreen from "../../ui/auth/register/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  LoginReset: undefined;
};

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <AuthStack.Navigator>
            <AuthStack.Screen
              options={{ headerShown: true }}
              name="Login"
              component={LoginScreen}
            />
            <AuthStack.Screen
              options={{ headerShown: true }}
              name="Register"
              component={RegisterScreen}
            />
            <AuthStack.Screen
              options={{ headerShown: true }}
              name="LoginReset"
              component={LoginResetScreen}
            />
          </AuthStack.Navigator>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AuthStack;
