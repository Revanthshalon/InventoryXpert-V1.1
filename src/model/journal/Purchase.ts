import Realm from "realm";

class Purchase extends Realm.Object<Purchase> {
  public static schema: Realm.ObjectSchema = {
    name: "Purchase",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectID() },
      date: { type: "date", default: new Date() },
      note: { type: "string", optional: true },
      amount: { type: "double", default: 0 },
      createdAt: { type: "date", default: new Date() },
      updatedAt: { type: "date", default: new Date() },
      // Relationship
      company: {
        type: "linkingObjects",
        objectType: "Company",
        property: "purchases",
      },
    },
  };
  public _id!: Realm.BSON.ObjectId;
  public date!: Date;
  // TODO: Add Purchase Item on the next rollout
  // public items!: PurchaseItem[];
  public note!: string;
  public amount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

export default Purchase;
