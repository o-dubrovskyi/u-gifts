// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Place } = initSchema(schema);

export {
  User,
  Place
};