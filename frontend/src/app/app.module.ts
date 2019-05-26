import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { OpinionsComponent } from './components/opinions/opinions.component';
import { OpinionsFormComponent } from './components/opinions-form/opinions-form.component';
import { OpinionsCardComponent } from './components/opinions-card/opinions-card.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
