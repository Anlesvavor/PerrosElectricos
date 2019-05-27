import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { OpinionsFormComponent } from './components/opinions-form/opinions-form.component';
import { OpinionsCardComponent } from './components/opinions-card/opinions-card.component';
import {RouterModule, Routes} from '@angular/router';
import {DogsService} from './services/dogs.service';
import {UsersService} from './services/users.service';
import {OpinionsService} from './services/opinions.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  MatCardModule,
  MatTabsModule,
  MatCardTitle,
  MatToolbar,
  MatToolbarModule,
  MatMenuModule,
  MatFormField, MatDivider, MatDividerModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OpinionFormComponent } from './components/opinion-form/opinion-form.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'feed', component: FeedComponent},
  { path: 'dog-card', component: DogCardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    DogCardComponent,
    DogFormComponent,
    OpinionsComponent,
    OpinionsFormComponent,
    OpinionsCardComponent,
    OpinionFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [DogsService, UsersService, OpinionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
