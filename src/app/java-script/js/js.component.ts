import { Component } from '@angular/core';
import { ArrayMethodsComponent } from '../array-methods/array-methods.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [RouterModule,ArrayMethodsComponent],
  templateUrl: './js.component.html',
  styleUrl: './js.component.scss'
})
export class JsComponent {

}
