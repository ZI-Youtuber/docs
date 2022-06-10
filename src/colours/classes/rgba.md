---
{
  layout: "layouts/post.njk",
  title: "RGBA",
  description: "The RGBA class represents a colour made from red, green, and blue parameters. An optional alpha parameter changes the color's transparency.",
  eleventyNavigation: {
    key: "RGBA",
    parent: "Classes"
  }
}
---

## Syntax
```js
new RGBA(red, green, blue[, alpha])
new RGBA(anotherColour)
```

## Overview
The `RGBA` class represents a colour made from red, green, and blue parameters. An optional alpha parameter changes the color's transparency.

## Parameters (vector notation)
### `red`
Number between 0 and 255.

### `green`
Number between 0 and 255.

### `blue`
Number between 0 and 255.

### `alpha` <span class="tag">Optional</span>
Number between 0 and 1.

## Parameters (class notation)
### `anotherColour`
Another colour class.

## Properties
### `RGBA.red`
Returns the amount of red.

### `RGBA.green`
Returns the amount of green.

### `RGBA.blue`
Returns the amount of blue.

### `RGBA.alpha`
Returns the amount of transparency.

### `RGBA.value`
Returns the RGBA colour in CSS notation.