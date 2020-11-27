import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  logout() {
    this.auth.signOut().then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

}
