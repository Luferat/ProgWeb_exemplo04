import { Component, OnInit } from '@angular/core';

//
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  item: Observable<any>;

  constructor(

    //
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {

    //
    this.route.params.subscribe((data) => {
      if (data.id) {

        //
        this.item = this.afs.doc<any>(`articles/${data.id}`).valueChanges();
      }
    });
  }
}
