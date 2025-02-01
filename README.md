# React 18's useTransition Hook in React 19

This repository demonstrates a bug caused by using React 18's `useTransition` hook in a React 19 application.

The `useTransition` hook is not supported in React 19, resulting in an error. This example showcases the issue and provides a solution using React 19's features for handling transitions.

## Bug Description
Using `useTransition` from `react` results in an error because it's not available in React 19.

## Solution
The solution involves replacing `useTransition` with a suitable alternative that is compatible with React 19, potentially using a state management library or a custom implementation for transitions.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the error in the console.
