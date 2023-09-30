---
layout: "../../layouts/BlogPostLayout.astro"
title: "JSX vs templates"
description: "The difference is flexibility and code organization"
pubDate: "Jan 8 2023"
tags:
  - "Frontend"
  - "JavaScript"
  - "React"
  - "Vue"
---

## Rendering in JS frameworks

When it comes to rendering in JavaScript frameworks, there are two approaches. One is to clearly divide our components into JS logic and template markup. The other is to render HTML by calling JavaScript functions.

JSX is simply syntactic sugar for the second approach. It allows us to use a familiar XML syntax for HTML elements and our components, but still holds the full power of being just JavaScript.

It means that JSX elements are first class citizens of our code. They are regular values and we can return them from functions, pass them as arguments, and so on.

We can't do that with templates. But do we need to? Templates provide us with alternative ways to perform common operations like dynamic bindings, conditional rendering, loops, and slots.

So, which way is better?

## Multiple components per file

Templates force us to organize our components into distinct sections, which many people like. A drawback of this is that we usually can only have one component per file, or, if we're using Angular, many files per component.

Consider the following example - we're making a custom select. It exports a `Select` component and an `Option` component to nest inside it. It only ever makes sense to use those two together, so why should we put them in separate files?

This is also an issue for components that we don't want to export. Sometimes, we have a small piece of markup that it would make sense to separate, but it doesn't make sense to create a new file for it and export it for the entire app to use. Reasons for wanting to separate some markup would be reducing code repetition, or extracting conditional logic.

Because templates usually don't allow multiple components per file, we're forced to either create a new file for something that doesn't deserve its own file, or use workarounds like repeating code, looping over ad hoc arrays, or writing complex templates with nested conditional rendering.

## Markup as a first-class citizen

By using JSX instead of templates, we have a lot more flexibility. Apart from being able to put multiple components in one file, implementing things like slots/children, becomes trivial. We don't need to come up new mechanisms for passing around markup, because our markup is data.

Let's imagine that we want to check if a certain argument was provided to our function in JavaScript. Pretty, simple, right? We could write:

```js
function myFn(myArg) {
  if (myArg) {
  // ...
```

Of course, we can implement a more specific check for undefined or null. The point is, we can do anything we want with that argument, like checking for its truthiness or comparing it to things, because it's just a value.

This is exactly how we can check if a child/slot was provided to our component when we use JSX. How can we do that using templates? We can't compare a slot to a value, because the slot content itself is not a value in the context of our code. We need to use framework specific functionalities to achieve that, and a quick search for "vue check if slot is empty" reveals that it is not as simple as it seems.

## Strict separation

This is the problem with templates. They're an entity separate from our script. Because of this, we can never really achieve the level of flexibility with them that is possible with JSX. There's a boundary between our JS and markup that we can't cross. We have to rely on the functionalities that the creator of the framework added. If we try to do something that the creator didn't think of, we might run into trouble.

## Higher-order functions

This is starting to sound a lot like LISP evangelism, but I think there's a closer analogy that we can refer to. It's first class functions. They're great, all modern high-level languages support them, they allow us to write higher-order functions and achieve a level of flexibility that we otherwise wouldn't be able to achieve.

Speaking of higher-order functions, this is how we implement scoped slots using JSX. The funny thing here is that the Vue documentation itself refers to higher order functions when explaining [scoped slots](https://vuejs.org/guide/components/slots.html#scoped-slots).

> You can think of a scoped slot as a function being passed into the child component. The child component then calls it, passing props as arguments

Another funny thing is that [Vue actually supports JSX](https://vuejs.org/guide/components/slots.html#scoped-slots). My question is, why even use templates in the first place?

## Different APIs for props and slots

Let's take a look at one more example. Imagine that we're using a template based framework and have a reusable component in our app that accepts a `title` prop. Now imagine that due to a new feature being implemented, we need to render a checkbox instead of text for the title somewhere in our app. Maybe we need to put the checkbox in a table header to implement a "select all rows" functionality.

We could solve this problem by adding another `isCheckbox` prop, but that's too specific. If we wanted to render a button in the future, we would need to add an `isButton` prop. This is unfit for a component that's supposed to be generic and reusable.

What's a better solution? We can use a slot instead of a prop. The difficulty of implementing this change can vary depending on the compexity of the code. Because of this, we might use the former approach of introducing flags.

Another problem is that because slots and props are two different things, they have different APIs. It would be a breaking change for the component to change a prop to a slot. We would need to fix it in every place where it was used. The solution here might be to support both, a prop and a slot.

What about JSX? We don't really need to change anything. If the component renders `<th>{title}</th>`, we can simply write `title={<Checkbox />}` and it will work. If we use TypeScript and React, we only need to change the type of the prop from `string` to `ReactNode`. That's it. Because a string is a ReactNode too, no breaking change is introduced.

## Conclusion

Let's go back to the question I asked earlier - why should we use templates? What's the point of introducing a separation between JS and markup? What is it that web developers enjoy about templates?

Again, I think the answer comes down to a feeling of organization that templates provide. We have a very specific way to do everything from conditional rendering to slots, which can make the code easier to read for many developers.

Ultimately, both approaches are just as viable. I think there's no right or wrong choice. It's a matter of personal preference.
