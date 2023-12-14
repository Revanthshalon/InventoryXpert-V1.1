import Realm from "realm";

class Company extends Realm.Object<Company> {
  public static schema: Realm.ObjectSchema = {
    name: "Company",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: new Realm.BSON.ObjectID() },
      name: { type: "string", indexed: true },
      address: { type: "string", optional: true },
      phone: { type: "string", optional: true },
      email: { type: "string", optional: true },
      website: { type: "string", optional: true },
      taxCode: { type: "string", optional: true },
      bankAccount: { type: "string", optional: true },
      bankName: { type: "string", optional: true },
      bankBranch: { type: "string", optional: true },
      note: { type: "string", optional: true },
      existingBalance: { type: "double", default: 0 },
      createdAt: { type: "date", default: new Date() },
      updatedAt: { type: "date", default: new Date() },
    },
  };
  public _id!: Realm.BSON.ObjectId;
  public name!: string;
  public address!: string;
  public phone!: string;
  public email!: string;
  public website!: string;
  public taxCode!: string;
  public bankAccount!: string;
  public bankName!: string;
  public bankBranch!: string;
  public note!: string;
  public existingBalance!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

export default Company;
