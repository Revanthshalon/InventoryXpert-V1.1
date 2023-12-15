import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompanyHomeScreen from "../../../ui/journal/company/CompanyHomeScreen";
import PaymentHomeScreen from "../../../ui/journal/payment/PaymentHomeScreen";
import PurchaseHomeScreen from "../../../ui/journal/purchase/PurchaseHomeScreen";

export type JournalTabParamList = {
  company: undefined;
  payment: undefined;
  purchase: undefined;
};

const JournalTab = () => {
  const JournalTab = createBottomTabNavigator<JournalTabParamList>();
  return (
    <JournalTab.Navigator screenOptions={{ headerShown: false }}>
      <JournalTab.Screen name="company" component={CompanyHomeScreen} />
      <JournalTab.Screen name="payment" component={PaymentHomeScreen} />
      <JournalTab.Screen name="purchase" component={PurchaseHomeScreen} />
    </JournalTab.Navigator>
  );
};

export default JournalTab;
