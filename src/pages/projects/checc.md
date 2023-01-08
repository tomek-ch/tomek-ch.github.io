---
order: 3
layout: "../../layouts/ProjectLayout.astro"
title: "Checc.js"
description: "A portable and extensible data validation library in JavaScript, published to npm."
heroImg: "/projects/checc/hero.png"
githubLink: "https://github.com/tomek-ch/checc.js"
liveLink: "https://checcjs.gatsbyjs.io/"
linkText: "Docs"
tech:
  - "JavaScript"
  - "npm"
  - "Express.js"
---

## Why I made it

I made this library because writing the same thing twice sucks. I wanted to have a uniform API for data validation on the front-end and back-end.

## Composability

I chose JavaScript objects as validation schemas because they’re simple and composable. Here is an example schema:

```js
const basicInputSchema = {
  minLength: 2,
  maxLength: 20,
  pattern: [/^[A-Za-z]*$/, "You can only include letters"],
};

const validationSchema = {
  firstName: basicInputSchema,
  lastName: basicInputSchema,
  username: {
    ...basicInputSchema,
    pattern: [/^\w*$/, "You can only include letters, digits and underscores"],
  },
  password: {
    ...basicInputSchema,
    pattern: [/\d/, "Password must contain a digit"],
  },
};
```

## Custom validation

Custom validation is an essential feature, so I tried to make it as straightforward as possible.

```js
const validationSchema = {
  // ...
  repeatPassword: {
    custom: (repeatPassword, { data }) => {
      if (repeatPassword !== data.password) {
        return Promise.reject("Passwords must match");
      }
    },
  },
};
```

## Config

You can embed your custom validators into the library and create dynamic error messages.

```js
config({
  validators: {
    sameAs: [
      (val, { limit, message, data }) => {
        if (val !== data[limit]) {
          return Promise.reject(message);
        }
      },
      (limit, field) => `${field} is different than ${limit}`,
    ],
  },
});
```

## Express middleware

Checc.js comes with an Express middleware out of the box.

```js
const checc = require("checc/middleware");

app.post("/", [
  checc(
    "body",
    {
      username: {
        custom: async (username, { next }) => {
          const user = await User.findOne({ username }).catch(next);
          if (user) return Promise.reject("Username taken");
        },
      },
    },
    { keepSchema: false }
  ),

  (req, res) => {
    const { isValid, errors } = req.checc.body;

    if (!isValid) return res.status(400).json(errors);

    res.sendStatus(200);
  },
]);
```

## Afterthoughts

I made this small library quite some time ago. If I were to write it today, I would change some things. For example, I’d write it in TypeScript.

There’s a couple more issues, however, we already have some good validation libraries in the TypeScript ecosystem. It was a fun project though.
