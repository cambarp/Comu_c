import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentPadreComponent } from './component-padre/component-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ComponentPadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'c_component';
}
