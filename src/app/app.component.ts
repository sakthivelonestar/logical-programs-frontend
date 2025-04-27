import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 
import { JavaScriptModule } from './java-script/java-script.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JavaScriptModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {

  }

  OnInit(){
    console.log("padth of onlint dataa")
    this.navigateTo("javascript")

  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  isActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
