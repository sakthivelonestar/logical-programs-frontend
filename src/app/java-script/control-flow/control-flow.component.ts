import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule,MaximizeDirective],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  loops: any[] = [];
  ifElse: any;
  switchCase: any;
  tryCatch: any;

  ngOnInit(): void {
    this.loops = [
      {
        title: 'For Loop',
        code: `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,
        output: '0 1 2'
      },
      {
        title: 'For...of Loop',
        code: `const arr = ['a', 'b', 'c'];
for (let item of arr) {
  console.log(item);
}`,
        output: 'a b c'
      },
      {
        title: 'For...in Loop',
        code: `const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key);
}`,
        output: 'a b'
      },
      {
        title: 'forEach Loop',
        code: `['x', 'y', 'z'].forEach(item => {
  console.log(item);
});`,
        output: 'x y z'
      }
    ];

    this.ifElse = {
      code: `let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}`,
      output: 'Odd'
    };

    this.switchCase = {
      code: `let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "apple":
    console.log("Red fruit");
    break;
  default:
    console.log("Unknown fruit");
}`,
      output: 'Red fruit'
    };

    this.tryCatch = {
      code: `try {
  let result = someUndefinedFunction();
} catch (error) {
  console.log("An error occurred");
}`,
      output: 'An error occurred'
    };
  }


  }

  
  


