import Realm from 'realm';

class Payment extends Realm.Object<Payment> {
  public static schema: Realm.ObjectSchema = {
    name: 'Payment',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: new Realm.BSON.ObjectID() },
      date: { type: 'date', default: new Date() },
      note: { type: 'string', optional: true },
      amount: { type: 'double', default: 0 },
      createdAt: { type: 'date', default: new Date() },
      updatedAt: { type: 'date', default: new Date() },
      // Relationship
      company: {
        type: 'linkingObjects',
        objectType: 'Company',
        property: 'payments',
      },
    },
  };
  public _id!: Realm.BSON.ObjectId;
  public date!: Date;
  public note!: string;
  public amount!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

export default Payment;