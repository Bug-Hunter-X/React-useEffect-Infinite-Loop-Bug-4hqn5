# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by incorrectly updating state within the dependency array. 

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description
The `useEffect` hook in the `MyComponent` function attempts to increment the `count` state variable within its own dependency array. This causes an infinite loop, as the state change triggers a re-render, which in turn triggers the `useEffect` hook again, and so on.

## Solution
The solution involves removing the state update from the `useEffect` dependency array. The `useEffect` will run only once on mount if there are no dependencies.