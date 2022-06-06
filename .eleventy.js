const { DateTime } = require("luxon");
const fs = require("fs");

module.exports = function(eleventyConfig) {
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
    return DateTime.fromJSDate(dateObj, { zone: "America/New_York" }).toFormat("dd LLLL yyyy");
  });
  
  eleventyConfig.addCollection("community", (collection) => {
    const coll = collection.getFilteredByTag("community").reverse();
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });
  
  eleventyConfig.addCollection("accounts", (collection) => {
    const coll = collection.getFilteredByTag("accounts").reverse();
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });
  
  eleventyConfig.addCollection("jumblejot", (collection) => {
    const coll = collection.getFilteredByTag("jumblejot").reverse();
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });
  
  eleventyConfig.addCollection("drawlet", (collection) => {
    const coll = collection.getFilteredByTag("drawlet").reverse();
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });
  
  eleventyConfig.addCollection("harbooru", (collection) => {
    const coll = collection.getFilteredByTag("harbooru").reverse();
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  }
};