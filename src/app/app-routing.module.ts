import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';

import { NewsComponent } from './pages/news/news.component';

import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

// Aula 08) Importa a página 'view'
import { ViewComponent } from './pages/view/view.component';

// Aula 09) Importa a página 'login'
import { LoginComponent } from './pages/login/login.component';

// Aula 10) Importa o router guards do firebase
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';

// Aula 10) Redirecionamento das rotas para usuários não logados
const toLogin = () => redirectUnauthorizedTo(['/login']);

// Aula 10) Redirecionamento das rotas para usuários já logados
const isLogged = () => redirectLoggedInTo(['/']);

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
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Notícias', authGuardPipe: toLogin }
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

  // Aula 08) Rota para exibir um artigo único
  {
    path: 'view/:id',
    component: ViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Artigo', authGuardPipe: toLogin }
  },

  // Aula 09) Página de login
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Faça login', authGuardPipe: isLogged }
  },

  // Aula 10) Rota para perfil, protegida
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { title: 'Seu perfil', authGuardPipe: toLogin }
  },

  // Aula 10) Rota para logout
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout / Sair' }
  },

  // Rotas inexistentes - Deve ser sempre a última
  {
    path: '**',
    component: E404Component,
    data: { title: 'Erro 404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
