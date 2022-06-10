---
{
  layout: "layouts/post.njk",
  title: "Unified Website Layout",
  description: "The Unified Website Layout (UWSL) is a design language made to unify the websites of Sargent Coding and its projects.",
  eleventyNavigation: {
    key: "Unified Website Layout",
    parent: "Design"
  }
}
---

The Unified Website Layout (UWSL) is a design language made to unify the websites of Sargent Coding and its projects. The UWSL allows for the unifaction of the website designing process, making it easy to update the design language across sites easily.

The Unified Website Layout is only intended for internal use.

## Navigation bar
The navigation bar is a section at the top of a page that contains actions and/or navigation links. The navigation bar uses the `<nav>` tag.

### Logo area
The logo area contains the logo of the site. If the site doesn't have its own logo, the logo area should include the site's parent's logo along with text after it. For example, since Sargent Coding's documentation doesn't have its own logo, the logo area should include the Sargent Coding logo followed by the text "Docs".

### Links area
The links area contains links. If two or more links cannot be added to the links area, the links area will be blank. Having a single link in the links area is not allowed.

### Accounts area
The accounts area has two layouts. If the user is logged in, there should only be a profile picture. If there is no user, the accounts area should have a log in link and then a create account button.

## Header
The header is a space after the navigation bar that contains introductory content, generally a header and a paragraph, and maybe even a button. The header uses the very fitting `<header>` tag.

## Hero section
A hero section is a section containing the navigation bar, header and/or other content that has a different background then normal content. If a hero section were to have the same background as the content of the page, the hero section is not needed.

## Content
The content of a page can use either of two tags:
- The `<main>` tag, if there is only one unified section of content
- The `<section>` tag, when there are two or more content sections in a page.

## Footer
The footer includes information about Sargent Coding. The content of the footer cannot be changed.