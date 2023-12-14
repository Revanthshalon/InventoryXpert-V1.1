import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DashboardStack from "./dashboard/DashboardStack";
import JournalStack from "./journal/JournalStack";
import SettingsStack from "./settings/SettingsStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type AppDrawerParamList = {
  dashboard: undefined;
  inventory: undefined;
  journal: undefined;
  settings: undefined;
};

const AppDrawer = () => {
  const AppDrawer = createDrawerNavigator<AppDrawerParamList>();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <AppDrawer.Navigator>
              <AppDrawer.Screen name="dashboard" component={DashboardStack} />
              {/* TODO: Inventory */}
              {/* <AppDrawer.Screen name="inventory" component={InventoryScreen} /> */}
              <AppDrawer.Screen name="journal" component={JournalStack} />
              <AppDrawer.Screen name="settings" component={SettingsStack} />
            </AppDrawer.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppDrawer;
