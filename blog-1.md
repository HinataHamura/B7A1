# `any` vs `unknown` in TypeScript – Why It Matters

## Introduction

TypeScript is all about catching bugs before they reach the browser.  
But if we use the `any` type everywhere, we throw that safety away.  
In this post, I’ll explain in simple language why `any` is dangerous, why `unknown` is safer, and what type narrowing means.

## Why `any` is a Type Safety Hole

When we write `any`, we tell TypeScript: “Don’t check this value.”

```ts
let data: any = "Hello";

data.toFixed(2);        // No error here, but will crash at runtime
data.nonExistingProp(); // Also no error, but not safe
```

Because of `any`:

- TypeScript does not warn us.
- Autocomplete becomes less useful.
- Bugs can easily slip into production.

That’s why people say `any` is a **type safety hole**. It lets unsafe code go through without complaints.

## Why `unknown` is Safer

`unknown` can also hold any value, but with one big difference:  
we are **not allowed** to use it directly without checking.

```ts
let value: unknown = "Hello";

// Error: value is of type 'unknown'
value.toUpperCase();
```

This forces us to be more careful.  
We must check the type first, which makes the code safer.

## Type Narrowing in Action

Type narrowing means: use checks so TypeScript can understand the real type.

```ts
function handleValue(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported";
}
```

Here:

- At first, `value` is `unknown`.
- Inside `typeof value === "string"`, it becomes `string`.
- Inside `typeof value === "number"`, it becomes `number`.

The type gets “narrowed” step by step.

## Conclusion

- `any` = no checks, easy but risky.
- `unknown` = accepts anything, but forces you to check the type.
- Type narrowing = using checks like `typeof` so TypeScript knows what you’re dealing with.

If I feel tempted to use `any`, I now try `unknown` first and then narrow it.  
This small habit already makes my TypeScript code more reliable.