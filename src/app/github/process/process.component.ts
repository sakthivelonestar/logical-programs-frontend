import { Component, OnInit } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements OnInit {

  ngOnInit(): void {
  }


    // Method 2: Alternative smooth scroll method
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  // Public method to scroll to section (can be called from template)
 scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start' 
  });
}
}