// Importar dependencias
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// Importa filter e map
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Implementar 'OnInit' na classe principal
export class AppComponent implements OnInit {

  // Contrutor do objeto
  public constructor(

    // Injeta dependências

    // Cria objeto tipo 'Title'
    private titleService: Title,

    // Cria objeto do tipo 'Router'
    public router: Router,

    // Cria objeto 'ActivatedRoute'
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // Obtém o conteúdo da tag <title></title>
    const appTitle = this.titleService.getTitle();

    // Obtém o título da rota
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;

        // Se exite título na rota
        if (child.snapshot.data['title']) {

          // Retorna o titulo do site ~ título do site
          return appTitle + ' ~ ' + child.snapshot.data['title'];
        }

        // Se não tem títlo, retorna o título do site
        return appTitle;
      })
    ).subscribe((ttl: string) => {

      // Atribui título à tag <title></title>
      this.titleService.setTitle(ttl);
    });
  }
}
