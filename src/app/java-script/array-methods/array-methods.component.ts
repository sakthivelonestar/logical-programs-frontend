import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaximizeDirective } from '../../directives/maximize.directive';

@Component({
  selector: 'app-array-methods',
  standalone: true,
  imports: [CommonModule, MaximizeDirective],
  templateUrl: './array-methods.component.html',
  styleUrl: './array-methods.component.scss'
})
export class ArrayMethodsComponent implements OnInit {
  problemList: any[] = [];
  aggregationMethods: any[] = [];
  manipulationMethods: any[] = [];
  searchFilterMethods: any[] = [];
  transformationMethods: any[] = [];
  iterationMethods: any[] = [];
  sortingMethods: any[] = [];

  ngOnInit() {
    this.iterationMethods = [
      {
        title: 'forEach()',
        code: `const numbers = [1, 2, 3, 4, 5];
  
numbers.forEach(number => {
  console.log(number * 2);
});
  
// Logs:
// 2
// 4
// 6
// 8
// 10`,
        output: 'Executes a function for each array element with no return value'
      },
      {
        title: 'map()',
        code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
  
console.log(doubled);`,
        output: '[2, 4, 6, 8, 10]'
      },
      {
        title: 'for...of',
        code: `const fruits = ['apple', 'banana', 'orange'];
  
for (const fruit of fruits) {
  console.log(fruit);
}
  
// Logs:
// apple
// banana
// orange`,
        output: 'Modern way to iterate through array elements'
      },
      {
        title: 'entries()',
        code: `const fruits = ['apple', 'banana', 'orange'];
const iterator = fruits.entries();

for (const [index, value] of iterator) {
  console.log(\`\${index}: \${value}\`);
}

// Logs:
// 0: apple
// 1: banana
// 2: orange`,
        output: 'Returns an iterator with key/value pairs'
      }
    ];
  
    this.transformationMethods = [
      {
        title: 'map()',
        code: `const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];
  
const names = users.map(user => user.name);
console.log(names);`,
        output: "['John', 'Jane', 'Bob']"
      },
      {
        title: 'flatMap()',
        code: `const sentences = ['hello world', 'goodbye all'];
const words = sentences.flatMap(sentence => sentence.split(' '));
  
console.log(words);`,
        output: "['hello', 'world', 'goodbye', 'all']"
      },
      {
        title: 'flat()',
        code: `const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = nestedArray.flat(2);
  
console.log(flattened);`,
        output: '[1, 2, 3, 4, 5, 6]'
      },
      {
        title: 'from()',
        code: `// Create array from array-like object
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray);

// Create array with mapping function
const mapped = Array.from([1, 2, 3], x => x * 2);
console.log(mapped);`,
        output: "['a', 'b', 'c']\n[2, 4, 6]"
      }
    ];
  
    this.searchFilterMethods = [
      {
        title: 'filter()',
        code: `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
  
console.log(evenNumbers);`,
        output: '[2, 4, 6]'
      },
      {
        title: 'find()',
        code: `const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' }
];
  
const user = users.find(user => user.id === 2);
console.log(user);`,
        output: "{ id: 2, name: 'Jane' }"
      },
      {
        title: 'some() & every()',
        code: `const numbers = [1, 2, 3, 4, 5];
  
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even numbers:', hasEven);
  
const allPositive = numbers.every(num => num > 0);
console.log('All positive:', allPositive);`,
        output: 'Has even numbers: true \nAll positive: true'
      },
      {
        title: 'includes()',
        code: `const fruits = ['apple', 'banana', 'orange'];
  
console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));`,
        output: 'true \nfalse'
      },
      {
        title: 'findIndex()',
        code: `const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex(num => num > 25);
console.log(index);

const notFound = numbers.findIndex(num => num > 100);
console.log(notFound);`,
        output: '2 (index of 30)\n-1 (not found)'
      },
      {
        title: 'indexOf() & lastIndexOf()',
        code: `const colors = ['red', 'blue', 'green', 'blue', 'red'];

console.log('First blue at index:', colors.indexOf('blue'));
console.log('Last blue at index:', colors.lastIndexOf('blue'));
console.log('Yellow not found:', colors.indexOf('yellow'));`,
        output: 'First blue at index: 1\nLast blue at index: 3\nYellow not found: -1'
      }
    ];
  
    this.manipulationMethods = [
      {
        title: 'push(), pop(), shift(), unshift()',
        code: `const fruits = ['apple', 'banana'];
  
// Add to end
fruits.push('orange');
console.log(fruits);
  
// Remove from end
const last = fruits.pop();
console.log('Removed:', last);
console.log(fruits);
  
// Add to beginning
fruits.unshift('pear');
console.log(fruits);
  
// Remove from beginning
const first = fruits.shift();
console.log('Removed:', first);
console.log(fruits);`,
        output: "['apple', 'banana', 'orange'] \nRemoved: orange \n['apple', 'banana'] \n['pear', 'apple', 'banana'] \nRemoved: pear \n['apple', 'banana']"
      },
      {
        title: 'splice()',
        code: `const colors = ['red', 'green', 'blue', 'yellow'];
  
// Remove 2 elements starting at index 1, insert 'purple'
const removed = colors.splice(1, 2, 'purple');
  
console.log('Removed:', removed);
console.log('Array after splice:', colors);`,
        output: "Removed: ['green', 'blue'] \nArray after splice: ['red', 'purple', 'yellow']"
      },
      {
        title: 'slice()',
        code: `const numbers = [1, 2, 3, 4, 5];
  
// Get elements from index 1 to 3 (exclusive)
const subset = numbers.slice(1, 4);
  
console.log(subset);
console.log('Original array unchanged:', numbers);`,
        output: "[2, 3, 4] \nOriginal array unchanged: [1, 2, 3, 4, 5]"
      },
      {
        title: 'concat()',
        code: `const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8];

const combined = array1.concat(array2, array3);
console.log(combined);
console.log('Original arrays unchanged:', array1, array2);`,
        output: '[1, 2, 3, 4, 5, 6, 7, 8]\nOriginal arrays unchanged: [1, 2, 3] [4, 5, 6]'
      },
      {
        title: 'fill()',
        code: `// Create array and fill entirely
const filled = new Array(3).fill('X');
console.log(filled);

// Fill part of an array
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 2, 4); // Fill with 0 from index 2 to 4 (exclusive)
console.log(numbers);`,
        output: "['X', 'X', 'X']\n[1, 2, 0, 0, 5]"
      }
    ];
  
    this.aggregationMethods = [
      {
        title: 'reduce()',
        code: `const numbers = [1, 2, 3, 4, 5];
  
const sum = numbers.reduce((total, current) => {
  return total + current;
}, 0);
  
console.log('Sum:', sum);`,
        output: 'Sum: 15'
      },
      {
        title: 'reduceRight()',
        code: `const strings = ['a', 'b', 'c', 'd'];
  
// Concatenate from right to left
const result = strings.reduceRight((acc, current) => {
  return acc + current;
}, '');
  
console.log(result);`,
        output: "'dcba'"
      },
      {
        title: 'Complex reduce() example',
        code: `const orders = [
  { id: 1, amount: 250 },
  { id: 2, amount: 400 },
  { id: 3, amount: 100 },
  { id: 4, amount: 325 }
];
  
const orderStats = orders.reduce((stats, order) => {
  stats.total += order.amount;
  stats.count++;
  stats.average = stats.total / stats.count;
  
  if (order.amount > stats.highest) {
    stats.highest = order.amount;
  }
  
  return stats;
}, { total: 0, count: 0, average: 0, highest: 0 });
  
console.log(orderStats);`,
        output: "{ total: 1075, count: 4, average: 268.75, highest: 400 }"
      },
      {
        title: 'join()',
        code: `const elements = ['Fire', 'Air', 'Water'];

// Default separator (comma)
console.log(elements.join());

// Custom separator
console.log(elements.join(' | '));

// Empty separator (concatenates)
console.log(elements.join(''));`,
        output: "'Fire,Air,Water'\n'Fire | Air | Water'\n'FireAirWater'"
      }
    ];

    this.sortingMethods = [
      {
        title: 'sort()',
        code: `const fruits = ['banana', 'cherry', 'apple', 'date'];

// Default lexicographical sort
fruits.sort();
console.log(fruits);

// Numeric sort (ascending)
const numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b);
console.log(numbers);`,
        output: "['apple', 'banana', 'cherry', 'date']\n[1, 5, 40, 200]"
      },
      {
        title: 'reverse()',
        code: `const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// Combine with sort for descending order
const scores = [10, 5, 8, 3, 20];
scores.sort((a, b) => b - a); // Descending
console.log(scores);`,
        output: '[5, 4, 3, 2, 1]\n[20, 10, 8, 5, 3]'
      },
      {
        title: 'Custom sorting',
        code: `const people = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 25 },
  { name: 'Ana', age: 20 },
  { name: 'Zach', age: 30 }
];

// Sort by age (ascending), then by name (alphabetically)
people.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

console.log(people);`,
        output: "[{name:'Ana',age:20}, {name:'Ana',age:25}, {name:'John',age:30}, {name:'Zach',age:30}]"
      }
    ];
  
    this.problemList = [
      {
        title: 'Basic Array Operations',
        items: [
          {
            title: 'Sum of Numbers',
            problem: 'Calculate the sum of all numbers in an array.',
            input: '[1, 2, 3, 4, 5]',
            output: '15',
            solution: 'Use the reduce() method to accumulate values.'
          },
          {
            title: 'Double Every Number',
            problem: 'Create a new array with each number doubled from the original array.',
            input: '[1, 2, 3, 4, 5]',
            output: '[2, 4, 6, 8, 10]',
            solution: 'Use the map() method with a function that multiplies each value by 2.'
          },
          {
            title: 'Find Even Numbers',
            problem: 'Filter out all even numbers from an array.',
            input: '[1, 2, 3, 4, 5, 6, 7, 8]',
            output: '[2, 4, 6, 8]',
            solution: 'Use the filter() method with a condition that checks if each number is divisible by 2.'
          },
          {
            title: 'Average Value',
            problem: 'Calculate the average value of numbers in an array.',
            input: '[10, 20, 30, 40, 50]',
            output: '30',
            solution: 'Use reduce() to sum all values and divide by the array length.'
          }
        ]
      },
      {
        title: 'Intermediate Challenges',
        items: [
          {
            title: 'Flatten Nested Arrays',
            problem: 'Convert a nested array structure into a single flat array.',
            input: '[[1, 2], [3, 4], [5, 6]]',
            output: '[1, 2, 3, 4, 5, 6]',
            solution: 'Use the flat() method or flatMap() for a single level of nesting.'
          },
          {
            title: 'Group By Property',
            problem: 'Group an array of objects by a specific property.',
            input: '[{name: "Apple", type: "fruit"}, {name: "Carrot", type: "vegetable"}, {name: "Banana", type: "fruit"}]',
            output: '{ fruit: [{name: "Apple"...}, {name: "Banana"...}], vegetable: [{name: "Carrot"...}] }',
            solution: 'Use reduce() to build an object with keys as the property values.'
          },
          {
            title: 'Find Duplicates',
            problem: 'Identify all duplicate values in an array.',
            input: '[1, 2, 3, 2, 4, 5, 1, 6]',
            output: '[1, 2]',
            solution: 'Use filter() with indexOf() and lastIndexOf() to compare occurrences.'
          },
          {
            title: 'Chunk Array',
            problem: 'Split an array into chunks of a specific size.',
            input: '[1, 2, 3, 4, 5, 6, 7, 8], size: 3',
            output: '[[1, 2, 3], [4, 5, 6], [7, 8]]',
            solution: 'Use slice() in a loop or with Array.from() and map().'
          },
          {
            title: 'Remove Falsy Values',
            problem: 'Remove all falsy values (false, null, 0, "", undefined, NaN) from an array.',
            input: '[0, 1, false, 2, "", 3, null, undefined, NaN]',
            output: '[1, 2, 3]',
            solution: 'Use filter() with Boolean constructor as the callback function.'
          }
        ]
      },
      {
        title: 'Advanced Array Techniques',
        items: [
          {
            title: 'Custom Sort Function',
            problem: 'Sort an array of objects by multiple properties.',
            input: '[{name: "John", age: 25}, {name: "Jane", age: 25}, {name: "Sam", age: 30}]',
            output: 'Objects sorted first by age ascending, then by name alphabetically',
            solution: 'Use sort() with a custom comparator function that checks multiple conditions.'
          },
          {
            title: 'Data Transformation Pipeline',
            problem: 'Create a sequence of array operations to transform data.',
            input: '[{id: 1, values: [10, 20]}, {id: 2, values: [30, 40]}]',
            output: '[30, 60, 90, 120] (Each value multiplied by its id, then flattened)',
            solution: 'Chain map() and flatMap() methods to transform and flatten the data.'
          },
          {
            title: 'Frequency Counter',
            problem: 'Count the occurrences of each element in an array.',
            input: '["a", "b", "a", "c", "b", "a"]',
            output: '{ a: 3, b: 2, c: 1 }',
            solution: 'Use reduce() to build a frequency object.'
          },
          {
            title: 'Create Pagination',
            problem: 'Implement a function that paginates an array of items.',
            input: 'array: [1-100], page: 2, itemsPerPage: 10',
            output: '[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]',
            solution: 'Use slice() with calculated start and end indices based on page and itemsPerPage parameters.'
          },
          {
            title: 'Deep Clone Array',
            problem: 'Create a deep copy of a nested array structure without reference to the original.',
            input: '[[1, [2, 3]], [4, [5, 6]]]',
            output: 'A new array with the same structure and values but no references to the original.',
            solution: 'Use JSON.parse(JSON.stringify()) for simple cases or a recursive function for more complex structures.'
          },
          {
            title: 'Functional Operations Pipeline',
            problem: 'Create a sequence of operations: filter even numbers, multiply by 3, find numbers greater than 10, sort descending.',
            input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
            output: '[30, 24, 18, 12]',
            solution: 'Chain multiple array methods: filter(), map(), filter(), sort().'
          }
        ]
      },
      {
        title: 'Real-World Applications',
        items: [
          {
            title: 'Cart Total Calculator',
            problem: 'Calculate the total price and total items in a shopping cart array.',
            input: '[{item: "Book", price: 10, qty: 2}, {item: "Pen", price: 1, qty: 5}, {item: "Notebook", price: 5, qty: 3}]',
            output: '{ totalPrice: 40, totalItems: 10 }',
            solution: 'Use reduce() to accumulate both totals in a single pass.'
          },
          {
            title: 'Data Filtering with Multiple Conditions',
            problem: 'Filter products that are in stock, have a rating of 4 or higher, and price less than $50.',
            input: 'Array of product objects with various properties',
            output: 'Filtered array meeting all conditions',
            solution: 'Use filter() with multiple conditions combined with logical operators.'
          },
          {
            title: 'Normalized Data Transformer',
            problem: 'Convert an array of normalized data into a nested structure.',
            input: '[{id: 1, type: "user", name: "John"}, {id: 2, type: "post", title: "Hello", userId: 1}, {id: 3, type: "post", title: "World", userId: 1}]',
            output: '{users: [{id: 1, name: "John", posts: [{id: 2, title: "Hello"}, {id: 3, title: "World"}]}]}',
            solution: 'Use reduce() with a complex transformation logic to build the nested structure.'
          },
          {
            title: 'Event Analytics',
            problem: 'Analyze an array of event logs to count events by type and calculate average duration.',
            input: '[{type: "click", duration: 200}, {type: "scroll", duration: 150}, {type: "click", duration: 300}]',
            output: '{click: {count: 2, avgDuration: 250}, scroll: {count: 1, avgDuration: 150}}',
            solution: 'Use reduce() to build a statistics object, calculating counts and averages as you go.'
          }
        ]
      }
    ];
  }
}