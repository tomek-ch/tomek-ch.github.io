---
layout: "../../layouts/BlogPostLayout.astro"
title: "Dynamically create objects in JavaScript"
description: "Different ways to turn an array into an object"
pubDate: "Jan 26 2023"
tags:
  - "JavaScript"
---

Let’s say that we have an array of user objects. If we want to look up a specific user by id, we have to use the find method:

```js
const users = [
  { id: 12, name: "Mary" },
  { id: 42, name: "Bob" },
];

const user = users.find(({ id }) => id === 12);
```

This gets annoying if we need to find a user by id many times in our codebase. We can create a function to extract that logic.

We can also use a different data structure. Let's take a look at the second approach.

## Mapping Objects to Ids

We can make looking up objects easier by creating a new object where the ids are the keys. This makes it a lot easier for us to find a user by id:

```js
const usersObj = {
  12: { id: 12, name: "Mary" },
  42: { id: 42, name: "Bob" },
};

const user = users[12];
```

## Use forEach() to Create an Object

The most straightforward way to turn the previous users array into an object would probably be using `forEach()`:

```js
const users = [
  { id: 12, name: "Mary" },
  { id: 42, name: "Bob" },
];

const usersObj = {};
users.forEach((user) => {
  users[user.id] = user;
});
```

## Create an Object Using reduce()

As always, any time we want to transform an array into something, we can use `reduce()`:

```js
const users = [
  { id: 12, name: "Mary" },
  { id: 42, name: "Bob" },
];

const usersObj = users.reduce(
  (acc, user) => ({
    ...acc,
    [user.id]: user,
  }),
  {}
);
```

However, this is a little verbose. We have a more specialized way to turn an array into an object.

## Object.fromEntries()

Object entries are simply two element arrays (like a JS equivalent of tuples) where the first element is the key, and the second element is the value.

We can turn the users array into an entries array using `map()`. Then we can pass it to `Object.fromEntries()` to get our object:

```js
const users = [
  { id: 12, name: "Mary" },
  { id: 42, name: "Bob" },
];

const usersObj = Object.fromEntries(users.map((user) => [user.id, user]));
```
