import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './function.component.html',
  styleUrl: './function.component.scss'
})
export class FunctionComponent {
  functionDeclarations: any[] = [];
  functionExpressions: any[] = [];
  arrowFunctions: any = {};
  closures: any = {};
  callbacks: any = {};
  problemList: any[] = [];

  ngOnInit(): void {
    this.functionDeclarations = [
      {
        title: 'Basic Function Declaration',
        code: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World"));`,
        output: 'Hello, World!'
      },
      {
        title: 'Function with Default Parameters',
        code: `function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet());
console.log(greet("Alice"));`,
        output: 'Hello, Guest!\nHello, Alice!'
      },
      {
        title: 'Function with Rest Parameters',
        code: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));`,
        output: '15'
      },
      {
        title: 'Function with Parameter Destructuring',
        code: `function displayUser({ name, age }) {
  return name + " is " + age + " years old";
}
const user = { name: "John", age: 30, job: "Developer" };
console.log(displayUser(user));`,
        output: 'John is 30 years old'
      }
    ];

    this.functionExpressions = [
      {
        title: 'Basic Function Expression',
        code: `const greet = function(name) {
  return "Hello, " + name + "!";
};
console.log(greet("World"));`,
        output: 'Hello, World!'
      },
      {
        title: 'Immediately Invoked Function Expression (IIFE)',
        code: `(function() {
  const message = "I run immediately!";
  console.log(message);
})();`,
        output: 'I run immediately!'
      },
      {
        title: 'Method Shorthand in Objects',
        code: `const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));`,
        output: '8\n6'
      },
      {
        title: 'Function as Object Property',
        code: `const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());`,
        output: 'John Doe'
      }
    ];

    this.arrowFunctions = {
      title: 'Arrow Functions',
      examples: [
        {
          title: 'Basic Arrow Function',
          code: `const greet = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet("World"));`,
          output: 'Hello, World!'
        },
        {
          title: 'Implicit Return',
          code: `const add = (a, b) => a + b;
