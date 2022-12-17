---
layout: "../../layouts/BlogPost.astro"
title: "The power of flatMap"
description: "Have you ever used it?"
pubDate: "Dec 16 2022"
---

You're probably familiar with higher order array functions such as `map` and `filter`. But have you heard about `flatMap`?

Map allows you to transform every item in an array to create a new array with exactly the same amount of items:

```js
[1, 2, 3].map((n) => n * 2); // [2, 4, 6]
```

Filter allows you to create a new array with only the items that pass the given test, meaning it will always result in an array with the same or smaller number of items:

```js
[1, 2, 3]
  .filter((n) => n > 1) // [2, 3]
  [(1, 2, 3)].filter((n) => n > 0); // [1, 2, 3]
```

But what if we want to create an array that contains more items than the original one? That's something we can use flatMap for:

```js
[1, 2, 3].flatMap((n) => [n, n]); // [1, 1, 2, 2, 3, 3]
```

This might seem a little magical but it's really not. `flatMap` is simply `map` followed by `flat`. In case you're not familiar with `flat`, it's a function which flattens an array of arrays like this:

```js
[1, [], [2, 3]].flat(); // [1, 2, 3]
```

Items from nested arrays are extracted into the resulting one, and if the item is an empty array, there's no trace of it left in the result. The previous `flatMap` example could be written like this:

```js
[1, 2, 3]
  // [[1, 1], [2, 2], [3, 3]]
  .map((n) => [n, n])
  // [1, 1, 2, 2, 3, 3]
  .flat();
```

This means that we can also filter out some items based on a condition by simply returning an empty array. You can see a more complex example on mdn, which includes adding new items and filtering some out.

`flatMap` is really powerful, but what are the alternative approaches to solving the above problem?

Just like we can recreate `map`, `filter` and `flat` with `reduce`, we can recreate `flatMap` too:

```js
// [1, 1, 2, 2, 3, 3]
[1, 2, 3].reduce((acc, n) => […acc, n, n], []);
```

But, you know…

!(reduce() is a very helpful function because it accomplishes two important tasks at once: writing unreadable code and showing off how smart you are)[/reduce-is-useful.png]

And probably the most obvious solution is an imperative one:

```js
const result = [];
[1, 2, 3].forEach((n) => result.push(n, n));
```

This will seem most familiar to the majority of programmers out there. However, this approach would introduce some repetition in our code. Initializing an empty array, then writing a push nested in a `forEach` every time we need to map many to many items doesn't feel expressive.

In real life scenarios, when you're doing more than repeating an item, you're probably going to have a separate function for your computation.

Let's imagine we're implementing checkers. Returning a list of a piece's possible moves is quite involved in itself, so we want to extract that logic to its own function. Then we want to get all the possible moves of a player using that function:

```js
const playerMoves = playerPieces.flatMap((piece) => {
  return getPieceMoves(board, piece);
});
```

The `forEach` approach would look like this:

```js
const playerMoves = [];
playerPieces.forEach(piece => {
  result.push(…getPieceMoves(board, piece))
});
```

Initializing an empty array, then mutating it while spreading the result of our function and nesting it inside `push` and `forEach` isn't that clean.

Another benefit of using `flatMap` is that you can easily chain it with other array operations without creating intermediary variables:

```js
myArray
  .flatMap(...)
  .map(...);
```

The declarative approach of `flatMap`, wihich abstracts away unnecessary details is powerful in its simplicity. Knowing how to use it can be handy when you need it.
