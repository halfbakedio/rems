/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['ISO8601DateTime'];
  domain?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  users: UserConnection;
};


export type AccountUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Account. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Account>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Account>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  lead?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Contact. */
export type ContactConnection = {
  __typename?: 'ContactConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContactEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Contact>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Contact>;
};

export type Listing = {
  __typename?: 'Listing';
  agent: User;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  openHouses?: Maybe<OpenHouseConnection>;
  property: Property;
  updatedAt: Scalars['ISO8601DateTime'];
};


export type ListingOpenHousesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Listing. */
export type ListingConnection = {
  __typename?: 'ListingConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ListingEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Listing>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListingEdge = {
  __typename?: 'ListingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Listing>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type OpenHouse = {
  __typename?: 'OpenHouse';
  createdAt: Scalars['ISO8601DateTime'];
  endAt?: Maybe<Scalars['ISO8601DateTime']>;
  id: Scalars['ID'];
  listing: Listing;
  startAt?: Maybe<Scalars['ISO8601DateTime']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for OpenHouse. */
export type OpenHouseConnection = {
  __typename?: 'OpenHouseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OpenHouseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<OpenHouse>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OpenHouseEdge = {
  __typename?: 'OpenHouseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<OpenHouse>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Property. */
export type PropertyConnection = {
  __typename?: 'PropertyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PropertyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Property>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PropertyEdge = {
  __typename?: 'PropertyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Property>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  /** Returns a list of accounts */
  accounts: AccountConnection;
  contact?: Maybe<Contact>;
  /** Returns a list of contacts */
  contacts: ContactConnection;
  listing?: Maybe<Listing>;
  /** Returns a list of listings */
  listings: ListingConnection;
  me?: Maybe<User>;
  openHouse?: Maybe<OpenHouse>;
  /** Returns a list of open houses */
  openHouses: OpenHouseConnection;
  /** Returns a list of properties */
  properties: PropertyConnection;
  property?: Maybe<Property>;
  user?: Maybe<User>;
  /** Returns a list of users */
  users: UserConnection;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryListingArgs = {
  id: Scalars['ID'];
};


export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryOpenHouseArgs = {
  id: Scalars['ID'];
};


export type QueryOpenHousesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPropertiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryPropertyArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  roleId?: InputMaybe<Scalars['ID']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type User = {
  __typename?: 'User';
  account: Account;
  confirmationSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  currentSignInAt?: Maybe<Scalars['ISO8601DateTime']>;
  currentSignInIp?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  encryptedPassword: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  lastSignInAt?: Maybe<Scalars['ISO8601DateTime']>;
  lastSignInIp?: Maybe<Scalars['String']>;
  rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles: Array<Role>;
  signInCount: Scalars['Int'];
  unconfirmedEmail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  username?: Maybe<Scalars['String']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', me?: { __typename?: 'User', email: string, image?: string | null } | null };


export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;