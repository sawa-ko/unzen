import type { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Input to change a bot status. */
export type AdminBotChangeStatusInput = {
  /** The ID of the bot. */
  id: Scalars['ID']['input'];
  /** The reason for the status change. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** The new status. */
  status: BotStatus;
};

/** Input to set the permissions for a user. */
export type AdminUserPermissionsInput = {
  /** The ID of the user. */
  id: Scalars['ID']['input'];
  /** The new permissions to be set for the user. */
  permissions: Array<UserPermissionsFlags>;
};

/** Information related to a user session. */
export type AuthSessionObject = {
  __typename?: 'AuthSessionObject';
  /** The access token provided by Discord. */
  access_token: Scalars['String']['output'];
  /** The expiration time of the access token in seconds. */
  expires_in: Scalars['Float']['output'];
  /** The refresh token provided by Discord. */
  refresh_token: Scalars['String']['output'];
};

/** The authenticated user object */
export type AuthUserObject = {
  __typename?: 'AuthUserObject';
  /** The avatar URL of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The banner URL of the user */
  banner?: Maybe<Scalars['String']['output']>;
  /** The biography of the user */
  bio?: Maybe<Scalars['String']['output']>;
  /** The creation date of the user */
  createdAt: Scalars['String']['output'];
  /** The unique identifier of the user */
  id: Scalars['ID']['output'];
  /** The permissions of the user */
  permissions: Scalars['Int']['output'];
  /** Fetches the sessions of the authenticated user */
  sessions: Array<AuthUserSessionObject>;
  /** The last update date of the user */
  updatedAt: Scalars['String']['output'];
  /** The username of the user */
  username: Scalars['String']['output'];
};

/** The authentication session object */
export type AuthUserSessionObject = {
  __typename?: 'AuthUserSessionObject';
  /** Hashed access token */
  accessToken: Scalars['String']['output'];
  /** Created at timestamp */
  createdAt: Scalars['String']['output'];
  /** Hashed refresh token */
  refreshToken: Scalars['String']['output'];
  /** Updated at timestamp */
  updatedAt: Scalars['String']['output'];
};

/** The input of the user update mutation */
export type AuthUserUpdateInput = {
  /** The banner of the user. */
  banner?: InputMaybe<Scalars['String']['input']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']['input']>;
};

/** A canVote object for a bot */
export type BotCanVoteObject = {
  __typename?: 'BotCanVoteObject';
  /** The bot ID of the vote */
  canVote: Scalars['Boolean']['output'];
  /** The expiration date of the vote */
  expires?: Maybe<Scalars['Float']['output']>;
};

/** A bot object. */
export type BotObject = {
  __typename?: 'BotObject';
  /** The avatar image URL of the bot. */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The banner image URL of the bot. */
  banner?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the bot is certified. */
  certified: Scalars['Boolean']['output'];
  /** The creation date of the bot. */
  createdAt: Scalars['String']['output'];
  /** The detailed description of the bot. */
  description: Scalars['String']['output'];
  /** The GitHub repository URL of the bot. */
  github?: Maybe<Scalars['String']['output']>;
  /** The number of guilds (servers) the bot is currently in. */
  guildCount: Scalars['Int']['output'];
  /** The unique identifier of the bot. */
  id: Scalars['ID']['output'];
  /** The source from which the bot was imported. */
  importedFrom?: Maybe<Scalars['String']['output']>;
  /** The invite link for adding the bot to a server. */
  inviteLink?: Maybe<Scalars['String']['output']>;
  /** The username of the bot. */
  name: Scalars['String']['output'];
  /** Gets a list of permissions that the bot owners have. */
  ownerPermissions: Array<BotOwnerPermissionsObject>;
  /** The owners of the bot. */
  owners: Array<BotOwnerObject>;
  /** The command prefix used by the bot. */
  prefix?: Maybe<Scalars['String']['output']>;
  /** The short description of the bot. */
  shortDescription: Scalars['String']['output'];
  /** The current status of the bot. */
  status: BotStatus;
  /** The support server or community for the bot. */
  supportServer?: Maybe<Scalars['String']['output']>;
  /** The tags associated with the bot. */
  tags: Array<BotTagObject>;
  /** The last update date of the bot. */
  updatedAt: Scalars['String']['output'];
  /** The votes for the bot. */
  votes: BotVoteObjectConnection;
  /** The webhook for the bot. */
  webhook: WebhookObject;
  /** The official website of the bot. */
  website?: Maybe<Scalars['String']['output']>;
};


/** A bot object. */
export type BotObjectVotesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** Represents the badges of the owner. */
export type BotOwnerBadgeObject = {
  __typename?: 'BotOwnerBadgeObject';
  /** The creation date of the badge. */
  createdAt: Scalars['String']['output'];
  /** The description of the badge. */
  description: Scalars['String']['output'];
  /** The display name of the badge. */
  displayName: Scalars['String']['output'];
  /** The icon of the badge. */
  icon: Scalars['String']['output'];
  /** The name of the badge. */
  name: Scalars['String']['output'];
  /** The last update date of the badge. */
  updatedAt: Scalars['String']['output'];
};

/** The bot owner object */
export type BotOwnerObject = {
  __typename?: 'BotOwnerObject';
  /** The avatar URL of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The badges that the owner has. */
  badges: Array<BotOwnerBadgeObject>;
  /** The banner URL of the user */
  banner?: Maybe<Scalars['String']['output']>;
  /** The biography of the user */
  bio?: Maybe<Scalars['String']['output']>;
  /** The bots that the owner owns. */
  bots: Array<BotObject>;
  /** The unique identifier of the user */
  id: Scalars['ID']['output'];
  /** The username of the user */
  username: Scalars['String']['output'];
};

/** The permissions of the bot owner. */
export type BotOwnerPermissionsObject = {
  __typename?: 'BotOwnerPermissionsObject';
  /** The unique identifier of the owner. */
  id: Scalars['ID']['output'];
  /** The permissions of the owner. */
  permissions: Scalars['Int']['output'];
};

/** The status of a bot on the platform. */
export enum BotStatus {
  /** The bot has been successfully approved. */
  Approved = 'APPROVED',
  /** The bot has been rejected by the platform. */
  Denied = 'DENIED',
  /** The bot is awaiting approval from the platform. */
  Pending = 'PENDING'
}

/** A tag object. */
export type BotTagObject = {
  __typename?: 'BotTagObject';
  /** The bots that have this tag. */
  bots: BotsConnection;
  /** The date the tag was created. */
  createdAt: Scalars['String']['output'];
  /** The display name of the tag. */
  displayName: Scalars['String']['output'];
  /** The name of the tag. */
  id: Scalars['ID']['output'];
};


/** A tag object. */
export type BotTagObjectBotsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

/** A connection of tags. */
export type BotTagsConnection = {
  __typename?: 'BotTagsConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotTagObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** The input type for creating a vote */
export type BotVoteCreateInput = {
  /** The bot ID of the vote */
  id: Scalars['String']['input'];
};

/** A vote object for a bot */
export type BotVoteObject = {
  __typename?: 'BotVoteObject';
  /** The bot ID of the vote */
  botId: Scalars['String']['output'];
  /** The expiration date of the vote */
  expires: Scalars['Float']['output'];
  /** The ID of the vote */
  id: Scalars['ID']['output'];
  /** The user ID of the vote */
  userId: Scalars['String']['output'];
};

/** A paginated list of vote objects */
export type BotVoteObjectConnection = {
  __typename?: 'BotVoteObjectConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotVoteObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** A paginated list of bot objects. */
export type BotsConnection = {
  __typename?: 'BotsConnection';
  /** The paginated items. */
  nodes?: Maybe<Array<BotObject>>;
  /** The page information. */
  pageInfo: PageInfo;
  /** The total count of items. */
  totalCount: Scalars['Int']['output'];
  /** The total amount of pages. */
  totalPages: Scalars['Int']['output'];
};

/** The input type for the createBot mutation. */
export type CreateBotInput = {
  /** The description of the bot, supports Markdown. */
  description: Scalars['String']['input'];
  /** The GitHub link for the bot. */
  github?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the bot to create. */
  id: Scalars['ID']['input'];
  /** The custom invite link for the bot. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** The list of owners that can manage the bot. */
  owners?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The prefix of the bot, if not provided slash commands will be the prefix. */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** The short description of the bot. */
  shortDescription: Scalars['String']['input'];
  /** The support server link for the bot. */
  supportServer?: InputMaybe<Scalars['String']['input']>;
  /** The bot tags, up to 7. */
  tags: Array<Scalars['String']['input']>;
  /** The website link for the bot. */
  website?: InputMaybe<Scalars['String']['input']>;
};

/** The input type for creating a bot tag. */
export type CreateBotTagInput = {
  /** The name of the tag. */
  id: Scalars['ID']['input'];
};

/** Input for creating a new session. */
export type CreateSessionInput = {
  /** The code provided by Discord. */
  code: Scalars['String']['input'];
};

/** The input type for creating a vanity URL. */
export type CreateVanityInput = {
  /** The ID of the vanity URL. */
  id: Scalars['ID']['input'];
  /** The ID of the target for the vanity URL. */
  targetId: Scalars['String']['input'];
  /** The type of vanity URL. */
  type: VanityType;
};

/** The input to create a webhook */
export type CreateWebhookInput = {
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['input'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: InputMaybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret: Scalars['String']['input'];
  /** The webhook URL */
  url: Scalars['String']['input'];
};

/** The input type for the deleteBot mutation. */
export type DeleteBotInput = {
  /** The ID of the bot to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type any query that requires filtering. */
export type FiltersBotInput = {
  /** The bots query. */
  query?: InputMaybe<Scalars['String']['input']>;
  /** The bots status. */
  status?: InputMaybe<BotStatus>;
};

/** The input type for filtering bot tags. */
export type FiltersBotTagInput = {
  /** The name of the tag. */
  query?: InputMaybe<Scalars['ID']['input']>;
};

/** The input type for the getBot query. */
export type GetBotInput = {
  /** The ID of the bot to retrieve. */
  id: Scalars['ID']['input'];
};

/** Required input to retrieve a bot owner. */
export type GetBotOwnerInput = {
  /** The ID of the bot owner to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type for fetching a tag */
export type GetBotTagInput = {
  /** The name of the tag. */
  id: Scalars['ID']['input'];
};

/** The input used to get a user. */
export type GetUserInput = {
  /** The ID of the user to retrieve. */
  id: Scalars['ID']['input'];
};

/** The input type for getting a vanity URL. */
export type GetVanityInput = {
  /** The ID of the vanity URL. */
  id: Scalars['ID']['input'];
};

/** The input to get the webhook */
export type GetWebhookInput = {
  /** The bot ID */
  id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new bot. */
  createBot: BotObject;
  /** Creates a new session for a user. */
  createSession: AuthSessionObject;
  /** Creates a new tag. */
  createTag: BotTagObject;
  /** Create a vanity URL. */
  createVanity: VanityObject;
  createVote: BotVoteObject;
  /** Create a webhook for the bot */
  createWebhook: WebhookObject;
  /** Deletes an existing bot. */
  deleteBot: BotObject;
  /** Delete a vanity URL. */
  deleteVanity: VanityObject;
  /** Delete the webhook of the bot */
  deleteWebhook: WebhookObject;
  /** Logs out the user session. */
  logOut: Scalars['Boolean']['output'];
  /** Deletes a bot. */
  panelDeleteBot: BotObject;
  /** Refreshes a user session. */
  refreshSession: AuthSessionObject;
  /** Reset and return a new API key */
  resetApiKey: Scalars['String']['output'];
  /** Syncs the information of a bot. */
  syncBotInformation: BotObject;
  /** Updates an existing bot. */
  updateBot: BotObject;
  /** Updates the status of a bot. */
  updateBotStatus: BotObject;
  /** Updates the owner permissions of a bot. */
  updateOwnerPermissions: Scalars['Boolean']['output'];
  /** Updates the authenticated user */
  updateUser: AuthUserObject;
  /** Sets the permissions for a user. */
  updateUserPermissions: AuthUserObject;
  /** Update the webhook of the bot */
  updateWebhook: WebhookObject;
};


export type MutationCreateBotArgs = {
  input: CreateBotInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateTagArgs = {
  input: CreateBotTagInput;
};


export type MutationCreateVanityArgs = {
  input: CreateVanityInput;
};


export type MutationCreateVoteArgs = {
  input: BotVoteCreateInput;
};


export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};


export type MutationDeleteBotArgs = {
  input: DeleteBotInput;
};


export type MutationDeleteVanityArgs = {
  input: GetVanityInput;
};


export type MutationDeleteWebhookArgs = {
  input: GetWebhookInput;
};


export type MutationPanelDeleteBotArgs = {
  input: DeleteBotInput;
};


export type MutationResetApiKeyArgs = {
  input: GetBotInput;
};


export type MutationSyncBotInformationArgs = {
  input: GetBotInput;
};


export type MutationUpdateBotArgs = {
  input: CreateBotInput;
};


export type MutationUpdateBotStatusArgs = {
  input: AdminBotChangeStatusInput;
};


export type MutationUpdateOwnerPermissionsArgs = {
  input: UpdateBotOwnerPermisisionsInput;
};


export type MutationUpdateUserArgs = {
  input: AuthUserUpdateInput;
};


export type MutationUpdateUserPermissionsArgs = {
  input: AdminUserPermissionsInput;
};


export type MutationUpdateWebhookArgs = {
  input: UpdateWebhookInput;
};

/** The page information. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Indicates if there is a next page. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there is a previous page. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

/** The input type for pagination. */
export type PaginationInput = {
  /** The page number to retrieve. */
  page?: InputMaybe<Scalars['Int']['input']>;
  /** The amount of items to retrieve per page. */
  size?: InputMaybe<Scalars['Int']['input']>;
  /** The field to sort the items by. */
  sortBy?: InputMaybe<Scalars['String']['input']>;
  /** The order to sort the items by. */
  sortOrder?: InputMaybe<SortOrder>;
};

export type Query = {
  __typename?: 'Query';
  /** Gives a list of bots */
  bots: BotsConnection;
  canVote: BotCanVoteObject;
  /** Gives the information about a bot. */
  getBot: BotObject;
  /** Gives the information about a bot owner. */
  getOwner: BotOwnerObject;
  /** Fetches a tag by name. */
  getTag: BotTagObject;
  /** Fetches a user by their ID */
  getUser: BotOwnerObject;
  /** Get a vanity URL by ID. */
  getVanity: VanityObject;
  /** Get the webhook of the bot */
  getWebhook: WebhookObject;
  /** Fetches the authenticated user */
  me: AuthUserObject;
  /** Gives a list of bots for the panel */
  panelBots: BotsConnection;
  /** Fetches a list of tags. */
  tags: BotTagsConnection;
};


export type QueryBotsArgs = {
  input?: InputMaybe<SafeFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCanVoteArgs = {
  input: BotVoteCreateInput;
};


export type QueryGetBotArgs = {
  input: GetBotInput;
};


export type QueryGetOwnerArgs = {
  input: GetBotOwnerInput;
};


export type QueryGetTagArgs = {
  input: GetBotTagInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryGetVanityArgs = {
  input: GetVanityInput;
};


export type QueryGetWebhookArgs = {
  input: GetWebhookInput;
};


export type QueryPanelBotsArgs = {
  input?: InputMaybe<FiltersBotInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTagsArgs = {
  input?: InputMaybe<FiltersBotTagInput>;
  pagination?: InputMaybe<PaginationInput>;
};

/** FiltersBotInput but skipping certain fields who users simply can't access. */
export type SafeFiltersInput = {
  /** The bots query. */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** The order in which to sort the items. */
export enum SortOrder {
  /** Sort the items in ascending order. */
  Asc = 'ASC',
  /** Sort the items in descending order. */
  Desc = 'DESC'
}

/** Update the permissions of a bot owner. */
export type UpdateBotOwnerPermisisionsInput = {
  /** The ID of the bot. */
  botId: Scalars['String']['input'];
  /** The ID of the bot owner. */
  id: Scalars['String']['input'];
  /** The new permissions of the bot owner. */
  permissions: Scalars['Int']['input'];
};

/** The input to update a webhook */
export type UpdateWebhookInput = {
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['input'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: InputMaybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The webhook URL */
  url: Scalars['String']['input'];
};

/** The permissions that a user has. */
export enum UserPermissionsFlags {
  /** The user is an admin. */
  Admin = 'Admin',
  /** The user can manage badges. */
  ManageBadges = 'ManageBadges',
  /** The user can manage bots. */
  ManageBots = 'ManageBots',
  /** The user can manage permissions. */
  ManagePermissions = 'ManagePermissions',
  /** The user can manage reviews. */
  ManageReviews = 'ManageReviews',
  /** The user can manage tags. */
  ManageTags = 'ManageTags',
  /** The user can manage users. */
  ManageUsers = 'ManageUsers'
}

/** The object representing a vanity URL. */
export type VanityObject = {
  __typename?: 'VanityObject';
  /** The ID of the vanity URL. */
  id: Scalars['ID']['output'];
  /** The ID of the target for the vanity URL. */
  targetId: Scalars['String']['output'];
  /** The type of vanity URL. */
  type: VanityType;
  /** The ID of the user who created the vanity URL. */
  userId: Scalars['String']['output'];
};

/** The type of vanity URL. */
export enum VanityType {
  /** The vanity URL is for a bot. */
  Bot = 'BOT',
  /** The vanity URL is for a user. */
  User = 'USER'
}

/** The type of webhook event. */
export enum WebhookEvent {
  /** All events. */
  AllEvents = 'ALL_EVENTS',
  /** A new review has been created. */
  NewReview = 'NEW_REVIEW',
  /** A new vote has been created. */
  NewVote = 'NEW_VOTE',
  /** The status of a bot has changed. */
  StatusChange = 'STATUS_CHANGE'
}

/** The webhook object */
export type WebhookObject = {
  __typename?: 'WebhookObject';
  /** The events to listen to for the webhook */
  events: Array<WebhookEvent>;
  /** The bot ID */
  id: Scalars['ID']['output'];
  /** Custom payload fields to be sent with the webhook */
  payloadFields?: Maybe<Array<WebhookPayloadField>>;
  /** The webhook secret */
  secret: Scalars['String']['output'];
  /** The webhook URL */
  url: Scalars['String']['output'];
};

/** The field in the webhook payload. */
export enum WebhookPayloadField {
  /** Discord ID of the bot that the webhook is for. */
  Bot = 'BOT',
  /** Query string parameters found on the URL. */
  Query = 'QUERY',
  /** Discord ID of the user who triggered the webhook. */
  User = 'USER'
}

export type CreateBotMutationVariables = Exact<{
  input: CreateBotInput;
}>;


export type CreateBotMutation = { __typename?: 'Mutation', createBot: { __typename?: 'BotObject', id: string, name: string } };

export type DeleteBotMutationVariables = Exact<{
  input: DeleteBotInput;
}>;


export type DeleteBotMutation = { __typename?: 'Mutation', deleteBot: { __typename?: 'BotObject', id: string, name: string } };

export type ResetApiKeyMutationVariables = Exact<{
  input: GetBotInput;
}>;


export type ResetApiKeyMutation = { __typename?: 'Mutation', resetApiKey: string };

export type CreateVoteMutationVariables = Exact<{
  input: BotVoteCreateInput;
}>;


export type CreateVoteMutation = { __typename?: 'Mutation', createVote: { __typename?: 'BotVoteObject', botId: string, expires: number } };

export type CreateWebhookMutationVariables = Exact<{
  input: CreateWebhookInput;
}>;


export type CreateWebhookMutation = { __typename?: 'Mutation', createWebhook: { __typename?: 'WebhookObject', events: Array<WebhookEvent>, payloadFields?: Array<WebhookPayloadField> | null, id: string, secret: string, url: string } };

export type UpdateWebhookMutationVariables = Exact<{
  input: UpdateWebhookInput;
}>;


export type UpdateWebhookMutation = { __typename?: 'Mutation', updateWebhook: { __typename?: 'WebhookObject', events: Array<WebhookEvent>, payloadFields?: Array<WebhookPayloadField> | null, id: string, secret: string, url: string } };

export type SyncBotInformationMutationVariables = Exact<{
  input: GetBotInput;
}>;


export type SyncBotInformationMutation = { __typename?: 'Mutation', syncBotInformation: { __typename?: 'BotObject', name: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logOut: boolean };

export type CreateSessionMutationVariables = Exact<{
  input: CreateSessionInput;
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: { __typename?: 'AuthSessionObject', access_token: string, expires_in: number, refresh_token: string } };

export type CreateVanityMutationVariables = Exact<{
  input: CreateVanityInput;
}>;


export type CreateVanityMutation = { __typename?: 'Mutation', createVanity: { __typename?: 'VanityObject', id: string, targetId: string, type: VanityType, userId: string } };

export type BotCardFragment = { __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } };

export type BotCardsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;


export type BotCardsQuery = { __typename?: 'Query', bots: { __typename?: 'BotsConnection', nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> | null } };

export type HomeBotsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeBotsQuery = { __typename?: 'Query', mostVoted: { __typename?: 'BotsConnection', nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> | null }, mostBig: { __typename?: 'BotsConnection', nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> | null }, mostReviewed: { __typename?: 'BotsConnection', nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> | null } };

export type SingleBotQueryVariables = Exact<{
  input: GetBotInput;
}>;


export type SingleBotQuery = { __typename?: 'Query', getBot: { __typename?: 'BotObject', avatar?: string | null, banner?: string | null, certified: boolean, description: string, website?: string | null, supportServer?: string | null, status: BotStatus, shortDescription: string, prefix?: string | null, github?: string | null, guildCount: number, id: string, importedFrom?: string | null, inviteLink?: string | null, createdAt: string, name: string, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number }, owners: Array<{ __typename?: 'BotOwnerObject', username: string, id: string, avatar?: string | null }>, tags: Array<{ __typename?: 'BotTagObject', displayName: string, id: string }> } };

export type SearchBotsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  input?: InputMaybe<SafeFiltersInput>;
}>;


export type SearchBotsQuery = { __typename?: 'Query', bots: { __typename?: 'BotsConnection', totalCount: number, nodes?: Array<{ __typename?: 'BotObject', id: string, avatar?: string | null, name: string, shortDescription: string }> | null } };

export type SingleBotVoteQueryVariables = Exact<{
  input: GetBotInput;
}>;


export type SingleBotVoteQuery = { __typename?: 'Query', getBot: { __typename?: 'BotObject', avatar?: string | null, id: string, name: string, guildCount: number, certified: boolean, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } } };

export type CanVoteQueryVariables = Exact<{
  input: BotVoteCreateInput;
}>;


export type CanVoteQuery = { __typename?: 'Query', canVote: { __typename?: 'BotCanVoteObject', canVote: boolean, expires?: number | null } };

export type WebhookQueryVariables = Exact<{
  input: GetWebhookInput;
}>;


export type WebhookQuery = { __typename?: 'Query', getWebhook: { __typename?: 'WebhookObject', id: string, events: Array<WebhookEvent>, payloadFields?: Array<WebhookPayloadField> | null, secret: string, url: string } };

export type PanelBotsQueryVariables = Exact<{
  input?: InputMaybe<FiltersBotInput>;
}>;


export type PanelBotsQuery = { __typename?: 'Query', panelBots: { __typename?: 'BotsConnection', totalCount: number, nodes?: Array<{ __typename?: 'BotObject', avatar?: string | null, id: string, name: string, status: BotStatus, owners: Array<{ __typename?: 'BotOwnerObject', avatar?: string | null, id: string, username: string }> }> | null } };

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'BotOwnerObject', avatar?: string | null, bio?: string | null, id: string, username: string, banner?: string | null, bots: Array<{ __typename?: 'BotObject', avatar?: string | null, shortDescription: string, name: string, id: string, guildCount: number, certified: boolean, inviteLink?: string | null, tags: Array<{ __typename?: 'BotTagObject', displayName: string }>, votes: { __typename?: 'BotVoteObjectConnection', totalCount: number } }> } };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', tags: { __typename?: 'BotTagsConnection', nodes?: Array<{ __typename?: 'BotTagObject', displayName: string, id: string, bots: { __typename?: 'BotsConnection', totalCount: number } }> | null } };

export type SessionQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionQuery = { __typename?: 'Query', me: { __typename?: 'AuthUserObject', id: string, username: string, permissions: number, avatar?: string | null } };

export type GetVanityQueryVariables = Exact<{
  input: GetVanityInput;
}>;


export type GetVanityQuery = { __typename?: 'Query', getVanity: { __typename?: 'VanityObject', id: string, targetId: string, type: VanityType, userId: string } };

export type GetPanelStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPanelStatsQuery = { __typename?: 'Query', bots: { __typename?: 'BotsConnection', totalCount: number }, tags: { __typename?: 'BotTagsConnection', totalCount: number } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdminBotChangeStatusInput: AdminBotChangeStatusInput;
  AdminUserPermissionsInput: AdminUserPermissionsInput;
  AuthSessionObject: ResolverTypeWrapper<AuthSessionObject>;
  AuthUserObject: ResolverTypeWrapper<AuthUserObject>;
  AuthUserSessionObject: ResolverTypeWrapper<AuthUserSessionObject>;
  AuthUserUpdateInput: AuthUserUpdateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BotCanVoteObject: ResolverTypeWrapper<BotCanVoteObject>;
  BotObject: ResolverTypeWrapper<BotObject>;
  BotOwnerBadgeObject: ResolverTypeWrapper<BotOwnerBadgeObject>;
  BotOwnerObject: ResolverTypeWrapper<BotOwnerObject>;
  BotOwnerPermissionsObject: ResolverTypeWrapper<BotOwnerPermissionsObject>;
  BotStatus: BotStatus;
  BotTagObject: ResolverTypeWrapper<BotTagObject>;
  BotTagsConnection: ResolverTypeWrapper<BotTagsConnection>;
  BotVoteCreateInput: BotVoteCreateInput;
  BotVoteObject: ResolverTypeWrapper<BotVoteObject>;
  BotVoteObjectConnection: ResolverTypeWrapper<BotVoteObjectConnection>;
  BotsConnection: ResolverTypeWrapper<BotsConnection>;
  CreateBotInput: CreateBotInput;
  CreateBotTagInput: CreateBotTagInput;
  CreateSessionInput: CreateSessionInput;
  CreateVanityInput: CreateVanityInput;
  CreateWebhookInput: CreateWebhookInput;
  DeleteBotInput: DeleteBotInput;
  FiltersBotInput: FiltersBotInput;
  FiltersBotTagInput: FiltersBotTagInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GetBotInput: GetBotInput;
  GetBotOwnerInput: GetBotOwnerInput;
  GetBotTagInput: GetBotTagInput;
  GetUserInput: GetUserInput;
  GetVanityInput: GetVanityInput;
  GetWebhookInput: GetWebhookInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationInput: PaginationInput;
  Query: ResolverTypeWrapper<{}>;
  SafeFiltersInput: SafeFiltersInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateBotOwnerPermisisionsInput: UpdateBotOwnerPermisisionsInput;
  UpdateWebhookInput: UpdateWebhookInput;
  UserPermissionsFlags: UserPermissionsFlags;
  VanityObject: ResolverTypeWrapper<VanityObject>;
  VanityType: VanityType;
  WebhookEvent: WebhookEvent;
  WebhookObject: ResolverTypeWrapper<WebhookObject>;
  WebhookPayloadField: WebhookPayloadField;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdminBotChangeStatusInput: AdminBotChangeStatusInput;
  AdminUserPermissionsInput: AdminUserPermissionsInput;
  AuthSessionObject: AuthSessionObject;
  AuthUserObject: AuthUserObject;
  AuthUserSessionObject: AuthUserSessionObject;
  AuthUserUpdateInput: AuthUserUpdateInput;
  Boolean: Scalars['Boolean']['output'];
  BotCanVoteObject: BotCanVoteObject;
  BotObject: BotObject;
  BotOwnerBadgeObject: BotOwnerBadgeObject;
  BotOwnerObject: BotOwnerObject;
  BotOwnerPermissionsObject: BotOwnerPermissionsObject;
  BotTagObject: BotTagObject;
  BotTagsConnection: BotTagsConnection;
  BotVoteCreateInput: BotVoteCreateInput;
  BotVoteObject: BotVoteObject;
  BotVoteObjectConnection: BotVoteObjectConnection;
  BotsConnection: BotsConnection;
  CreateBotInput: CreateBotInput;
  CreateBotTagInput: CreateBotTagInput;
  CreateSessionInput: CreateSessionInput;
  CreateVanityInput: CreateVanityInput;
  CreateWebhookInput: CreateWebhookInput;
  DeleteBotInput: DeleteBotInput;
  FiltersBotInput: FiltersBotInput;
  FiltersBotTagInput: FiltersBotTagInput;
  Float: Scalars['Float']['output'];
  GetBotInput: GetBotInput;
  GetBotOwnerInput: GetBotOwnerInput;
  GetBotTagInput: GetBotTagInput;
  GetUserInput: GetUserInput;
  GetVanityInput: GetVanityInput;
  GetWebhookInput: GetWebhookInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PageInfo: PageInfo;
  PaginationInput: PaginationInput;
  Query: {};
  SafeFiltersInput: SafeFiltersInput;
  String: Scalars['String']['output'];
  UpdateBotOwnerPermisisionsInput: UpdateBotOwnerPermisisionsInput;
  UpdateWebhookInput: UpdateWebhookInput;
  VanityObject: VanityObject;
  WebhookObject: WebhookObject;
};

export type AuthSessionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthSessionObject'] = ResolversParentTypes['AuthSessionObject']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires_in?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthUserObject'] = ResolversParentTypes['AuthUserObject']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sessions?: Resolver<Array<ResolversTypes['AuthUserSessionObject']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserSessionObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthUserSessionObject'] = ResolversParentTypes['AuthUserSessionObject']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotCanVoteObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotCanVoteObject'] = ResolversParentTypes['BotCanVoteObject']> = {
  canVote?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotObject'] = ResolversParentTypes['BotObject']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  certified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guildCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  importedFrom?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inviteLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerPermissions?: Resolver<Array<ResolversTypes['BotOwnerPermissionsObject']>, ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['BotOwnerObject']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BotStatus'], ParentType, ContextType>;
  supportServer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['BotTagObject']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BotVoteObjectConnection'], ParentType, ContextType, Partial<BotObjectVotesArgs>>;
  webhook?: Resolver<ResolversTypes['WebhookObject'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotOwnerBadgeObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotOwnerBadgeObject'] = ResolversParentTypes['BotOwnerBadgeObject']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotOwnerObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotOwnerObject'] = ResolversParentTypes['BotOwnerObject']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  badges?: Resolver<Array<ResolversTypes['BotOwnerBadgeObject']>, ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bots?: Resolver<Array<ResolversTypes['BotObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotOwnerPermissionsObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotOwnerPermissionsObject'] = ResolversParentTypes['BotOwnerPermissionsObject']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotTagObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotTagObject'] = ResolversParentTypes['BotTagObject']> = {
  bots?: Resolver<ResolversTypes['BotsConnection'], ParentType, ContextType, Partial<BotTagObjectBotsArgs>>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotTagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotTagsConnection'] = ResolversParentTypes['BotTagsConnection']> = {
  nodes?: Resolver<Maybe<Array<ResolversTypes['BotTagObject']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotVoteObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotVoteObject'] = ResolversParentTypes['BotVoteObject']> = {
  botId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotVoteObjectConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotVoteObjectConnection'] = ResolversParentTypes['BotVoteObjectConnection']> = {
  nodes?: Resolver<Maybe<Array<ResolversTypes['BotVoteObject']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BotsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BotsConnection'] = ResolversParentTypes['BotsConnection']> = {
  nodes?: Resolver<Maybe<Array<ResolversTypes['BotObject']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBot?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationCreateBotArgs, 'input'>>;
  createSession?: Resolver<ResolversTypes['AuthSessionObject'], ParentType, ContextType, RequireFields<MutationCreateSessionArgs, 'input'>>;
  createTag?: Resolver<ResolversTypes['BotTagObject'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'input'>>;
  createVanity?: Resolver<ResolversTypes['VanityObject'], ParentType, ContextType, RequireFields<MutationCreateVanityArgs, 'input'>>;
  createVote?: Resolver<ResolversTypes['BotVoteObject'], ParentType, ContextType, RequireFields<MutationCreateVoteArgs, 'input'>>;
  createWebhook?: Resolver<ResolversTypes['WebhookObject'], ParentType, ContextType, RequireFields<MutationCreateWebhookArgs, 'input'>>;
  deleteBot?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationDeleteBotArgs, 'input'>>;
  deleteVanity?: Resolver<ResolversTypes['VanityObject'], ParentType, ContextType, RequireFields<MutationDeleteVanityArgs, 'input'>>;
  deleteWebhook?: Resolver<ResolversTypes['WebhookObject'], ParentType, ContextType, RequireFields<MutationDeleteWebhookArgs, 'input'>>;
  logOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  panelDeleteBot?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationPanelDeleteBotArgs, 'input'>>;
  refreshSession?: Resolver<ResolversTypes['AuthSessionObject'], ParentType, ContextType>;
  resetApiKey?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationResetApiKeyArgs, 'input'>>;
  syncBotInformation?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationSyncBotInformationArgs, 'input'>>;
  updateBot?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationUpdateBotArgs, 'input'>>;
  updateBotStatus?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<MutationUpdateBotStatusArgs, 'input'>>;
  updateOwnerPermissions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateOwnerPermissionsArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['AuthUserObject'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserPermissions?: Resolver<ResolversTypes['AuthUserObject'], ParentType, ContextType, RequireFields<MutationUpdateUserPermissionsArgs, 'input'>>;
  updateWebhook?: Resolver<ResolversTypes['WebhookObject'], ParentType, ContextType, RequireFields<MutationUpdateWebhookArgs, 'input'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bots?: Resolver<ResolversTypes['BotsConnection'], ParentType, ContextType, Partial<QueryBotsArgs>>;
  canVote?: Resolver<ResolversTypes['BotCanVoteObject'], ParentType, ContextType, RequireFields<QueryCanVoteArgs, 'input'>>;
  getBot?: Resolver<ResolversTypes['BotObject'], ParentType, ContextType, RequireFields<QueryGetBotArgs, 'input'>>;
  getOwner?: Resolver<ResolversTypes['BotOwnerObject'], ParentType, ContextType, RequireFields<QueryGetOwnerArgs, 'input'>>;
  getTag?: Resolver<ResolversTypes['BotTagObject'], ParentType, ContextType, RequireFields<QueryGetTagArgs, 'input'>>;
  getUser?: Resolver<ResolversTypes['BotOwnerObject'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'input'>>;
  getVanity?: Resolver<ResolversTypes['VanityObject'], ParentType, ContextType, RequireFields<QueryGetVanityArgs, 'input'>>;
  getWebhook?: Resolver<ResolversTypes['WebhookObject'], ParentType, ContextType, RequireFields<QueryGetWebhookArgs, 'input'>>;
  me?: Resolver<ResolversTypes['AuthUserObject'], ParentType, ContextType>;
  panelBots?: Resolver<ResolversTypes['BotsConnection'], ParentType, ContextType, Partial<QueryPanelBotsArgs>>;
  tags?: Resolver<ResolversTypes['BotTagsConnection'], ParentType, ContextType, Partial<QueryTagsArgs>>;
};

export type VanityObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['VanityObject'] = ResolversParentTypes['VanityObject']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  targetId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['VanityType'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebhookObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebhookObject'] = ResolversParentTypes['WebhookObject']> = {
  events?: Resolver<Array<ResolversTypes['WebhookEvent']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payloadFields?: Resolver<Maybe<Array<ResolversTypes['WebhookPayloadField']>>, ParentType, ContextType>;
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthSessionObject?: AuthSessionObjectResolvers<ContextType>;
  AuthUserObject?: AuthUserObjectResolvers<ContextType>;
  AuthUserSessionObject?: AuthUserSessionObjectResolvers<ContextType>;
  BotCanVoteObject?: BotCanVoteObjectResolvers<ContextType>;
  BotObject?: BotObjectResolvers<ContextType>;
  BotOwnerBadgeObject?: BotOwnerBadgeObjectResolvers<ContextType>;
  BotOwnerObject?: BotOwnerObjectResolvers<ContextType>;
  BotOwnerPermissionsObject?: BotOwnerPermissionsObjectResolvers<ContextType>;
  BotTagObject?: BotTagObjectResolvers<ContextType>;
  BotTagsConnection?: BotTagsConnectionResolvers<ContextType>;
  BotVoteObject?: BotVoteObjectResolvers<ContextType>;
  BotVoteObjectConnection?: BotVoteObjectConnectionResolvers<ContextType>;
  BotsConnection?: BotsConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  VanityObject?: VanityObjectResolvers<ContextType>;
  WebhookObject?: WebhookObjectResolvers<ContextType>;
};


export const BotCardFragmentDoc = gql`
    fragment BotCard on BotObject {
  avatar
  shortDescription
  name
  tags {
    displayName
  }
  id
  guildCount
  votes {
    totalCount
  }
  certified
  inviteLink
}
    `;
export const CreateBotDocument = gql`
    mutation CreateBot($input: CreateBotInput!) {
  createBot(input: $input) {
    id
    name
  }
}
    `;
export type CreateBotMutationFn = Apollo.MutationFunction<CreateBotMutation, CreateBotMutationVariables>;

/**
 * __useCreateBotMutation__
 *
 * To run a mutation, you first call `useCreateBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBotMutation(baseOptions?: Apollo.MutationHookOptions<CreateBotMutation, CreateBotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBotMutation, CreateBotMutationVariables>(CreateBotDocument, options);
      }
export type CreateBotMutationHookResult = ReturnType<typeof useCreateBotMutation>;
export type CreateBotMutationResult = Apollo.MutationResult<CreateBotMutation>;
export type CreateBotMutationOptions = Apollo.BaseMutationOptions<CreateBotMutation, CreateBotMutationVariables>;
export const DeleteBotDocument = gql`
    mutation DeleteBot($input: DeleteBotInput!) {
  deleteBot(input: $input) {
    id
    name
  }
}
    `;
export type DeleteBotMutationFn = Apollo.MutationFunction<DeleteBotMutation, DeleteBotMutationVariables>;

/**
 * __useDeleteBotMutation__
 *
 * To run a mutation, you first call `useDeleteBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBotMutation, { data, loading, error }] = useDeleteBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBotMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBotMutation, DeleteBotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBotMutation, DeleteBotMutationVariables>(DeleteBotDocument, options);
      }
export type DeleteBotMutationHookResult = ReturnType<typeof useDeleteBotMutation>;
export type DeleteBotMutationResult = Apollo.MutationResult<DeleteBotMutation>;
export type DeleteBotMutationOptions = Apollo.BaseMutationOptions<DeleteBotMutation, DeleteBotMutationVariables>;
export const ResetApiKeyDocument = gql`
    mutation ResetApiKey($input: GetBotInput!) {
  resetApiKey(input: $input)
}
    `;
export type ResetApiKeyMutationFn = Apollo.MutationFunction<ResetApiKeyMutation, ResetApiKeyMutationVariables>;

/**
 * __useResetApiKeyMutation__
 *
 * To run a mutation, you first call `useResetApiKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetApiKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetApiKeyMutation, { data, loading, error }] = useResetApiKeyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetApiKeyMutation(baseOptions?: Apollo.MutationHookOptions<ResetApiKeyMutation, ResetApiKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetApiKeyMutation, ResetApiKeyMutationVariables>(ResetApiKeyDocument, options);
      }
export type ResetApiKeyMutationHookResult = ReturnType<typeof useResetApiKeyMutation>;
export type ResetApiKeyMutationResult = Apollo.MutationResult<ResetApiKeyMutation>;
export type ResetApiKeyMutationOptions = Apollo.BaseMutationOptions<ResetApiKeyMutation, ResetApiKeyMutationVariables>;
export const CreateVoteDocument = gql`
    mutation CreateVote($input: BotVoteCreateInput!) {
  createVote(input: $input) {
    botId
    expires
  }
}
    `;
export type CreateVoteMutationFn = Apollo.MutationFunction<CreateVoteMutation, CreateVoteMutationVariables>;

/**
 * __useCreateVoteMutation__
 *
 * To run a mutation, you first call `useCreateVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVoteMutation, { data, loading, error }] = useCreateVoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateVoteMutation, CreateVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVoteMutation, CreateVoteMutationVariables>(CreateVoteDocument, options);
      }
export type CreateVoteMutationHookResult = ReturnType<typeof useCreateVoteMutation>;
export type CreateVoteMutationResult = Apollo.MutationResult<CreateVoteMutation>;
export type CreateVoteMutationOptions = Apollo.BaseMutationOptions<CreateVoteMutation, CreateVoteMutationVariables>;
export const CreateWebhookDocument = gql`
    mutation CreateWebhook($input: CreateWebhookInput!) {
  createWebhook(input: $input) {
    events
    payloadFields
    id
    secret
    url
  }
}
    `;
export type CreateWebhookMutationFn = Apollo.MutationFunction<CreateWebhookMutation, CreateWebhookMutationVariables>;

/**
 * __useCreateWebhookMutation__
 *
 * To run a mutation, you first call `useCreateWebhookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWebhookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWebhookMutation, { data, loading, error }] = useCreateWebhookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWebhookMutation(baseOptions?: Apollo.MutationHookOptions<CreateWebhookMutation, CreateWebhookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWebhookMutation, CreateWebhookMutationVariables>(CreateWebhookDocument, options);
      }
export type CreateWebhookMutationHookResult = ReturnType<typeof useCreateWebhookMutation>;
export type CreateWebhookMutationResult = Apollo.MutationResult<CreateWebhookMutation>;
export type CreateWebhookMutationOptions = Apollo.BaseMutationOptions<CreateWebhookMutation, CreateWebhookMutationVariables>;
export const UpdateWebhookDocument = gql`
    mutation UpdateWebhook($input: UpdateWebhookInput!) {
  updateWebhook(input: $input) {
    events
    payloadFields
    id
    secret
    url
  }
}
    `;
export type UpdateWebhookMutationFn = Apollo.MutationFunction<UpdateWebhookMutation, UpdateWebhookMutationVariables>;

/**
 * __useUpdateWebhookMutation__
 *
 * To run a mutation, you first call `useUpdateWebhookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWebhookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWebhookMutation, { data, loading, error }] = useUpdateWebhookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWebhookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWebhookMutation, UpdateWebhookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWebhookMutation, UpdateWebhookMutationVariables>(UpdateWebhookDocument, options);
      }
export type UpdateWebhookMutationHookResult = ReturnType<typeof useUpdateWebhookMutation>;
export type UpdateWebhookMutationResult = Apollo.MutationResult<UpdateWebhookMutation>;
export type UpdateWebhookMutationOptions = Apollo.BaseMutationOptions<UpdateWebhookMutation, UpdateWebhookMutationVariables>;
export const SyncBotInformationDocument = gql`
    mutation SyncBotInformation($input: GetBotInput!) {
  syncBotInformation(input: $input) {
    name
  }
}
    `;
export type SyncBotInformationMutationFn = Apollo.MutationFunction<SyncBotInformationMutation, SyncBotInformationMutationVariables>;

/**
 * __useSyncBotInformationMutation__
 *
 * To run a mutation, you first call `useSyncBotInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncBotInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncBotInformationMutation, { data, loading, error }] = useSyncBotInformationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSyncBotInformationMutation(baseOptions?: Apollo.MutationHookOptions<SyncBotInformationMutation, SyncBotInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncBotInformationMutation, SyncBotInformationMutationVariables>(SyncBotInformationDocument, options);
      }
export type SyncBotInformationMutationHookResult = ReturnType<typeof useSyncBotInformationMutation>;
export type SyncBotInformationMutationResult = Apollo.MutationResult<SyncBotInformationMutation>;
export type SyncBotInformationMutationOptions = Apollo.BaseMutationOptions<SyncBotInformationMutation, SyncBotInformationMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logOut
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateSessionDocument = gql`
    mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
    access_token
    expires_in
    refresh_token
  }
}
    `;
export type CreateSessionMutationFn = Apollo.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, options);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const CreateVanityDocument = gql`
    mutation CreateVanity($input: CreateVanityInput!) {
  createVanity(input: $input) {
    id
    targetId
    type
    userId
  }
}
    `;
export type CreateVanityMutationFn = Apollo.MutationFunction<CreateVanityMutation, CreateVanityMutationVariables>;

/**
 * __useCreateVanityMutation__
 *
 * To run a mutation, you first call `useCreateVanityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVanityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVanityMutation, { data, loading, error }] = useCreateVanityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVanityMutation(baseOptions?: Apollo.MutationHookOptions<CreateVanityMutation, CreateVanityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVanityMutation, CreateVanityMutationVariables>(CreateVanityDocument, options);
      }
export type CreateVanityMutationHookResult = ReturnType<typeof useCreateVanityMutation>;
export type CreateVanityMutationResult = Apollo.MutationResult<CreateVanityMutation>;
export type CreateVanityMutationOptions = Apollo.BaseMutationOptions<CreateVanityMutation, CreateVanityMutationVariables>;
export const BotCardsDocument = gql`
    query BotCards($pagination: PaginationInput) {
  bots(pagination: $pagination) {
    nodes {
      ...BotCard
    }
  }
}
    ${BotCardFragmentDoc}`;

/**
 * __useBotCardsQuery__
 *
 * To run a query within a React component, call `useBotCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBotCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBotCardsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useBotCardsQuery(baseOptions?: Apollo.QueryHookOptions<BotCardsQuery, BotCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BotCardsQuery, BotCardsQueryVariables>(BotCardsDocument, options);
      }
export function useBotCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BotCardsQuery, BotCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BotCardsQuery, BotCardsQueryVariables>(BotCardsDocument, options);
        }
export function useBotCardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BotCardsQuery, BotCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BotCardsQuery, BotCardsQueryVariables>(BotCardsDocument, options);
        }
export type BotCardsQueryHookResult = ReturnType<typeof useBotCardsQuery>;
export type BotCardsLazyQueryHookResult = ReturnType<typeof useBotCardsLazyQuery>;
export type BotCardsSuspenseQueryHookResult = ReturnType<typeof useBotCardsSuspenseQuery>;
export type BotCardsQueryResult = Apollo.QueryResult<BotCardsQuery, BotCardsQueryVariables>;
export const HomeBotsDocument = gql`
    query HomeBots {
  mostVoted: bots(pagination: {size: 5, sortOrder: DESC, sortBy: "votes"}) {
    nodes {
      ...BotCard
    }
  }
  mostBig: bots(pagination: {size: 5, sortOrder: DESC, sortBy: "guildCount"}) {
    nodes {
      ...BotCard
    }
  }
  mostReviewed: bots(pagination: {size: 5, sortOrder: DESC, sortBy: "reviews"}) {
    nodes {
      ...BotCard
    }
  }
}
    ${BotCardFragmentDoc}`;

/**
 * __useHomeBotsQuery__
 *
 * To run a query within a React component, call `useHomeBotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeBotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeBotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeBotsQuery(baseOptions?: Apollo.QueryHookOptions<HomeBotsQuery, HomeBotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeBotsQuery, HomeBotsQueryVariables>(HomeBotsDocument, options);
      }
export function useHomeBotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeBotsQuery, HomeBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeBotsQuery, HomeBotsQueryVariables>(HomeBotsDocument, options);
        }
export function useHomeBotsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeBotsQuery, HomeBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeBotsQuery, HomeBotsQueryVariables>(HomeBotsDocument, options);
        }
export type HomeBotsQueryHookResult = ReturnType<typeof useHomeBotsQuery>;
export type HomeBotsLazyQueryHookResult = ReturnType<typeof useHomeBotsLazyQuery>;
export type HomeBotsSuspenseQueryHookResult = ReturnType<typeof useHomeBotsSuspenseQuery>;
export type HomeBotsQueryResult = Apollo.QueryResult<HomeBotsQuery, HomeBotsQueryVariables>;
export const SingleBotDocument = gql`
    query SingleBot($input: GetBotInput!) {
  getBot(input: $input) {
    avatar
    banner
    certified
    description
    website
    supportServer
    status
    shortDescription
    prefix
    github
    guildCount
    id
    importedFrom
    inviteLink
    createdAt
    name
    votes {
      totalCount
    }
    owners {
      username
      id
      avatar
    }
    tags {
      displayName
      id
    }
  }
}
    `;

/**
 * __useSingleBotQuery__
 *
 * To run a query within a React component, call `useSingleBotQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBotQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSingleBotQuery(baseOptions: Apollo.QueryHookOptions<SingleBotQuery, SingleBotQueryVariables> & ({ variables: SingleBotQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleBotQuery, SingleBotQueryVariables>(SingleBotDocument, options);
      }
export function useSingleBotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleBotQuery, SingleBotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleBotQuery, SingleBotQueryVariables>(SingleBotDocument, options);
        }
export function useSingleBotSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SingleBotQuery, SingleBotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SingleBotQuery, SingleBotQueryVariables>(SingleBotDocument, options);
        }
export type SingleBotQueryHookResult = ReturnType<typeof useSingleBotQuery>;
export type SingleBotLazyQueryHookResult = ReturnType<typeof useSingleBotLazyQuery>;
export type SingleBotSuspenseQueryHookResult = ReturnType<typeof useSingleBotSuspenseQuery>;
export type SingleBotQueryResult = Apollo.QueryResult<SingleBotQuery, SingleBotQueryVariables>;
export const SearchBotsDocument = gql`
    query SearchBots($pagination: PaginationInput, $input: SafeFiltersInput) {
  bots(pagination: $pagination, input: $input) {
    totalCount
    nodes {
      id
      avatar
      name
      shortDescription
    }
  }
}
    `;

/**
 * __useSearchBotsQuery__
 *
 * To run a query within a React component, call `useSearchBotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBotsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchBotsQuery(baseOptions?: Apollo.QueryHookOptions<SearchBotsQuery, SearchBotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBotsQuery, SearchBotsQueryVariables>(SearchBotsDocument, options);
      }
export function useSearchBotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBotsQuery, SearchBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBotsQuery, SearchBotsQueryVariables>(SearchBotsDocument, options);
        }
export function useSearchBotsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchBotsQuery, SearchBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchBotsQuery, SearchBotsQueryVariables>(SearchBotsDocument, options);
        }
export type SearchBotsQueryHookResult = ReturnType<typeof useSearchBotsQuery>;
export type SearchBotsLazyQueryHookResult = ReturnType<typeof useSearchBotsLazyQuery>;
export type SearchBotsSuspenseQueryHookResult = ReturnType<typeof useSearchBotsSuspenseQuery>;
export type SearchBotsQueryResult = Apollo.QueryResult<SearchBotsQuery, SearchBotsQueryVariables>;
export const SingleBotVoteDocument = gql`
    query SingleBotVote($input: GetBotInput!) {
  getBot(input: $input) {
    avatar
    id
    name
    votes {
      totalCount
    }
    guildCount
    certified
  }
}
    `;

/**
 * __useSingleBotVoteQuery__
 *
 * To run a query within a React component, call `useSingleBotVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleBotVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleBotVoteQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSingleBotVoteQuery(baseOptions: Apollo.QueryHookOptions<SingleBotVoteQuery, SingleBotVoteQueryVariables> & ({ variables: SingleBotVoteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleBotVoteQuery, SingleBotVoteQueryVariables>(SingleBotVoteDocument, options);
      }
export function useSingleBotVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleBotVoteQuery, SingleBotVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleBotVoteQuery, SingleBotVoteQueryVariables>(SingleBotVoteDocument, options);
        }
export function useSingleBotVoteSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SingleBotVoteQuery, SingleBotVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SingleBotVoteQuery, SingleBotVoteQueryVariables>(SingleBotVoteDocument, options);
        }
export type SingleBotVoteQueryHookResult = ReturnType<typeof useSingleBotVoteQuery>;
export type SingleBotVoteLazyQueryHookResult = ReturnType<typeof useSingleBotVoteLazyQuery>;
export type SingleBotVoteSuspenseQueryHookResult = ReturnType<typeof useSingleBotVoteSuspenseQuery>;
export type SingleBotVoteQueryResult = Apollo.QueryResult<SingleBotVoteQuery, SingleBotVoteQueryVariables>;
export const CanVoteDocument = gql`
    query CanVote($input: BotVoteCreateInput!) {
  canVote(input: $input) {
    canVote
    expires
  }
}
    `;

/**
 * __useCanVoteQuery__
 *
 * To run a query within a React component, call `useCanVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useCanVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCanVoteQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCanVoteQuery(baseOptions: Apollo.QueryHookOptions<CanVoteQuery, CanVoteQueryVariables> & ({ variables: CanVoteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CanVoteQuery, CanVoteQueryVariables>(CanVoteDocument, options);
      }
export function useCanVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CanVoteQuery, CanVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CanVoteQuery, CanVoteQueryVariables>(CanVoteDocument, options);
        }
export function useCanVoteSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CanVoteQuery, CanVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CanVoteQuery, CanVoteQueryVariables>(CanVoteDocument, options);
        }
export type CanVoteQueryHookResult = ReturnType<typeof useCanVoteQuery>;
export type CanVoteLazyQueryHookResult = ReturnType<typeof useCanVoteLazyQuery>;
export type CanVoteSuspenseQueryHookResult = ReturnType<typeof useCanVoteSuspenseQuery>;
export type CanVoteQueryResult = Apollo.QueryResult<CanVoteQuery, CanVoteQueryVariables>;
export const WebhookDocument = gql`
    query Webhook($input: GetWebhookInput!) {
  getWebhook(input: $input) {
    id
    events
    payloadFields
    secret
    url
  }
}
    `;

/**
 * __useWebhookQuery__
 *
 * To run a query within a React component, call `useWebhookQuery` and pass it any options that fit your needs.
 * When your component renders, `useWebhookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWebhookQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWebhookQuery(baseOptions: Apollo.QueryHookOptions<WebhookQuery, WebhookQueryVariables> & ({ variables: WebhookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WebhookQuery, WebhookQueryVariables>(WebhookDocument, options);
      }
export function useWebhookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WebhookQuery, WebhookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WebhookQuery, WebhookQueryVariables>(WebhookDocument, options);
        }
export function useWebhookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<WebhookQuery, WebhookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WebhookQuery, WebhookQueryVariables>(WebhookDocument, options);
        }
export type WebhookQueryHookResult = ReturnType<typeof useWebhookQuery>;
export type WebhookLazyQueryHookResult = ReturnType<typeof useWebhookLazyQuery>;
export type WebhookSuspenseQueryHookResult = ReturnType<typeof useWebhookSuspenseQuery>;
export type WebhookQueryResult = Apollo.QueryResult<WebhookQuery, WebhookQueryVariables>;
export const PanelBotsDocument = gql`
    query PanelBots($input: FiltersBotInput) {
  panelBots(input: $input) {
    totalCount
    nodes {
      avatar
      owners {
        avatar
        id
        username
      }
      id
      name
      status
    }
  }
}
    `;

/**
 * __usePanelBotsQuery__
 *
 * To run a query within a React component, call `usePanelBotsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePanelBotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePanelBotsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePanelBotsQuery(baseOptions?: Apollo.QueryHookOptions<PanelBotsQuery, PanelBotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PanelBotsQuery, PanelBotsQueryVariables>(PanelBotsDocument, options);
      }
export function usePanelBotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PanelBotsQuery, PanelBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PanelBotsQuery, PanelBotsQueryVariables>(PanelBotsDocument, options);
        }
export function usePanelBotsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PanelBotsQuery, PanelBotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PanelBotsQuery, PanelBotsQueryVariables>(PanelBotsDocument, options);
        }
export type PanelBotsQueryHookResult = ReturnType<typeof usePanelBotsQuery>;
export type PanelBotsLazyQueryHookResult = ReturnType<typeof usePanelBotsLazyQuery>;
export type PanelBotsSuspenseQueryHookResult = ReturnType<typeof usePanelBotsSuspenseQuery>;
export type PanelBotsQueryResult = Apollo.QueryResult<PanelBotsQuery, PanelBotsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($input: GetUserInput!) {
  getUser(input: $input) {
    avatar
    bio
    id
    username
    banner
    bots {
      ...BotCard
    }
  }
}
    ${BotCardFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetTagsDocument = gql`
    query GetTags {
  tags {
    nodes {
      bots {
        totalCount
      }
      displayName
      id
    }
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export function useGetTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsSuspenseQueryHookResult = ReturnType<typeof useGetTagsSuspenseQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export const SessionDocument = gql`
    query Session {
  me {
    id
    username
    permissions
    avatar
  }
}
    `;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionQuery(baseOptions?: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
      }
export function useSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export function useSessionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionSuspenseQueryHookResult = ReturnType<typeof useSessionSuspenseQuery>;
export type SessionQueryResult = Apollo.QueryResult<SessionQuery, SessionQueryVariables>;
export const GetVanityDocument = gql`
    query GetVanity($input: GetVanityInput!) {
  getVanity(input: $input) {
    id
    targetId
    type
    userId
  }
}
    `;

/**
 * __useGetVanityQuery__
 *
 * To run a query within a React component, call `useGetVanityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVanityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVanityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVanityQuery(baseOptions: Apollo.QueryHookOptions<GetVanityQuery, GetVanityQueryVariables> & ({ variables: GetVanityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVanityQuery, GetVanityQueryVariables>(GetVanityDocument, options);
      }
export function useGetVanityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVanityQuery, GetVanityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVanityQuery, GetVanityQueryVariables>(GetVanityDocument, options);
        }
export function useGetVanitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVanityQuery, GetVanityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVanityQuery, GetVanityQueryVariables>(GetVanityDocument, options);
        }
export type GetVanityQueryHookResult = ReturnType<typeof useGetVanityQuery>;
export type GetVanityLazyQueryHookResult = ReturnType<typeof useGetVanityLazyQuery>;
export type GetVanitySuspenseQueryHookResult = ReturnType<typeof useGetVanitySuspenseQuery>;
export type GetVanityQueryResult = Apollo.QueryResult<GetVanityQuery, GetVanityQueryVariables>;
export const GetPanelStatsDocument = gql`
    query GetPanelStats {
  bots {
    totalCount
  }
  tags {
    totalCount
  }
}
    `;

/**
 * __useGetPanelStatsQuery__
 *
 * To run a query within a React component, call `useGetPanelStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPanelStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPanelStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPanelStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetPanelStatsQuery, GetPanelStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPanelStatsQuery, GetPanelStatsQueryVariables>(GetPanelStatsDocument, options);
      }
export function useGetPanelStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPanelStatsQuery, GetPanelStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPanelStatsQuery, GetPanelStatsQueryVariables>(GetPanelStatsDocument, options);
        }
export function useGetPanelStatsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPanelStatsQuery, GetPanelStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPanelStatsQuery, GetPanelStatsQueryVariables>(GetPanelStatsDocument, options);
        }
export type GetPanelStatsQueryHookResult = ReturnType<typeof useGetPanelStatsQuery>;
export type GetPanelStatsLazyQueryHookResult = ReturnType<typeof useGetPanelStatsLazyQuery>;
export type GetPanelStatsSuspenseQueryHookResult = ReturnType<typeof useGetPanelStatsSuspenseQuery>;
export type GetPanelStatsQueryResult = Apollo.QueryResult<GetPanelStatsQuery, GetPanelStatsQueryVariables>;