import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "restaurant-firebase-auth-beec1",
        appId: "1:129676973499:web:5a6a9adb78a38fb8f7209e",
        storageBucket: "restaurant-firebase-auth-beec1.appspot.com",
        apiKey: "AIzaSyBFyvwXpgqgzAzDBa2BiCd1pTzpn_DdkM0",
        authDomain: "restaurant-firebase-auth-beec1.firebaseapp.com",
        messagingSenderId: "129676973499",
        databaseURL: "https://restaurant-firebase-auth-beec1-default-rtdb.europe-west1.firebasedatabase.app",
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()), // Si estás usando Database
  ],
};
