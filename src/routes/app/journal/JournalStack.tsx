import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JournalTab from "./JournalTab";

export type JournalStackParamList = {
  journal: undefined;
};

const JournalStack = () => {
  const JournalStack = createNativeStackNavigator<JournalStackParamList>();
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen name="journal" component={JournalTab} />
    </JournalStack.Navigator>
  );
};

export default JournalStack;
