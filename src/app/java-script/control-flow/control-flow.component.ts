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
  problemList:any[]=[]

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

     this.problemList = [
      {
        title: 'Array and String Manipulation',
        items: [
          {
            title: '1. Two Sum',
            problem: 'Return indices of two numbers such that they add up to target.',
            input: 'nums = [2,7,11,15], target = 9',
            output: '[0,1]',
            solution: ''
          },
          {
            title: '2. Three Sum',
            problem: 'Return all triplets that sum to zero.',
            input: 'nums = [-1,0,1,2,-1,-4]',
            output: '[[-1,-1,2],[-1,0,1]]',
            solution: 'Sort the array and use two-pointer approach.'
          },
          {
            title: '3. Maximum Subarray',
            problem: 'Find the contiguous subarray with the largest sum.',
            input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
            output: '6',
            solution: "Use Kadane's algorithm."
          },
          {
            title: '4. Container With Most Water',
            problem: 'Find two walls that form a container holding the most water.',
            input: 'height = [1,8,6,2,5,4,8,3,7]',
            output: '49',
            solution: 'Use two pointers from both ends.'
          },
          {
            title: '5. Rotate Array',
            problem: 'Rotate an array to the right by k steps.',
            input: 'nums = [1,2,3,4,5,6,7], k = 3',
            output: '[5,6,7,1,2,3,4]',
            solution: 'Reverse the whole array, then reverse parts.'
          },
          {
            title: '6. Valid Anagram',
            problem: 'Check if one string is an anagram of another.',
            input: 's = "anagram", t = "nagaram"',
            output: 'true',
            solution: 'Use character frequency or sort both strings.'
          },
          {
            title: '7. Group Anagrams',
            problem: 'Group words that are anagrams of each other.',
            input: '["eat","tea","tan","ate","nat","bat"]',
            output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            solution: 'Use hashmap with sorted strings as keys.'
          },
          {
            title: '8. Longest Palindromic Substring',
            problem: 'Find the longest substring that is a palindrome.',
            input: 's = "babad"',
            output: '"bab" or "aba"',
            solution: 'Expand around each center.'
          },
          {
            title: '9. String Compression',
            problem: 'Compress string using counts of repeated characters.',
            input: '["a","a","b","b","c","c","c"]',
            output: '6, array becomes ["a","2","b","2","c","3"]',
            solution: 'Count consecutive characters and overwrite array.'
          },
          {
            title: '10. Product of Array Except Self',
            problem: 'Return product of array elements except self.',
            input: 'nums = [1,2,3,4]',
            output: '[24,12,8,6]',
            solution: 'Use prefix and suffix products.'
          }
        ]
      },
      {
        title: 'Matrix Problems',
        items: [
          {
            title: '11. Spiral Matrix',
            problem: 'Return elements of a matrix in spiral order.',
            input: '[[1,2,3],[4,5,6],[7,8,9]]',
            output: '[1,2,3,6,9,8,7,4,5]',
            solution: 'Use boundaries and spiral traversal.'
          },
          {
            title: '12. Rotate Image',
            problem: 'Rotate a 2D matrix 90 degrees clockwise.',
            input: '[[1,2,3],[4,5,6],[7,8,9]]',
            output: '[[7,4,1],[8,5,2],[9,6,3]]',
            solution: 'Transpose then reverse rows.'
          },
          {
            title: '13. Set Matrix Zeroes',
            problem: 'If element is 0, set its row and column to 0.',
            input: '[[1,1,1],[1,0,1],[1,1,1]]',
            output: '[[1,0,1],[0,0,0],[1,0,1]]',
            solution: 'Use first row and col as markers.'
          },
          {
            title: '14. Search in a 2D Matrix',
            problem: 'Search value in sorted 2D matrix.',
            input: '[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
            output: 'true',
            solution: 'Use binary search treating matrix as 1D.'
          },
          {
            title: '15. Game of Life',
            problem: 'Implement Conway\'s Game of Life.',
            input: '[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]',
            output: 'Next board state',
            solution: 'Use bit manipulation for in-place updates.'
          }
        ]
      },
      {
        title: 'Dynamic Programming and Recursion',
        items: [
          {
            title: '16. Climbing Stairs',
            problem: 'Find distinct ways to climb stairs.',
            input: 'n = 3',
            output: '3',
            solution: 'dp[i] = dp[i-1] + dp[i-2]'
          },
          {
            title: '17. Coin Change',
            problem: 'Fewest coins to make amount.',
            input: 'coins = [1,2,5], amount = 11',
            output: '3',
            solution: 'DP with dp[i] = min(dp[i - coin]) + 1'
          },
          {
            title: '18. Longest Increasing Subsequence',
            problem: 'Find length of LIS.',
            input: '[10,9,2,5,3,7,101,18]',
            output: '4',
            solution: 'DP or binary search.'
          },
          {
            title: '19. Word Break',
            problem: 'Check if string can be segmented using dictionary.',
            input: 's = "leetcode", wordDict = ["leet", "code"]',
            output: 'true',
            solution: 'DP with dp[i] tracking breakability.'
          },
          {
            title: '20. Generate Parentheses',
            problem: 'Generate all valid parentheses combinations.',
            input: 'n = 3',
            output: '["((()))","(()())","(())()","()(())","()()()"]',
            solution: 'Use backtracking.'
          }
        ]
      },
      {
        title: 'Trees and Graphs',
        items: [
          {
            title: '21. Binary Tree Level Order Traversal',
            problem: 'Return level order traversal.',
            input: 'Tree with root 3, left 9, right 20 (with 15, 7)',
            output: '[[3],[9,20],[15,7]]',
            solution: 'Use BFS with queue.'
          },
          {
            title: '22. Validate Binary Search Tree',
            problem: 'Check if binary tree is valid BST.',
            input: 'Tree with nodes 2, 1, 3',
            output: 'true',
            solution: 'Recursively check bounds.'
          },
          {
            title: '23. Course Schedule',
            problem: 'Can all courses be finished with prerequisites?',
            input: 'numCourses = 2, prerequisites = [[1,0]]',
            output: 'true',
            solution: 'Detect cycles using DFS or topological sort.'
          },
          {
            title: '24. Number of Islands',
            problem: 'Count islands in grid.',
            input: 'Grid with "1" and "0"',
            output: '1',
            solution: 'Use DFS or BFS to explore connected land.'
          },
          {
            title: '25. Serialize and Deserialize Binary Tree',
            problem: 'Serialize and deserialize binary tree.',
            input: 'Tree with nodes 1,2,3,4,5',
            output: '"1,2,#,#,3,4,#,#,5,#,#"',
            solution: 'Use preorder with markers.'
          }
        ]
      },
      {
        title: 'Advanced JavaScript Concepts',
        items: [
          {
            title: '26. Implement Promise.all',
            problem: 'Implement custom Promise.all.',
            input: '[Promise.resolve(1), Promise.resolve(2)]',
            output: 'Promise resolves to [1,2]',
            solution: 'Track completion, resolve when all finish.'
          },
          {
            title: '27. Flatten a Nested Array',
            problem: 'Flatten arbitrarily nested array.',
            input: '[1,[2,[3,4],5]]',
            output: '[1,2,3,4,5]',
            solution: 'Use recursion or stack.'
          },
          {
            title: '28. Deep Clone an Object',
            problem: 'Clone an object deeply.',
            input: '{a:1, b:{c:2}}',
            output: 'New object with same structure',
            solution: 'Use recursion and type checks.'
          },
          {
            title: '29. Implement Debounce Function',
            problem: 'Debounce function execution.',
            input: 'debounced(() => console.log("Hi"), 1000)',
            output: 'Logs once after 1000ms inactivity',
            solution: 'Use setTimeout/clearTimeout.'
          },
          {
            title: '30. Event Emitter',
            problem: 'Create an event emitter.',
            input: 'emitter.on("event", callback); emitter.emit("event")',
            output: 'Callback gets triggered',
            solution: 'Store listeners and call them on emit.'
          }
        ]
      }
    ];
    
  }


  }

  
  


