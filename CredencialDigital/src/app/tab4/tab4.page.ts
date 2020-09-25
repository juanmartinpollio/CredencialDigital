import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public items: any = [];
  constructor() { 
    this.items = [
    { 
      titulo : "Titulo Noticia 1",
      ResumenNoticia: "Breve resumen de la noticia 1",
      LinkNoticia:"http://www.google.com/search?q=spygpa",
      expanded: false 
      },
      { 
        titulo : "Titulo Noticia 2",
        ResumenNoticia: "Breve resumen de la noticia 2",
        LinkNoticia:"http://www.spygpa.com.ar/web/contacto/contacto.html",
      expanded: false 
      },
      { 
        titulo : "Titulo Noticia 3",
        ResumenNoticia: "Breve resumen de la noticia 3",
        LinkNoticia:"http://www.spygpa.com.ar/web/",
        expanded: false 
      }
  ];}
  
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ngOnInit() {
  }

}
