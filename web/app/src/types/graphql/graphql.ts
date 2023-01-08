/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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


export const GetProfileDocument = gql`
    query GetProfile {
  me {
    email
    image
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export type AccountKeySpecifier = ('createdAt' | 'domain' | 'id' | 'name' | 'subdomain' | 'updatedAt' | 'users' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	subdomain?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | AccountConnectionKeySpecifier)[];
export type AccountConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountEdgeKeySpecifier = ('cursor' | 'node' | AccountEdgeKeySpecifier)[];
export type AccountEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactKeySpecifier = ('createdAt' | 'email' | 'firstName' | 'id' | 'lastName' | 'lead' | 'phone' | 'updatedAt' | ContactKeySpecifier)[];
export type ContactFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	lead?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContactConnectionKeySpecifier)[];
export type ContactConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactEdgeKeySpecifier = ('cursor' | 'node' | ContactEdgeKeySpecifier)[];
export type ContactEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListingKeySpecifier = ('agent' | 'createdAt' | 'id' | 'openHouses' | 'property' | 'updatedAt' | ListingKeySpecifier)[];
export type ListingFieldPolicy = {
	agent?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	openHouses?: FieldPolicy<any> | FieldReadFunction<any>,
	property?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListingConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ListingConnectionKeySpecifier)[];
export type ListingConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListingEdgeKeySpecifier = ('cursor' | 'node' | ListingEdgeKeySpecifier)[];
export type ListingEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('testField' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	testField?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenHouseKeySpecifier = ('createdAt' | 'endAt' | 'id' | 'listing' | 'startAt' | 'updatedAt' | OpenHouseKeySpecifier)[];
export type OpenHouseFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	listing?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenHouseConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | OpenHouseConnectionKeySpecifier)[];
export type OpenHouseConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OpenHouseEdgeKeySpecifier = ('cursor' | 'node' | OpenHouseEdgeKeySpecifier)[];
export type OpenHouseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PropertyKeySpecifier = ('address' | 'createdAt' | 'id' | 'image' | 'updatedAt' | PropertyKeySpecifier)[];
export type PropertyFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PropertyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PropertyConnectionKeySpecifier)[];
export type PropertyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PropertyEdgeKeySpecifier = ('cursor' | 'node' | PropertyEdgeKeySpecifier)[];
export type PropertyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('account' | 'accounts' | 'contact' | 'contacts' | 'listing' | 'listings' | 'me' | 'openHouse' | 'openHouses' | 'properties' | 'property' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	contact?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts?: FieldPolicy<any> | FieldReadFunction<any>,
	listing?: FieldPolicy<any> | FieldReadFunction<any>,
	listings?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	openHouse?: FieldPolicy<any> | FieldReadFunction<any>,
	openHouses?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	property?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('account' | 'confirmationSentAt' | 'confirmationToken' | 'confirmedAt' | 'createdAt' | 'currentSignInAt' | 'currentSignInIp' | 'email' | 'encryptedPassword' | 'id' | 'image' | 'lastSignInAt' | 'lastSignInIp' | 'rememberCreatedAt' | 'resetPasswordSentAt' | 'resetPasswordToken' | 'roles' | 'signInCount' | 'unconfirmedEmail' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationSentAt?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmationToken?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSignInAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentSignInIp?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	encryptedPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSignInAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSignInIp?: FieldPolicy<any> | FieldReadFunction<any>,
	rememberCreatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordSentAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordToken?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	signInCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unconfirmedEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	AccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountConnectionKeySpecifier | (() => undefined | AccountConnectionKeySpecifier),
		fields?: AccountConnectionFieldPolicy,
	},
	AccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountEdgeKeySpecifier | (() => undefined | AccountEdgeKeySpecifier),
		fields?: AccountEdgeFieldPolicy,
	},
	Contact?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactKeySpecifier | (() => undefined | ContactKeySpecifier),
		fields?: ContactFieldPolicy,
	},
	ContactConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactConnectionKeySpecifier | (() => undefined | ContactConnectionKeySpecifier),
		fields?: ContactConnectionFieldPolicy,
	},
	ContactEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactEdgeKeySpecifier | (() => undefined | ContactEdgeKeySpecifier),
		fields?: ContactEdgeFieldPolicy,
	},
	Listing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListingKeySpecifier | (() => undefined | ListingKeySpecifier),
		fields?: ListingFieldPolicy,
	},
	ListingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListingConnectionKeySpecifier | (() => undefined | ListingConnectionKeySpecifier),
		fields?: ListingConnectionFieldPolicy,
	},
	ListingEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListingEdgeKeySpecifier | (() => undefined | ListingEdgeKeySpecifier),
		fields?: ListingEdgeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	OpenHouse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenHouseKeySpecifier | (() => undefined | OpenHouseKeySpecifier),
		fields?: OpenHouseFieldPolicy,
	},
	OpenHouseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenHouseConnectionKeySpecifier | (() => undefined | OpenHouseConnectionKeySpecifier),
		fields?: OpenHouseConnectionFieldPolicy,
	},
	OpenHouseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OpenHouseEdgeKeySpecifier | (() => undefined | OpenHouseEdgeKeySpecifier),
		fields?: OpenHouseEdgeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Property?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PropertyKeySpecifier | (() => undefined | PropertyKeySpecifier),
		fields?: PropertyFieldPolicy,
	},
	PropertyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PropertyConnectionKeySpecifier | (() => undefined | PropertyConnectionKeySpecifier),
		fields?: PropertyConnectionFieldPolicy,
	},
	PropertyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PropertyEdgeKeySpecifier | (() => undefined | PropertyEdgeKeySpecifier),
		fields?: PropertyEdgeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;