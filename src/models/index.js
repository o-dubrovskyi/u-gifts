// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, Room, Item } = initSchema(schema);

export {
  Place,
  Room,
  Item
};