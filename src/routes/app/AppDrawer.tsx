import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DashboardStack from "./dashboard/DashboardStack";
import JournalStack from "./journal/JournalStack";
import SettingsStack from "./settings/SettingsStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type AppDrawerParamList = {
  dashboardStack: undefined;
  inventoryStack: undefined;
  journalStack: undefined;
  settingsStack: undefined;
};

const AppDrawer = () => {
  const AppDrawer = createDrawerNavigator<AppDrawerParamList>();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <AppDrawer.Navigator
              screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerType: "front",
              }}>
              <AppDrawer.Screen
                options={{
                  title: "Reports",
                  drawerIcon: () => (
                    <Icon source="chart-bar" color="black" size={25} />
                  ),
                }}
                name="dashboardStack"
                component={DashboardStack}
              />
              {/* TODO: Inventory */}
              {/* <AppDrawer.Screen name="inventory" component={InventoryScreen} /> */}
              <AppDrawer.Screen
                options={{
                  title: "Journal",
                  drawerIcon: () => (
                    <Icon source="book" color="black" size={25} />
                  ),
                }}
                name="journalStack"
                component={JournalStack}
              />
              <AppDrawer.Screen
                options={{
                  title: "Settings",
                  drawerIcon: () => (
                    <Icon source="cog" color="black" size={25} />
                  ),
                }}
                name="settingsStack"
                component={SettingsStack}
              />
            </AppDrawer.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppDrawer;
