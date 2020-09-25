import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public items: any = [];

  constructor() {
    this.items = [
      { 
        lugar : "Santa Teresita",
        categorias : [{nombre : 'Menor hasta 3 años incl.'},
        {nombre : 'Menor de 4 a 9 años incl.'},
        {nombre : 'Menor de 12 años incl.'},
        {nombre : 'Menores de 13 a 18 años incl.'},
        {nombre : 'Hab. simple'},
        {nombre : 'Hab. doble'},
        {nombre : 'Hab. triple'},
        {nombre : 'Hab. cuádruple'},
        {nombre : 'Jubilado Petrolero Single'},
        {nombre : 'Jubilado Petrolero Doble'},
        {nombre : 'Adherente Padre o suegro (single)'},
        {nombre : 'Adherente Padre o suegro (doble)'},
        {nombre : 'Alojam. 1/2 día menores'},
        {nombre : 'Alojam. 1/2 día mayores'}],
        expanded: false 
        },
        { 
        lugar : "Villa Carlos Paz / Mar del Plata",
        categorias : [{nombre : 'Menor hasta 3 años incl.'},
        {nombre : 'Menor de 4 a 9 años incl.'},
        {nombre : 'Menor de 12 años incl.'},
        {nombre : 'Menores de 13 a 18 años incl.'},
        {nombre : 'Hab. simple'},
        {nombre : 'Hab. doble'},
        {nombre : 'Hab. triple'},
        {nombre : 'Hab. cuádruple'},
        {nombre : 'Jubilado Petrolero Single'},
        {nombre : 'Jubilado Petrolero Doble'},
        {nombre : 'Adherente Padre o suegro (single)'},
        {nombre : 'Adherente Padre o suegro (doble)'},
        {nombre : 'Alojam. 1/2 día menores'},
        {nombre : 'Alojam. 1/2 día mayores'}],
        expanded: false 
        },
        { 
          lugar : "San Carlos de Bariloche",
          categorias : [{nombre : 'Menor hasta 3 años incl.'},
          {nombre : 'Menor de 4 a 9 años incl.'},
          {nombre : 'Menor de 12 años incl.'},
          {nombre : 'Menores de 13 a 18 años incl.'},
          {nombre : 'Hab. simple'},
          {nombre : 'Hab. doble'},
          {nombre : 'Hab. triple'},
          {nombre : 'Hab. cuádruple'},
          {nombre : 'Jubilado Petrolero Single'},
          {nombre : 'Jubilado Petrolero Doble'},
          {nombre : 'Adherente Padre o suegro (single)'},
          {nombre : 'Adherente Padre o suegro (doble)'},
          {nombre : 'Alojam. 1/2 día menores'},
          {nombre : 'Alojam. 1/2 día mayores'}],
          expanded: false 
        }
    ];
  }

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
}
