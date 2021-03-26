/*
 * Copyright (C) 2020 DS Co., dba dsco - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Author } from '@models/author';
import { Action } from '@ngrx/store';
import { AuthorSearchFailure, AuthorSearchRequest } from '@requests/author-search.request';
import { UnexpectedError } from '@utils/response';

export class AuthorSearchAction implements Action {
  static readonly type = '[Authors] Search';
  readonly type = AuthorSearchAction.type;

  constructor(public request: AuthorSearchRequest) {
  }
}

export class AuthorSearchSuccessAction implements Action {
  static readonly type = '[Authors] Search Success';
  readonly type = AuthorSearchSuccessAction.type;

  constructor(public authors: Author[]) {
  }
}

export class AuthorSearchFailAction implements Action {
  static readonly type = '[Authors] Search Fail';
  readonly type = AuthorSearchFailAction.type;

  constructor(public error: UnexpectedError | AuthorSearchFailure) {
  }
}

/**
 * These are the three actions that can happen on the authors page:
 * • The user can search for a author
 * • That author search can succeed
 * • That author search can fail
 */
export type AuthorsActions = AuthorSearchAction | AuthorSearchSuccessAction | AuthorSearchFailAction;
