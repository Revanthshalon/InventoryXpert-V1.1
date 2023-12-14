import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SummaryScreen from "../../../ui/dashboard/summary/SummaryScreen";
import ExpenditureAnalysisScreen from "../../../ui/dashboard/expenditure/ExpenditureAnalysisScreen";
import ProfitAnalysisScreen from "../../../ui/dashboard/profit/ProfitAnalysisScreen";
import SalesAnalysisScreen from "../../../ui/dashboard/sales/SalesAnalysisScreen";

export type DashboardStackParamList = {
  summary: undefined;
  sales: undefined;
  profit: undefined;
  expenditure: undefined;
};

const DashboardStack = () => {
  const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="summary" component={SummaryScreen} />
      <DashboardStack.Screen name="sales" component={SalesAnalysisScreen} />
      <DashboardStack.Screen name="profit" component={ProfitAnalysisScreen} />
      <DashboardStack.Screen
        name="expenditure"
        component={ExpenditureAnalysisScreen}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStack;
