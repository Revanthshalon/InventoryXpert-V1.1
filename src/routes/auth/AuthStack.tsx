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
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="LoginReset" component={LoginResetScreen} />
          </AuthStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default AuthStack;
