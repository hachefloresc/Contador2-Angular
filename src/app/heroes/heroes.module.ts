import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [              // Es lo que contiene el Modulo, o sea
    HeroeComponent,             //  los componentes que creamos.
    ListadoComponent
    ],

    exports:     [               // las cosas visibles fuera de los Componentes
    ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})


export class HeroesModule {


}