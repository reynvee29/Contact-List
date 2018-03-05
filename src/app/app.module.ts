import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyAIkZFhAjgp7YE9qiFyLBbFmLq6k2gbOtc",
    authDomain: "contact-list-9993a.firebaseapp.com",
    databaseURL: "https://contact-list-9993a.firebaseio.com",
    projectId: "contact-list-9993a",
    storageBucket: "contact-list-9993a.appspot.com",
    messagingSenderId: "264868902580"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
