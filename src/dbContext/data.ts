import { createRealmContext } from "@realm/react";
import Company from "../model/journal/Company";
import Purchase from "../model/journal/Purchase";

const realmContext = createRealmContext({
    schema: [Company, Purchase],
})