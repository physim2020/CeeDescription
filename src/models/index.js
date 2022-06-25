// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ElectricEnergy, Answer, Question, User, Home } = initSchema(schema);

export {
  ElectricEnergy,
  Answer,
  Question,
  User,
  Home
};