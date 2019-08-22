import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { BrowserComponent } from './browser/browser.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PlaceSearchComponent } from './place-search/place-search.component';

import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BrowserComponent,
    LocationDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlaceSearchComponent,
    LoginComponent,
    SignupComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLlXi1S9v2zQ61x9daPz08JvPQjNPUzWo'
    }),

    AppRoutingModule,

  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }