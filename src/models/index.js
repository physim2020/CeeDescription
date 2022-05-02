// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Answer, Question, Home } = initSchema(schema);

export {
  User,
  Answer,
  Question,
  Home
};