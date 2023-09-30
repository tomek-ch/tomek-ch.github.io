---
order: 1
layout: "../../layouts/ProjectLayout.astro"
title: "Mealso"
description: "Mobile app to simplify meal planning and grocery shopping. Work in progress."
heroImg: "/projects/mealso/hero.png"
githubLink: "https://github.com/tomek-ch/mealso-website"
liveLink: "https://mealso-website.vercel.app"
linkText: "Website"
tech:
  - "TypeScript"
  - "React"
  - "Astro"
  - "Tailwind CSS"
  - "React Native"
---

## How I made the landing page

I'm using [Astro](https://astro.build/) for the Mealso website, so that I can build it using React components, but prevent loading any unnecessary JavaScript on the client-side. This ensures a small bundle size and fast page loads.

To handle the modal state, I used [nanostores](https://github.com/nanostores/nanostores), so that I can share the state between components, while still taking advantage of Astro's islands architecture.

I also used [Headless UI](https://headlessui.com/) for the modal component itself to make it accessible.

## The mobile app

I'll build the mobile app with React Native and Expo for a fast cross-platform development process. Mealso is going to be primarily an offline app, so I'm planning to use a local SQLite database.

## What I’m planning for this project

There are many features I could build, but for the MVP, I want to implement meals, ingredients, and shopping lists. Then I want to add cloud sync.

After that, I could build a Mealso web app, implement macronutrient info, grocery costs, expiration date reminders, or maybe even add an AI-powered meal plan builder.
