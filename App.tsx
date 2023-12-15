import { AppProvider, RealmProvider, UserProvider } from "@realm/react";
import AuthStack from "./src/routes/auth/AuthStack";
import AppDrawer from "./src/routes/app/AppDrawer";
import "react-native-gesture-handler";

export default function App() {
  return (
    <AppProvider id="devicesync-zllfs" baseUrl="https://realm.mongodb.com">
      <UserProvider fallback={AuthStack}>
        <RealmProvider
          sync={{
            flexible: true,
            onError: (error) => console.log(error),
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects("Company")),
                  subs.add(realm.objects("Purchase")),
                  subs.add(realm.objects("Payment"));
              },
            },
          }}>
          <AppDrawer />
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