console.log(add(5, 3));`,
          output: '8'
        },
        {
          title: 'With Array Methods',
          code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);`,
          output: '[2, 4, 6, 8, 10]'
        },
        {
          title: 'Lexical "this"',
          code: `const counter = {
  count: 0,
  increment: function() {
    // Using arrow function to preserve 'this'
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 100);
  }
};
// In practice, this would log 1 after 100ms
counter.increment();`,
          output: '1 (after delay)'
        }
      ]
    };

    this.closures = {
      title: 'Closures',
      examples: [
        {
          title: 'Basic Closure',
          code: `function createGreeter(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}
const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
console.log(sayHello("John"));
console.log(sayHi("Alice"));`,
          output: 'Hello, John!\nHi, Alice!'
        },
        {
          title: 'Private Counter',
          code: `function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());`,
          output: '1\n2\n1\n1'
        }
      ]
    };

    this.callbacks = {
      title: 'Callback Functions',
      examples: [
        {
          title: 'Simple Callback',
          code: `function fetchData(callback) {
  // Simulate API call
  setTimeout(() => {
    const data = { id: 1, name: "Product" };
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data.name);
});`,
          output: 'Product (after 1 second)'
        },
        {
          title: 'Error-First Callback',
          code: `function readFile(path, callback) {
  // Simulate file reading
  if (path === "validFile.txt") {
    setTimeout(() => {
      callback(null, "File content");
    }, 500);
  } else {
    setTimeout(() => {
      callback(new Error("File not found"), null);
    }, 500);
  }
}

readFile("validFile.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});`,
          output: 'File content (after 500ms)'
        }
      ]
    };

    this.problemList = [
      {
        title: 'Function Basics',
        items: [
          {
            title: '1. Function Calculator',
            problem: 'Create a calculator with basic operations using functions.',
            input: 'add(5, 3), subtract(10, 4), multiply(2, 6), divide(8, 2)',
            output: '8, 6, 12, 4',
            solution: `function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }`
          },
          {
            title: '2. Function Composition',
            problem: 'Compose two functions to create a new function.',
            input: 'compose(double, square)(3)',
            output: '36',
            solution: `function double(x) { return x * 2; }
function square(x) { return x * x; }
function compose(f, g) { return x => f(g(x)); }`
          }
        ]
      },
      {
        title: 'Higher-Order Functions',
        items: [
          {
            title: '3. Implement Map',
            problem: 'Create your own map function that works like Array.map().',
            input: 'myMap([1, 2, 3], x => x * 2)',
            output: '[2, 4, 6]',
            solution: `function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}`
          },
          {
            title: '4. Implement Filter',
            problem: 'Create your own filter function that works like Array.filter().',
            input: 'myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)',
            output: '[2, 4]',
            solution: `function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}`
          },
          {
            title: '5. Implement Reduce',
            problem: 'Create your own reduce function that works like Array.reduce().',
            input: 'myReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)',
            output: '10',
            solution: `function myReduce(arr, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}`
          }
        ]
      },
      {
        title: 'Function Patterns',
        items: [
          {
            title: '6. Memoization',
            problem: 'Implement memoization for a fibonacci function.',
            input: 'fib(10)',
            output: '55',
            solution: `function memoizedFib() {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    return cache[n] = fib(n - 1) + fib(n - 2);
  };
}
const fib = memoizedFib();`
          },
          {
            title: '7. Function Currying',
            problem: 'Create a curried add function that can be called with one argument at a time.',
            input: 'add(1)(2)(3)()',
            output: '6',
            solution: `function add(a) {
  return function(b) {
    if (b === undefined) return a;
    return add(a + b);
  };
}`
          },
          {
            title: '8. Throttle Function',
            problem: 'Implement a throttle function that limits how often a function can be called.',
            input: 'throttle(fn, 1000)',
            output: 'Function that executes at most once per 1000ms',
            solution: `function throttle(fn, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      return fn.apply(this, args);
    }
  };
}`
          },
          {
            title: '9. Debounce Function',
            problem: 'Implement a debounce function that delays execution until after a pause.',
            input: 'debounce(fn, 500)',
            output: 'Function that executes only after 500ms of inactivity',
            solution: `function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}`
          }
        ]
      },
      {
        title: 'Async Functions',
        items: [
          {
            title: '10. Promise Wrapper',
            problem: 'Convert a callback-based function to return a Promise.',
            input: 'readFilePromise("file.txt")',
            output: 'Promise that resolves with file content',
            solution: `function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}`
          },
          {
            title: '11. Sequential Promise Execution',
            problem: 'Execute promises in sequence rather than in parallel.',
            input: 'runSequentially([fn1, fn2, fn3])',
            output: 'Results after sequential execution',
            solution: `function runSequentially(promiseFns) {
  return promiseFns.reduce(
    (promise, fn) => promise.then(result => 
      fn().then(Array.isArray(result) 
        ? val => [...result, val]
        : val => [val])
    ),
    Promise.resolve([])
  );
}`
          },
          {
            title: '12. Implement Promise.all',
            problem: 'Create your own version of Promise.all.',
            input: 'myPromiseAll([p1, p2, p3])',
            output: 'Promise that resolves with array of results',
            solution: `function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}`
          }
        ]
      },
      {
        title: 'Function Design Patterns',
        items: [
          {
            title: '13. Module Pattern',
            problem: 'Create a counter module with private state.',
            input: 'const counter = createCounter(); counter.increment(); counter.getValue();',
            output: '1',
            solution: `function createCounter() {
  // Private variable
  let count = 0;
  
  // Return public API
  return {
    increment() {
      count++;
      return this;
    },
    decrement() {
      count--;
      return this;
    },
    getValue() {
      return count;
    }
  };
}`
          },
          {
            title: '14. Factory Function',
            problem: 'Create a factory function for creating user objects.',
            input: 'createUser("John", "john@example.com")',
            output: '{ name: "John", email: "john@example.com", ... }',
            solution: `function createUser(name, email) {
  return {
    name,
    email,
    createdAt: new Date(),
    sendMessage(message) {
      console.log(\`Sending "\${message}" to \${email}\`);
    }
  };
}`
          },
          {
            title: '15. Observer Pattern',
            problem: 'Implement a simple event system with subscribe/publish.',
            input: 'const events = createEventSystem(); events.subscribe("userLogin", callback);',
            output: 'System that calls subscribers when events are published',
            solution: `function createEventSystem() {
  const subscribers = {};
  
  return {
    subscribe(event, callback) {
      if (!subscribers[event]) {
        subscribers[event] = [];
      }
      subscribers[event].push(callback);
      return () => this.unsubscribe(event, callback);
    },
    unsubscribe(event, callback) {
      if (!subscribers[event]) return;
      subscribers[event] = subscribers[event]
        .filter(cb => cb !== callback);
    },
    publish(event, data) {
      if (!subscribers[event]) return;
      subscribers[event].forEach(callback => {
        callback(data);
      });
    }
  };
}`
          }
        ]
      }
    ];
  }
}