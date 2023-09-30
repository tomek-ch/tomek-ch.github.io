---
layout: "../../layouts/BlogPostLayout.astro"
title: "Elegant functions"
description: "Taking a look at a fundamental programming language feature from a different perspective."
pubDate: "Sep 30 2023"
tags:
  - "Software development"
  - "Elm"
---

When writing code, how do we define a variable? This is how it's done in Python:

```py
my_var = "hello"
```

And how do we define a function?

```py
def add(a, b):
  return a + b
```

Then we can call it like this:

```py
add(1, 2)
```

Now let's make a comparison. This is how we define a variable in Elm:

```elm
myVar = "hello"
```

This is how we define a function:

```elm
add a b =
  a + b
```

And this is how we call that function:

```elm
sum = add 1 2
```

Something is missing here. It's the parentheses. Why?

The only difference between a variable (constant) and a function is the parameters.

But what if we want to write a function that takes no arguments? We don't do that.

Elm is a pure functional programming language. A pure function is a function that, given certain input, always produces the same output.

So, if our function doesn't need any arguments, it's not a function. It's a constant.

Since all we ever do in Elm is return values, we skip the `return` keyword.

The last expression in a function is what's returned. Everything in Elm is an expression, including things like `if ... else` blocks. There's no need for statements like `return`.

Besides parentheses, `return`, `def`, and `:`, we also skipped the comma between arguments.

It's an important detail but we'll get to that in a second.

First, let's talk about the function's type signature. Oh right, we didn't write any.

Elm is statically typed, but we can omit the function signature, because the type system is able to infer it.

We can add it if we want to though:

```elm
myFn : Float -> Float -> Float
myFn a b =
  a + b
```

What's up with the arrows? Wouldn't something like `Float, Float -> Float` make more sense? It's a function that takes two arguments after all.

Actually, it's not. Every function in Elm takes only a single argument. `add` takes a `Float` and returns another function which takes another `Float` and returns the sum of the two numbers.

I said that the lack of commas is an important detail, because Elm functions don't work like this:

```py
add(1, 2)
```

Instead, they work like this:

```elm
((myFn 1) 2)
```

The benefit of this is that for every function we write, we get currying for free. We can do something like this if we need to:

```elm
addOne = myFn 1
sum = addOne 2
```

We don't need to change the function declaration or invocation to use partial application in Elm, whereas in a language like Python, it would be a significant change.
