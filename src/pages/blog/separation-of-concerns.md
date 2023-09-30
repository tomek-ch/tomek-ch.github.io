---
layout: "../../layouts/BlogPostLayout.astro"
title: "Separation of concerns is not what you think it is"
description: "A different perspective on separation of concerns and CSS."
pubDate: "Dec 16 2022"
tags:
  - "Frontend"
  - "CSS"
  - "React"
---

When talking about separation of concerns in regards to front-end web development, people often think of separating CSS from HTML. But does this approach separate anything at all?

## Separating HTML and CSS

The idea is that our markup and styles should be independent. HTML should only be concerned with content and CSS should only be concerned with its presentation. We can achieve this by not using class names that reflect the appearance of the styled element, for example `text-black`. But does this kind of separation even make sense?

I mean, are HTML and CSS really independent? Some people would argue that they are, and that changing the design of a website is simply a matter of swapping the stylesheet. I disagree. How often do you take an existing website and implement a completely new design without ever touching the HTML? I don't think I've ever done that. One of the reasons for it is that the styles are inherently coupled with the structure of the markup.

Let's take a look at an example. Imagine that we want to create a simple card like this:

![Example card component](/card-example.png)

We could implement the HTML like this:

```html
<div class="card">
  <h2 class="title">Hello world</h2>
  <p class="desc">Lorem ipsum...</p>
</div>
```

And write CSS this way:

```css
.card {
  ...;
}
.title {
  ...;
}
.desc {
  ...;
}
```

But there's an obvious issue with this approach. We will most likely have more than one kind of title, description and card on our website. One way to solve this problem is by using more specific class names. If we implemented the BEM methodology, we would end up with classes like `my-card`, `my-card__title` and `my-card__desc`. Here's the funny part - the class names mimic the HTML structure exactly. Doesn't matter if we use BEM, our own convention, or selectors like `.my-card h2`.

In this small example it's not a big deal, but in an actual project, things get messy. Very often, we need to add an additional wrapper without any semantic meaning, just for styling purposes. Sometimes styles break because an element is not inside the correct parent. When we make changes to our website, we need to keep track of the relationship between the markup and styles, and ensure that the CSS selectors stay consistent with the HTML structure. That's a headache. Where is the supposed separation of concerns?

## What Separation of Concerns Really Means

The Wikipedia definition of [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) says it's a design principle for separating a computer program into distinct sections. It's up to the programmer to decide how they separate their program. However, there is another important bit in the definition:

> A program that embodies SoC well is called a modular program. Modularity, and hence separation of concerns, is achieved by encapsulating information inside a section of code that has a well-defined interface.

Because of how interconnected HTML and CSS are by their nature, I don't think that trying to separate them is a viable approach. It's difficult to create a well-defined interface for a stylesheet, because of how much it depends on the HTML structure. We can't really encapsulate much information this way.

So how can we apply separation of concerns to front-end web development? Instead of trying to separate our website into just three modules - HTML, CSS and JS, we should focus on separating it into many smaller modules representing UI elements like header, button or card. The above example could be written like this:

```jsx
<Card title="Hello world" desc="Lorem ipsum..." />
```

This component encapsulates both the information about styling and the structure of the markup. We have a clearly defined interface - the card accepts a title and a description. The separation here is not between the CSS and HTML, it's between the card and other components on our website. We don't even know if it's using inline styles or semantic class names, yet it checks all the boxes of what separation of concerns should be.

## Modular CSS

Of course, a component is encapsulated only if it doesn't affect the rest of the website in unpredictable ways. This means that we can't use global CSS to style it. One way to solve this problem is by using CSS modules. They allow us to write our styles the same way we normally would, but without affecting the global scope.

But is writing our CSS and HTML in two different files necessary? We're still dealing with the same interconnected elements as before, only at a smaller scale, which makes it manageable. Why should we try to separate things that are tightly coupled by their nature?

I think we shouldn't. And we don't have to, thanks to an approach called utility CSS. One framework implementing this approach is Tailwind CSS. It gives us the full power of CSS, but allows us to write styles directly in our markup, just like - horror of horrors - inline styles.

Why is it good? There are many reasons - we don't need to name everything, jump between files and constantly keep track of the relationship between our stylesheet and HTML. But this article is about separation of concerns, so how does Tailwind compare against CSS modules in this regard? Technically, we could achieve a similar degree of modularity with both.

However, there is an important difference between the two approaches. With Tailwind, a well separated component structure is the only sane way to write our code. After getting rid of traditional semantic CSS classes, components are our only means of code reuse left. When keeping the styles and HTML in a single file, we can't apply one class to multiple different elements across the website, which prevents hard to discover coupling and overall mess. If some styles deserve their own component, we have to create one, otherwise we can easily style things with classes like `ml-2`, no need to create a new stylesheet and come up with contrived class names.

Personally, I've found that Tailwind aided me in structuring my projects way better than I was doing it with CSS modules. Previously, if I needed a button, I would create a simple `<button></button>` element, then add an imported class name to it. Because creating and importing new stylesheets was tedious, I would sometimes mix class names from different modules, which was messy.

On the other hand, when using Tailwind, if I need a button, I need to create a `<Button></Button>` component. This encourages me to create powerful modules that encapsulate not only styles, but also logic and markup. For example, I might add a loading state to my button. Or, if I'm using a card, I don't need to worry about the underlying structure - the h2 and p elements, because they're encapsulated inside the component. All I care about is providing a title and a description.

Of course, with some more work and discipline this kind of structure is possible using CSS modules too. What I'm emphasizing here is that we should focus on separating our websites into components, not HTML and CSS. Whether we're using semantic classes or inline styles can be treated as an implementation detail, as long as our project is structured into small standalone modules.

I think we should redefine what separation of concerns means in front-end web development. We shouldn't dismiss utility CSS just because it violates former best practices.
