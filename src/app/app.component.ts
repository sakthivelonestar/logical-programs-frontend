import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, Event } from '@angular/router'; 
import { JavaScriptModule } from './java-script/java-script.module';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JavaScriptModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  activeRoute: string = '';
  private routerSubscription: Subscription = new Subscription();

  constructor(private router: Router) {
    this.navigateTo("javascript");
  }

  ngOnInit() {
    // Listen to route changes with proper type guard
    this.routerSubscription = this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.activeRoute = event.url;
    });
    
    // Set initial active route
    this.activeRoute = this.router.url;
  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    this.routerSubscription.unsubscribe();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  isActive(route: string): boolean {
    return this.activeRoute.startsWith(route);
  }
}