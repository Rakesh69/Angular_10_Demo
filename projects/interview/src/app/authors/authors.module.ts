/*
 * Copyright (C) 2020 DS Co., dba dsco - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AuthorsComponent } from './authors.component';
import { AuthorsEffects } from './store/authors.effects';
import { authorsReducer } from './store/authors.reducer';

const routes: Routes = [
  {path: '', component: AuthorsComponent, data: {title: 'Authors'}}
];

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    SharedModule,
    EffectsModule.forFeature([AuthorsEffects]),
    StoreModule.forFeature('authors', authorsReducer),
    RouterModule.forChild(routes)
  ]
})
export class AuthorsModule {
}
