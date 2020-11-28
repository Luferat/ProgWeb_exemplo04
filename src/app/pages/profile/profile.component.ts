import { Component, OnInit } from '@angular/core';

// Aula 10) Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Atributos
  profileURL: string;

  constructor(

    // Aula 10) Injeta dependências
    public auth: AngularFireAuth,
  ) { }

  ngOnInit(): void { }

  editProfile(provider: string): any {

    switch (provider) {

      case 'google.com':
        this.profileURL = `https://google.com/account`;
        break;

      case 'facebook.com':
        this.profileURL = 'https://facebook.com/profile';
        break;

      default:
        return false;
    }
    window.open(this.profileURL);
  }

}
