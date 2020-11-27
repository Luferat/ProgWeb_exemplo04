import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileURL: any;

  constructor(

    public auth: AngularFireAuth,
  ) { }

  ngOnInit(): void { }

  editProfile(provider: string): boolean {

    switch (provider) {
      case 'google.com':
        this.profileURL = 'https://myaccount.google.com/profile';
        break;
      case 'facebook.com':
        this.profileURL = 'https://www.facebook.com/profile';
        break;
      default:
        return false;
    }

    window.open(this.profileURL);
  }
}
