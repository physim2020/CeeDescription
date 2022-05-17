import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Answer {
  readonly id: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Answer, AnswerMetaData>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer, AnswerMetaData>) => MutableModel<Answer, AnswerMetaData> | void): Answer;
}

export declare class Question {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}