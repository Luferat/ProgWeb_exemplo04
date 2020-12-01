// Permite alterar o título da página
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

// Aula 08) Importar dependências
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ViewComponent } from './pages/view/view.component';
import { LoginComponent } from './pages/login/login.component';

import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

// News 1) Importar dependências
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactsComponent,
    AboutComponent,
    E404Component,
    ViewComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    // Aula 08) Inicializa o Firebase
    AngularFireModule.initializeApp(environment.firebase),

    RouterModule,

    // News 2) Inicializa o módulo HTTP
    HttpClientModule
  ],
  providers: [

    // Permite alterar o título da página
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
