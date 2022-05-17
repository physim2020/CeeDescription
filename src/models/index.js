// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Answer, Question, User, Home } = initSchema(schema);

export {
  Answer,
  Question,
  User,
  Home
};