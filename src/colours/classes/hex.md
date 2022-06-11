---
{
  layout: "layouts/post.njk",
  title: "HEX",
  description: "The HEX class represents a hexadecimal notation for RGBA components (red, green, blue[, alpha]) written as hexadecimal numbers.",
  eleventyNavigation: {
    key: "colours-classes-hex",
    parent: "colours-classes",
    title: "HEX"
  }
}
---

## Syntax
```js
new HEX(colour)
```

## Overview
The `HEX` class represents a hexadecimal notation for RGBA components (red, green, blue[, alpha]) written as hexadecimal numbers.

## Parameters
### `colour`
A string containing a hex colour or a colour class.

## Properties
### `HEX.value`
Returns the hex colour in CSS notation.