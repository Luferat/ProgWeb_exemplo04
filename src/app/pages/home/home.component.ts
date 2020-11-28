import { Component, OnInit } from '@angular/core';

// Aula 08) Importa dependências
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Aula 08) Estrutura do documento
export interface Art {
  date: string;
  title: string;
  intro: string;
  text: string;
  status: string;
  img: string;
  artId: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Aula 08) Atributos do objeto
  private itemsCollection: AngularFirestoreCollection<Art>;
  items: Observable<Art[]>;

  constructor(

    // Aula 08) Injeta dependências
    private afs: AngularFirestore,
  ) {

    // Aula 08) Conectando ao Firestore
    this.itemsCollection = afs.collection<Art>('articles', ref => ref.where('status', '==', 'ativo').orderBy('date', 'desc'));
    this.items = this.itemsCollection.valueChanges({ idField: 'artId' });
  }

  ngOnInit(): void { }

}
