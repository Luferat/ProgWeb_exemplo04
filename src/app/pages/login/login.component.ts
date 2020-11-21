import { Component, OnInit } from '@angular/core';

// 09) Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

    // 09) Injeta dependências
    public auth: AngularFireAuth,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  login(provider: string) {

    switch(provider) {
      case 'google':
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
          () => {
            this.router.navigate(['/']);
          }
        );
        break;
      case 'facebook':
        this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
          () => {
            this.router.navigate(['/']);
          }
        );;
        break;
    }
  }
}
