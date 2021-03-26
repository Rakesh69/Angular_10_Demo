/*
 * Copyright (C) 2020 DS Co., dba dsco - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorsState } from './authors.reducer';

/**
 * This file extracts data from the Authors state, so the UI can respond to changes to that data.
 */

const authorsState = createFeatureSelector<AuthorsState>('authors');

export const selectAuthorsMap = createSelector(authorsState, state => state.authors);
export const selectAllAuthors = createSelector(selectAuthorsMap, map => Object.values(map));

export const selectAuthorsSearchStr = createSelector(authorsState, state => state.searchString);
export const selectAuthorsSearching = createSelector(authorsState, state => state.searching);
