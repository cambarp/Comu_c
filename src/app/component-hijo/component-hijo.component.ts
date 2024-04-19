import { CommonModule } from '@angular/common';
import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-hijo.component.html',
  styleUrl: './component-hijo.component.css'
})
export class ComponentHijoComponent {
  @Input() datosPadre: any ={};
  @Output() D_padre = new EventEmitter<any>() ;

  enviarDatos_Padre() {
    this.D_padre.emit(this.datosPadre);
  }


  
}
