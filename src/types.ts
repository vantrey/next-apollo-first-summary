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
  Upload: any;
};

export enum BranchOperatorRoles {
  Custom = 'Custom',
  Female = 'Female',
  Male = 'Male',
  PreferNotToSay = 'PreferNotToSay'
}

/** instagram comment like */
export type CommentLike = {
  __typename?: 'CommentLike';
  commentLikeAuthorData?: Maybe<InstagramUserProfile>;
  created_at: Scalars['Float'];
  profileId: Scalars['String'];
};

export type CreateInstagramCommentData = {
  parentCommentId?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type CreateInstagramPostData = {
  city: Scalars['String'];
  country: Scalars['String'];
  description: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  taggedUsers: Array<CreatePostTaggedUser>;
};

export type CreateInstagramUserData = {
  email: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePostTaggedUser = {
  photoPosition: Scalars['Float'];
  profileId: Scalars['String'];
};

/** instagram user photo */
export type Image = {
  __typename?: 'Image';
  height: Scalars['Float'];
  photoId: Scalars['String'];
  src: Scalars['String'];
  width: Scalars['Float'];
};

/** instagram comments statistic */
export type InstagramCommentsStatistic = {
  __typename?: 'InstagramCommentsStatistic';
  month?: Maybe<InstagramStatisticResult>;
  profileId: Scalars['String'];
  week?: Maybe<InstagramStatisticResult>;
};

/** instagram error response */
export type InstagramErrorResponse = {
  __typename?: 'InstagramErrorResponse';
  error: ResultError;
};

/** instagram follower */
export type InstagramFollower = {
  __typename?: 'InstagramFollower';
  created_at: Scalars['Float'];
  followerId: Scalars['String'];
  profileId: Scalars['String'];
};

/** instagram likes statistic */
export type InstagramLikesStatistic = {
  __typename?: 'InstagramLikesStatistic';
  month?: Maybe<InstagramStatisticResult>;
  profileId: Scalars['String'];
  week?: Maybe<InstagramStatisticResult>;
};

/** instagram post comment */
export type InstagramPostComment = {
  __typename?: 'InstagramPostComment';
  _id: Scalars['String'];
  child_comment_count: Scalars['Float'];
  commentAuthorData?: Maybe<InstagramUserProfile>;
  created_at: Scalars['Float'];
  likes: Array<CommentLike>;
  parentCommentId?: Maybe<Scalars['String']>;
  parentComments?: Maybe<InstagramPostComment>;
  postData?: Maybe<InstagramUserPost>;
  postId: Scalars['String'];
  profileId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  userName?: Maybe<Scalars['String']>;
};

/** instagram statistic result */
export type InstagramStatisticResult = {
  __typename?: 'InstagramStatisticResult';
  data: Array<Array<Scalars['Float']>>;
  name: Scalars['String'];
};

/** instagram success result */
export type InstagramSuccessResponse = {
  __typename?: 'InstagramSuccessResponse';
  isSuccess: Scalars['Boolean'];
};

/** instagram user posts */
export type InstagramUserPost = {
  __typename?: 'InstagramUserPost';
  _id: Scalars['String'];
  created_at: Scalars['Float'];
  description: Scalars['String'];
  geo?: Maybe<PostGeo>;
  likes: Array<PostLike>;
  photos?: Maybe<Array<PostPhoto>>;
  postAuthorData?: Maybe<InstagramUserProfile>;
  postComments?: Maybe<Array<InstagramPostComment>>;
  profileId: Scalars['String'];
};

/** instagram user profile */
export type InstagramUserProfile = {
  __typename?: 'InstagramUserProfile';
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['Float'];
  email: Scalars['String'];
  followersCount?: Maybe<Scalars['Float']>;
  followingCount?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Image>>;
  posts: Array<InstagramUserPost>;
  postsCount?: Maybe<Scalars['Float']>;
  userId: Scalars['String'];
  username: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addLikeToInstagramPost: InstagramUserPost;
  createInstagramBookmark: InstagramSuccessResponse;
  createInstagramComment: InstagramPostComment;
  createInstagramPost: InstagramUserPost;
  createInstagramUser: InstagramUserProfile;
  deleteInstagramBookmark: InstagramSuccessResponse;
  deleteInstagramComment: InstagramSuccessResponse;
  deleteInstagramPost: ResultUnion;
  followInstagramUser: InstagramFollower;
  likeInstagramComment: InstagramPostComment;
  removeLikeFromInstagramComment: InstagramSuccessResponse;
  removeLikeFromInstagramPost: InstagramUserPost;
  unfollowInstagramUser: InstagramSuccessResponse;
  updateInstagramPost: InstagramUserPost;
  updateInstagramUser: InstagramUserProfile;
  uploadFile: Scalars['Boolean'];
};


export type MutationAddLikeToInstagramPostArgs = {
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationCreateInstagramBookmarkArgs = {
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationCreateInstagramCommentArgs = {
  data: CreateInstagramCommentData;
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationCreateInstagramPostArgs = {
  data: CreateInstagramPostData;
  profileId: Scalars['String'];
};


export type MutationCreateInstagramUserArgs = {
  data: CreateInstagramUserData;
};


export type MutationDeleteInstagramBookmarkArgs = {
  bookmarkId: Scalars['String'];
};


export type MutationDeleteInstagramCommentArgs = {
  commentId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationDeleteInstagramPostArgs = {
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationFollowInstagramUserArgs = {
  followerId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLikeInstagramCommentArgs = {
  commentId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationRemoveLikeFromInstagramCommentArgs = {
  commentId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationRemoveLikeFromInstagramPostArgs = {
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationUnfollowInstagramUserArgs = {
  followerId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationUpdateInstagramPostArgs = {
  data: UpdateInstagramPostData;
  postId: Scalars['String'];
  profileId: Scalars['String'];
};


export type MutationUpdateInstagramUserArgs = {
  data: UpdateInstagramUserData;
  profileId: Scalars['String'];
};


export type MutationUploadFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type PaginationData = {
  limit: Scalars['String'];
  page: Scalars['String'];
};

/** user post geo */
export type PostGeo = {
  __typename?: 'PostGeo';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  title: Scalars['String'];
};

/** user post like */
export type PostLike = {
  __typename?: 'PostLike';
  created_at: Scalars['Float'];
  postLikeAuthorData?: Maybe<InstagramUserProfile>;
  profileId: Scalars['String'];
};

/** instagram user photo */
export type PostPhoto = {
  __typename?: 'PostPhoto';
  image: Image;
  taggedUsers: Array<PostTaggedUser>;
};

/** post tagged user */
export type PostTaggedUser = {
  __typename?: 'PostTaggedUser';
  profileId: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  instagramBookmarks: Array<InstagramUserPost>;
  instagramCommentsStatistic: InstagramCommentsStatistic;
  instagramLikesStatistic: InstagramLikesStatistic;
  instagramPostComments: Array<InstagramPostComment>;
  instagramPosts: Array<InstagramUserPost>;
  instagramResentPosts: Array<InstagramUserPost>;
  instagramUser?: Maybe<InstagramUserProfile>;
  instagramUsers: Array<InstagramUserProfile>;
};


export type QueryInstagramBookmarksArgs = {
  pagination: PaginationData;
  profileId: Scalars['String'];
};


export type QueryInstagramCommentsStatisticArgs = {
  profileId: Scalars['String'];
};


export type QueryInstagramLikesStatisticArgs = {
  profileId: Scalars['String'];
};


export type QueryInstagramPostCommentsArgs = {
  postId: Scalars['String'];
};


export type QueryInstagramPostsArgs = {
  profileId: Scalars['String'];
};


export type QueryInstagramResentPostsArgs = {
  profileId?: InputMaybe<Scalars['String']>;
};


export type QueryInstagramUserArgs = {
  userId: Scalars['String'];
};


export type QueryInstagramUsersArgs = {
  pagination: PaginationData;
};

export type ResultError = {
  __typename?: 'ResultError';
  messages: Array<ResultErrorMessage>;
  resultCode: Scalars['Float'];
};

export type ResultErrorMessage = {
  __typename?: 'ResultErrorMessage';
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type ResultUnion = InstagramErrorResponse | InstagramSuccessResponse;

export type UpdateInstagramPostData = {
  description: Scalars['String'];
};

export type UpdateInstagramUserData = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<BranchOperatorRoles>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};
