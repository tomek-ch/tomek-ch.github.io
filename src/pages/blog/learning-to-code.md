---
layout: "../../layouts/BlogPostLayout.astro"
title: "Smart Variants in TypeScript"
description: "How to write DRY code with TypeScript union types"
pubDate: "Jan 26 2023"
tags:
  - "TypeScript"
---

Whenever we want to represent multiple variants of something in our app, we can use union types.

Let’s say that we have a button component with different styles for different variants. We can define the prop type like this:

```ts
type Variant = "primary" | "secondary";
```

When we create a variant, we probably want to have some conditional logic related to it.

In the button component example, we might want to have different styles for each variant.

If we’re using Tailwind, we can, for example, assign different class names to an object’s keys to later apply them to our button:

```ts
const styles = {
  primary: "bg-blue-600 text-white",
  secondary: "border border-slate-600",
};
```

## Make It Smart

There’s an implicit dependency between the union type and the object’s keys.

Every time we add or remove a variant, we have to do it in two places.

We can make our code easier to manage while keeping it fully type-safe by deriving the type directly from the object’s keys:

```ts
type Variant = keyof typeof styles;
```

## More Use Cases

Variants are not limited to UI components. They’re everywhere.

We might, for example, have a type representing the status of a post:

```ts
type PostStatus = "pending" | "accepted" | "rejected";
```

While the names in this example are pretty clear, we might often want to display different names to the user.

One reason for this would be internationalization:

```ts
const postStatuses = {
  pending: translate("Pending"),
  accepted: translate("Accepted"),
  rejected: translate("Rejected"),
};

type PostStatus = keyof typeof postStatuses;
```

## Objects are Flexible

We can use objects like the ones I showed earlier for more than just accessing values by key.

We can create completely new structures based on them.

This way we only need to update the variant in one place, and we can use it everywhere. We can, for example, create a select field based on our object:

```tsx
<select>
  {Object.entries(postStatuses).map(([status, text]) => (
    <option value={status} key={status}>
      {text}
    </option>
  ))}
</select>
```
