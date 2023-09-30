---
layout: "../../layouts/BlogPostLayout.astro"
title: "Abstraction and composition"
description: "Some abstractions are composable, others allow us to compose our code."
pubDate: "Oct 1 2023"
tags:
  - "Software development"
  - "JavaScript"
  - "Elm"
---

## The callback hell problem

If you're familiar with Node.js, you've probably heard of callback hell.

It's an issue that arises when we have a lot of codependent asynchronous logic in our code like this:

```js
asyncFn1(() => {
  asyncFn2(() => {
    asyncFn3();
  });
});
```

You can see that this gets messy quickly - there is a lot of nesting.

We want the three functions to be called one after the other, but if we tried to do it like this, the functions would run all at the same time:

```js
asyncFn1();
asyncFn2();
asyncFn3();
```

How do we write that codependent logic without creating a callback hell?

It was commonly advised to extract parts of the code into their own named functions:

```js
const doThing = (cb) => {
  asyncFn1(() => {
    asyncFn2();
    cb();
  });
};

doThing(asyncFn3);
```

While splitting programs into functions is often great, not every piece of code deserves its own function.

If we always separated our async logic like this, we'd end up with plenty of functions that don't do much apart from calling other functions.

The nesting is still there, it's just hidden. To find out what's really going on in the code, we'd have to go through multiple functions which don't do much.

So what's a better solution? An async flow control library like [async.js](http://caolan.github.io/async/v3/):

```js
async.series([asyncFn1, asyncFn2, asyncFn3]);
```

Now we can execute async functions subsequently without writing unreasonably nested code, or hiding the nesting in silly helper functions.

We can still split our code into helper functions if we want to:

```js
const doThing = (cb) => {
  async.series([asyncFn1, asyncFn2, cb]);
};

async.series([doThing, asyncFn3]);
```

But now we have a choice. We're free to _compose_ our code however we want.

## Two types of abstraction

The previous example leads me to believe that there are two types of abstractions.

The first type is composable abstractions. Those are functions that we can compose into a bigger program, functions like `doThing`.

The second type is abstractions that _allow us to compose_ code in new ways. Those include things like the `async.js` library, or JavaScript Promises, and async/await which replaced it later.

Let's call those higher order abstractions. A common theme between them is allowing us to write the flow of our programs in more expressive ways.

## jQuery and React

A different example would be comparing something like jQuery to React.

jQuery made developer's lives easier by eliminating various inconsistencies between browsers, and providing some handy utilities.

However, at the end of the day, developers were still writing the same type of DOM reading and updating code that they did before.

On the other hand, React revolutionized how we think about building UI's.

It gave us components, props, state, and most importantly, declarative UI updates.

Those are the primitives that allow us to build user interfaces (and other things like [emails](https://react.email/), [3d scenes](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [pdfs](https://react-pdf.org/), or [videos](https://www.remotion.dev/)) in a more expressive way.

## The cure for nesting

I think most of us agree that nesting code is bad for readability. In the case of async logic, we fixed it by rethinking how we express flow control.

Let's look at a different example of deeply nested code:

```c
int calculate(int bottom, int top)
{
  if (top > bottom)
  {
    int sum = 0;

    for (int number = bottom; number <= top; number++)
    {
      if (number % 2 == 0)
      {
        sum += number;
      }
    }

    return sum;
  }
  else
  {
    return 0;
  }
}
```

This is an example of nested code from a [YouTube video by Code Aesthetic](https://www.youtube.com/watch?v=CFRhGnuXG-4&t=58s). The way he proposes to denest it is by using two methods - extraction and inversion.

Extraction is simply extracting code into separate functions like we did in the `doThing` example earlier.

Inversion means changing the order of the conditional statements so that we can take advantage of early return.

This is the fixed code:

```c
int filterNumber(int number)
{
  if (number % 2 == 0)
  {
    return number;
  }

  return 0;
}

int calculate(int bottom, int top)
{
  if (top < bottom)
  {
    return 0;
  }

  int sum = 0;

  for (int number = bottom; number <= top; number++)
  {
    sum += filterNumber(number);
  }

  return sum;
}
```

For a performance sensitive case, I think the author did a great job.

However, I'd like to take a step back and rethink how the code was written in the first place.

What we're essentialy doing here is we **sum** a **range** of numbers that we **filter** based on whether a number is **even**.

This is how we would implement that functionality in Elm:

```elm
sumEvenFromRange start end =
  range start end
  |> filter isEven
  |> sum
```

As you can see, there is no nesting and the implementation even resembles its description in natural language.

We can tell what this code is doing immediately by looking at it without reading the implementation of the functions used.

That's because we use composable idioms - `range`, `filter`, `isEven`, and `sum`.

Previously we were _hiding_ what our code was doing in the `filterNumber` function (Filter based on what? Does the function return a boolean?).

In the Elm example we put together composable abstractions using a higher level abstraction - the pipe operator. This is what the code would look like without it:

```elm
sumEvenFromRange start end =
  sum(filter isEven (range start end))
```

It's shorter but there is nesting. Nesting that we can avoid by changing how we express the flow of our program using the pipe operator.

For the sake of completeness, if we want our code to behave exactly like Code Aesthetic's example, we also need to handle the special case of `bottom` being greater than `top`.

This is the complete example with imports added:

```elm
import List exposing (sum, filter, range)
import Arithmetic exposing (isEven)

sumEvenFromRange start end =
  range start end
  |> filter isEven
  |> sum

calculate bottom top =
  if (top < bottom) then
    sumEvenFromRange bottom top
  else
    0
```

## Native language features

When we zoom out, we realize that things like functions or conditional statements belong to the category of higher order abstractions too.

In fact, a lot of those abstractions are implemented as language features.

Take a look at this TypeScript library called [TS-Pattern](https://github.com/gvergnaud/ts-pattern):

```ts
import { match, P } from "ts-pattern";

const myList = ["a", "b", "c"];

match(myList)
  .with([], () => {
    console.log("The list is empty");
  })
  .with([P._], ([x]) => {
    console.log(`The list has one element: ${x}`);
  })
  .otherwise(() => {
    console.log("The list has multiple elements");
  });
```

This is pattern matching. It allows us to model the flow of our program in a more expressive way than with just `if` statements.

Pattern matching is implemented in some other languages as a native feature. For example, Python has the `match` operator:

```py
my_list = ["a", "b", "c"]

match my_list:
  case []:
    print("The list is empty")
  case [x]:
   print(f"The list has one element: {x}")
  case _:
   print("The list has multiple elements")
```

## Summary

I believe there are two types of abstractions:

- composable abstractions
- higher order abstractions

We're usually concerned with writing the first type. The second type is covered by

- the standard library with functions like `filter`
- external libraries like async.js, React, or TS-Pattern
- native language features like Promises or the pipe operator

The expressiveness and thus readibility of our code depends on how we combine those abstractions with our own composable abstractions.

How powerful and expressive a language feels depends largely on the quality of its higher order abstractions.

Hiding parts of our program in different functions isn't always the best way to make the code more readable.

Sometimes the best refactors happen when we rethink how we approach the problem.
