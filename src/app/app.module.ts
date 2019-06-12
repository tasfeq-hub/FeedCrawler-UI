import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { FeedOneComponent } from './feed-one/feed-one.component';
import { FeedTwoComponent } from './feed-two/feed-two.component';
import { FeedThreeComponent } from './feed-three/feed-three.component';
import { FeedFourComponent } from './feed-four/feed-four.component';
import { FeedFiveComponent } from './feed-five/feed-five.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedOneComponent,
    FeedTwoComponent,
    FeedThreeComponent,
    FeedFourComponent,
    FeedFiveComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
