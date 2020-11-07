import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';

import { NewsComponent } from './pages/news/news.component';

import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [

  // Rota da página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Rota para a 'home'
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '' }
  },

  // Rota para a 'news'
  {
    path: 'news',
    component: NewsComponent,
    data: { title: 'Notícias' }
  },

  // Rota para 'contacts'
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Faça contato' }
  },

  // Rota para 'about'
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Sobre' }
  },

  // Rotas inexistentes
  {
    path: '**',
    component: E404Component,
    data: { title: 'Erro 404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
