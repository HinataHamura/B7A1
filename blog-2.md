# How Generics Make TypeScript Code Reusable and Safe

## Introduction

When I started with TypeScript, I often copied the same function for different types.  
One version for numbers, one for strings, and so on.  
Generics helped me stop repeating myself, while still keeping strong typing.

## What Are Generics?

Generics are like “variables for types”.  
Instead of fixing a type, we use a type parameter like `T` and let the caller decide the actual type.

```ts
function NumOrString<T>(value: T): T {
  return value;
}

const num = NumOrString(10);       // T is number
const text = NumOrString("Hello"); // T is string
```

One function works with many types, and TypeScript still checks everything.

## Reusable Functions with Generics

Without generics, we might write:

```ts
function wrapNumber(value: number): number[] {
  return [value];
}

function wrapString(value: string): string[] {
  return [value];
}
```

With generics, we only need one:

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const a = wrapInArray(5);        // number[]
const b = wrapInArray("hello");  // string[]
```

Same logic, less code, and full type safety.

## Generics with Constraints

Sometimes we want a generic that only accepts certain shapes.  
For example, anything that has a `length` property:

```ts
function lengthOfValue<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

lengthOfValue("Hello");     // OK
lengthOfValue();   // OK
// lengthOfValue(123);      // Error: number has no length
```

`T extends { length: number }` says: “T can be any type, but it must have a length.”

## Conclusion

Generics let us:

- Write one function or class that works with many types.
- Keep strong typing and autocomplete.
- Avoid copy–pasting the same logic.

For me, generics turned TypeScript from “just types” into a powerful tool for clean, reusable code.