import { Component, OnInit } from '@angular/core';

// News 1) Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // News 3) Cria atributos
  apiKey = '49d8fbd866b1481ab68445ce872a17b4'; // API Key do serviço, obtida em 'https://newsapi.org/account'
  apiQuery = 'aranhas'; // Assunto 'base' da busca
  apiItems = 10; // Total de notícias retornadas. O máximo é 20.

  // URL da API. Não altere!
  apiURL = `http://newsapi.org/v2/everything?apiKey=${this.apiKey}&language=pt&source=google-news&q=${this.apiQuery}}`;
  newsList: any; // View das notícias obtidas

  constructor(

    // News 2) Injeta dependências
    private http: HttpClient // Cria objeto tipo 'HttpClient'
  ) { }

  // News 3) OnInit deve ser do tipo 'any'
  ngOnInit(): any {

    // News 4) Obtém dados da API REST (JSON)
    this.http.get(this.apiURL).subscribe(
      (data: any) => {

        // News 5) Atribui à view de notícias, obtendo somente a quantidade solicitada
        this.newsList = data.articles.slice(0, this.apiItems);
      });
  }
}
