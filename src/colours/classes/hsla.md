---
{
  layout: "layouts/post.njk",
  title: "HSLA",
  description: "The HSLA class represents a colour made from hue, saturation, and lightness parameters. An optional alpha parameter changes the color's transparency.
",
  eleventyNavigation: {
    key: "colours-classes-hsla",
    parent: "colours-classes",
    title: "HSLA"
  }
}
---

## Syntax
```js
new HSLA(hue, saturation, lightness[, alpha])
new HSLA(anotherColour)
```

## Overview
The `HSLA` class represents a colour made from hue, saturation, and lightness parameters. An optional alpha parameter changes the color's transparency.


## Parameters (vector notation)
### `hue`
Number between 0 and 360.

### `green`
Number between 0 and 360.

### `blue`
Number between 0 and 360.

### `alpha` <span class="chip">Optional</span>
Number between 0 and 1.

## Parameters (class notation)
### `anotherColour`
Another colour class.

## Properties
### `HSLA.hue`
Returns the hue of the colour.

### `HSLA.saturation`
Returns the amount of saturation.

### `HSLA.lightness`
Returns the amount of lightness.

### `HSLA.alpha`
Returns the amount of transparency.

### `HSLA.value`
Returns the HSLA colour in CSS notation.