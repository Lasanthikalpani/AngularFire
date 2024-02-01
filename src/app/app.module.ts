import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angfire-f485d","appId":"1:186795948186:web:e09177c5f37bbc401f0723","databaseURL":"https://angfire-f485d-default-rtdb.firebaseio.com","storageBucket":"angfire-f485d.appspot.com","apiKey":"AIzaSyCtqi877ol72oT4j_N1s-rmpwprkVjxDxg","authDomain":"angfire-f485d.firebaseapp.com","messagingSenderId":"186795948186"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
