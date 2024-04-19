import { CommonModule } from '@angular/common';
import { Component , OnInit  } from '@angular/core';
import {   ReactiveFormsModule , FormControl , FormGroup } from '@angular/forms';
import { ComponentHijoComponent } from '../component-hijo/component-hijo.component';

@Component({
  selector: 'app-component-padre',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, ComponentHijoComponent],
  templateUrl: './component-padre.component.html',
  styleUrl: './component-padre.component.css'
})
export class ComponentPadreComponent {
  formulario = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    contrasena: new FormControl(''),
  });

  datosIngresados: any;

  guardarDatos() {
    this.datosIngresados = this.formulario.value;
    this.formulario.reset();
  }

  DatosHijo(datos: any) {
    this.formulario.patchValue({
      nombre: datos.nombre,
      correo: datos.correo,
      contrasena: datos.contrasena
    });
  }
  
}
 
  

