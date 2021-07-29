import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyDeMvM7BVia6Ah8fj3MTjqbtnYM_fkoPf8',
  authDomain: 'mipavi-ae497.firebaseapp.com',
  databaseURL: 'https://mipavi-ae497.firebaseio.com',
  projectId: 'mipavi-ae497',
  storageBucket: 'mipavi-ae497.appspot.com',
  messagingSenderId: '876186897951',
  appId: '1:876186897951:web:193e5f931b5498c0540f2a',
  measurementId: 'G-YC98967Z65',
};

@NgModule({
  declarations: [AppComponent, InicioComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
