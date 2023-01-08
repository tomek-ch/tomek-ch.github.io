---
order: 2
layout: "../../layouts/ProjectLayout.astro"
title: "Royale Calculator"
description: "A tool for the players of the mobile game Clash Royale to help them make smarter upgrades."
heroImg: "/projects/royale-calculator/hero.png"
githubLink: "https://github.com/tomek-ch/royale-calculator"
liveLink: "https://royale-calculator.vercel.app"
tech:
  - "TypeScript"
  - "React"
  - "Next.js"
  - "Tailwind CSS"
---

## Static site generation

I chose Next.js for this projects because of its SSG capability. I use it to pull card data from the Supercell API at build time. This way the amount of network requests at runtime is reduced to a minimum so that the app can load fast.

![List of cards in the app UI](/projects/royale-calculator/cards.png)

## Introductory tutorial

I wanted to make it as easy as possible for new users to get started using the app, so I implemented a quick tutorial covering the basic features.

![App tutorial](/projects/royale-calculator/tutorial.png)

## Custom components

Each component, custom hook and utility function in this app was written from scratch. This gave me a lot of control and allowed me to tailor the app to the project’s needs.

```ts
import { RefObject } from "react";
import { useEventListener } from "./useEventListener";

export const useClickOutside = (
  refs: RefObject<(HTMLElement | null) | (HTMLElement | null)[]>[],
  onClickOutside: () => void,
  enabled: boolean
) => {
  const handleClickOutside = (e: Event) => {
    const isOutsideItems = refs
      .flatMap(({ current }) => current)
      .every((element) => !element?.contains(e.target as Node));
    if (isOutsideItems) {
      onClickOutside();
    }
  };
  useEventListener(document, "click", handleClickOutside, enabled, refs);
};
```

This is a custom hook I wrote to run a function when the user clicks outside an item (or multiple items). I offloaded the actual attachment of the listener to another custom hook. This kind of structure allows me to create a modular application and minimize code duplication.

## Bulk editing

![Modal for making bulk edits in the app](/projects/royale-calculator/bulk-edit.png)

This was one of the hardest parts to implement because of the sheer number of states that the app could be in. I got it working but the amount of bugs and difficulty expanding the functionality despite some refactoring forced me to completely rethink how this part should be written.

I soon realized that I tried to keep track of too much state which made everything way harder than it needed to be. The solution was to keep track of only one changing variable and compute the rest of state based on it. This allowed me easily reason about the app and keep it in a proper state without thinking about every possible interaction.

## Backend

I implemented an endpoint to allow the users to sync the app with their game accounts through the Supercell API.

I used Next.js API routes. This allowed me for easy deployment on Vercel as well as code reuse across front-end and back-end.
