/*
 * Copyright (C) 2020 DS Co., dba dsco - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { Author } from '@models/author';
import { AuthorSearchStringQuery } from '@requests/author-search.request';
import { keyBy } from '@utils/object-utils';
import { AuthorsActions, AuthorSearchAction, AuthorSearchSuccessAction } from './authors.actions';

/**
 * This is the state that's required for the Authors page.
 */
export interface AuthorsState {
  // Holds the authors that have been returned by the search
  authors: { [authorId: string]: Author };

  // The current search string
  searchString: string;

  // true if the user is actively searching for a author
  searching: boolean;
}

const defaultState: AuthorsState = {
  authors: {},
  searching: false,
  searchString: ''
};

/**
 * This function is responsible for updating the current AuthorsState any time an action in AuthorsActions occurs.
 * @see AuthorsActions
 */
export function authorsReducer(state: AuthorsState | undefined, action: AuthorsActions): AuthorsState {
  if (!state) {
    return defaultState;
  }

  switch (action.type) {
    case AuthorSearchAction.type:
      // TODO: Is it safe to assume this will always be a string query?
      const body = action.request.body as AuthorSearchStringQuery;
      return {...state, searching: true, searchString: body.query};
    case AuthorSearchSuccessAction.type:
      return {
        ...state,
        searching: false,
        authors: keyBy(action.authors, 'authorId')
      };
    default:
      return state;
  }
}
