import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './js.component.html',
  styleUrl: './js.component.scss'
})
export class JsComponent {


}
