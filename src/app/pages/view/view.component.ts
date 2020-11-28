import { Component, OnInit } from '@angular/core';

// 09) importa dependências
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // 09) Atributos do objeto
  item: Observable<any>; // Dados do artigo

  constructor(

    // 09) Injeta dependências
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {

    // 09) Obtém Id do artigo da rota (endereço da página)
    this.route.params.subscribe(
      (data) => {
        if (data.id) {

          // 09) Obtém o documento do banco de dados
          this.item = this.afs.doc<any>(`articles/${data.id}`).valueChanges();
        }
      }
    );
  }
}
