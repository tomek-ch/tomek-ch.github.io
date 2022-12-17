---
layout: "../../layouts/BlogPost.astro"
title: "Breaking down problems and composing software"
description: "Software development is all about problem solving."
pubDate: "Dec 16 2022"
---

Software development is all about problem solving. Problem solving is all about breaking down problems.

To break down a problem, we first need to analyze it. We need to identify the desired result and the means necessary to achieve it. Then we need to provide those means, and to do so, we perform the same analysis. We think of what we want, then we think of what we need to get it until we get to a problem that's easy enough to solve.

To apply this process to software development, we need to think at a higher level first. Instead of beginning with small utility functions, we need to outline an API that we're later going to implement.

Let's imagine we're implementing checkers. We want to allow the players to make moves, so we need to know what move each piece of a player can make. We first need a list of a player's pieces. This means that we need to know whose turn it is and what is the state of the board.

```js
function getPlayerMoves(board, player) {
  const pieces = getPieces(board, player);
  const moves = getMoves(board, pieces);
  return moves;
}
```

Each piece has its own possible moves, but in checkers, captures are mandatory. This means that if a player has a possible capture, they can't make a move which isn't a capture. We could solve this problem like this:

```js
function getPlayerMoves(board, player) {
  const pieces = getPieces(board, player);
  const captures = getCaptures(board, pieces);
  if (captures.length > 0) {
    return captures;
  }

  return getOtherMoves(board, pieces);
}
```

As you can see, we were able to break down a somewhat complex problem into three other, simpler problems. We did it by applying the process that I described earlier.

To complete each task, we identify the desired return value and the arguments needed to compute it. Problem solving maps nicely to functions.

Notice that instead of representing our data as shared state, we explicitly pass it down to our functions. Each function has explicit dependencies - its parameters.

We want to separate each task from the bigger problem to make it easier. The `getCaptures` function only needs to know what the board looks like and whose turn it is. It then returns the result, which is consumed by the calling function.

By representing our problems like this, they become easier to solve and our code becomes more modular. If a function doesn't mutate any global state or depend on it, we can focus on solving the problem at hand without worrying too much about breaking something somewhere else in our program.

Pure functions like this also make debugging easier. If the `getCaptures` function returns incorrect captures, we know where to look for a bug. It's either our algorithm for determining captures that's wrong or we just received incorrect arguments.

If the board argument is incorrect, it means that the function calling `getPlayerMoves` got something wrong. If it's the pieces argument that's incorrect, it's the `getPieces` function that got something wrong.

We can rule out other possibilities by avoiding shared mutable state. This makes our programs predictable and easy to reason about.

However, we can't always avoid changing state. Computer programs are all about data that's constantly being updated. The goal is to limit the occurences of mutation and side effects by separating our pure functions responsible for the business logic from the rest of the program. By reducing the number of places where things are likely to go wrong, we can reduce the number of bugs.

Using pure functions also makes our code easy to test. All we need to verify is that a function, given certain input, produces correct output.

As you can see, by applying the principles of problem solving, we can not only make software development easier but also write more maintainable, less error prone programs.

We first analyze the given problem, starting from the top, outlining the general API, then we implement the it by writing small, independent functions. This allows us to create a coherent system instead of trying to figure out how to write a program from the ground up. By doing this, we can also avoid writing code that solves the wrong problems early on.

```

```
