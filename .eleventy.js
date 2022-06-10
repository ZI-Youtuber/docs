const { DateTime } = require("luxon");
const fs = require("fs");
const navigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(navigationPlugin); 
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");
  
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromISO(dateObj, { zone: "utc" }).toFormat("dd LLLL yyyy")
  });

  eleventyConfig.addFilter("amogus", value => {
    return value + value
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  }
};