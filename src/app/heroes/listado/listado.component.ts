import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  public heroes:string[] = ['Ironman', 'Thor', 'Hulk', 'Spiderman'];
  public heroeBorrado:string = '';

  borrarHeroe(){
    
    let hBorrado = this.heroes.pop();
    this.heroeBorrado = hBorrado || '';
    
    
  }

}
