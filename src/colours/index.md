---
{
  layout: "layouts/collection.njk",
  title: "Colours",
  eleventyNavigation: {
    key: "colours",
    title: "Colours"
  }
}
---

You can use the library via JSDelivr at [https://cdn.jsdelivr.net/gh/sargent-coding/colours/colours.js](https://cdn.jsdelivr.net/gh/sargent-coding/colours/colours.js).

## Examples
### Converting colours
You can convert colours by making a new colour with the old colour as the parameter. The colour classes are smart and can differentiate colours (1 parameter) from the typical parameters.
```js
new RGBA(new HEX("#1177ff")).value // Returns rgba(17, 119, 255, 1)
```

## Credits
Made by Aetinx.

[Sargent Coding Colours](https://github.com/sargent-coding/colours/) by [Sargent Coding](https://saco.ml) is licensed under [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/)