// ── Battle Data ──────────────────────────────────────────────────────────────
const battleData = {
  problem: 'Write an code for Factorial function in js',
  solution_1: `Here's a JavaScript function to calculate the factorial of a number using both **iterative** and **recursive** approaches:

### 1. Iterative Approach (Using a Loop)
\`\`\`javascript
function factorialIterative(n) {
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5)); // Output: 120
\`\`\`

### 2. Recursive Approach
\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); // Output: 120
\`\`\`

**Key Notes:**
- Factorial of 0 (\`0!\`) is \`1\` by definition.
- Negative numbers have no factorial (returns \`NaN\`).
- Recursion may cause a stack overflow for very large \`n\`.
- Iterative approach is more efficient for large numbers.`,

  solution_2: `Below is a simple implementation of a factorial function in JavaScript.

\`\`\`javascript
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
\`\`\`

**Explanation:**
- **Input Validation**: Throws an error for negative numbers.
- **Base Case**: Returns 1 for \`n === 0\` or \`n === 1\`.
- **Iterative Calculation**: Multiplies from 2 up to \`n\`.

**Recursive Version:**
\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) throw new Error("Not defined for negative numbers.");
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
\`\`\``,

  judge: {
    solution_1_score: 0,
    solution_2_score: 0,
    solution_1_reasoning:
      "The input provided for Solution 1 is a template placeholder variable ('$(solution_1)') and does not contain any actual JavaScript code to evaluate.",
    solution_2_reasoning:
      "The input provided for Solution 2 is a template placeholder variable ('$(solution_2)') and does not contain any actual JavaScript code to evaluate.",
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
export function getVerdict(s1, s2) {
  if (s1 > s2) return '🏆 Model 1 Wins';
  if (s2 > s1) return '🏆 Model 2 Wins';
  return '🤝 Result: Tie';
}

export function getScoreLabel(s1, s2) {
  if (s1 === s2) return `BOTH SCORED ${s1}/10`;
  return `${s1}/10  vs  ${s2}/10`;
}

export default battleData;
