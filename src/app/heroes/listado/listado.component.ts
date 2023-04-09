import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes      : string[] = ["Spiderman","Hulk","Thor","Capitana Carter", "BlackWidow"]
  heroeBorrado: string = "";

  borrarHeroe(): void {
    console.log( "Borrando..." ); 
    const borrado = this.heroes.pop()

    this.heroeBorrado = borrado || "";
  }
}
