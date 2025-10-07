import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  constructor(private router: Router) {
    this.navigateTo("javascript");
  }


  navigateTo(path: string) {
    this.router.navigate([path]);
  }


}