import { createRealmContext } from "@realm/react";
import Company from "../model/journal/Company";
import Purchase from "../model/journal/Purchase";
import Payment from "../model/journal/Payment";

const realmContext = createRealmContext({
  schema: [Company, Purchase, Payment],
  schemaVersion: 1,
});

export default realmContext;
