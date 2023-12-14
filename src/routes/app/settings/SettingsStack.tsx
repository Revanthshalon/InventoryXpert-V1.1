import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsHomeScreen from "../../../ui/setting/SettingsHomeScreen";
import EditProfileScreen from "../../../ui/setting/profile/EditProfileScreen";

export type SettingsStackParamList = {
  settings: undefined;
  profile: undefined;
};

const SettingsStack = () => {
  const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="settings" component={SettingsHomeScreen} />
      <SettingsStack.Screen name="profile" component={EditProfileScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStack;
