# Fibonacci and Merge Sort Implementations

This repository contains two popular algorithms written in JavaScript: **Fibonacci Sequence** and **Merge Sort**. These functions help calculate Fibonacci numbers and sort arrays using merge sort. Below, you will find usage examples and explanations for each function.

---

## 📘 Fibonacci Sequence

The **Fibonacci sequence** is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. We have both an **iterative** and **recursive** implementation.

### Functions

- **`fibs(n)`** (Iterative)
  - This function generates the Fibonacci sequence up to the nth number using a loop.

- **`fibsRec(n)`** (Recursive)
  - Recursively generates the Fibonacci sequence up to the nth number.

### Example Usage

```javascript
fibs(5);      // Output: [0, 1, 1, 2, 3]
fibsRec(6);   // Output: [0, 1, 1, 2, 3, 5]
```

### Edge Cases
- Negative input will return an error message.
- Works for any non-negative integer.

```javascript
console.log(fibs(-1));       // Output: "Invalid Input: value should be greater than or equal to 0."
console.log(fibsRec(7));     // Output: [0, 1, 1, 2, 3, 5, 8]
```

---

## 📘 Merge Sort

**Merge Sort** is a classic sorting algorithm that uses a divide-and-conquer approach to recursively split an array into two halves, sort each half, and then merge the sorted halves back together.

### Functions

- **`mergeSort(array)`**
  - Recursively sorts an array by splitting it into two halves and merging the sorted halves.

- **`merge(left, right)`**
  - Merges two sorted arrays into one sorted array.

### Example Usage

```javascript
const arr = [5, 2, 9, 1, 5, 6];
console.log(mergeSort(arr));  // Output: [1, 2, 5, 5, 6, 9]
```

### Explanation
The `mergeSort` function works by:
1. Dividing the array into two halves.
2. Recursively sorting each half.
3. Merging the two sorted halves back together using the `merge` function.

### Edge Cases
- An array with 0 or 1 element will return the array itself (since it's already sorted).

```javascript
console.log(mergeSort([2]));  // Output: [2]
console.log(mergeSort([]));   // Output: []
```

---

## 🚀 How to Run the Code

1. Clone the repository:
   ```bash
   git clone https://github.com/Mesud-Ahmed/Recursion-DSA.git
   ```

2. Install any required dependencies (if applicable):
   ```bash
   npm install
   ```

3. To run the **Fibonacci** functions:
   ```bash
   node fibonacci.js
   ```

4. To run the **Merge Sort** function:
   ```bash
   node mergeSort.js
   ```

---

