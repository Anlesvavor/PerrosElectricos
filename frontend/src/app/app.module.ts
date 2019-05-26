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
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: 'feed', component: FeedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    DogCardComponent,
    DogFormComponent,
    OpinionsComponent,
    OpinionsFormComponent,
    OpinionsCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DogsService, UsersService, OpinionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
