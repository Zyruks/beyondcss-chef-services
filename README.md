# .beyond{CSS} Project 4

This is module 3 Project from BeyondCSS

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)

  - [Difference between my code](#difference-between-my-code-and-kevin)
  - [Build With](#build-with)

## Screenshots

![Desktop Screenshot](./screenshots/desktop.png)

## Links

- [Live Demo](https://beyondcss-chef-services-zyruks.vercel.app/)
- [Github](https://github.com/Zyruks/beyondcss-chef-services)

### Build with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CUBE-CSS
- BEM naming convention (more or less)
- Vanilla Javascript
- Grid
- Media Queries
- SASS
- Tokenization
- Vite
- pnpm

## Difference between my code and Kevin

### Font-Size

How I use font-sizes <br>
Basically this is how Devin did it

```scss
$font-sizes: (
 900: 5rem,
 800: 3.75rem,
 600: 1.6875rem,
 500: 1.3125rem,
 400: 1.125rem,
 300: 1rem,
);
```

Later on he change 900,800 and 600 to a fluid type of font with Clamp

My code

```scss
$font-sizes: (
  "classic": (
    300: rem(16),
    400: rem(18),
    500: rem(21),
    600: rem(27),
    700: rem(32),
    800: rem(60),
    900: rem(80),
  ),
  "fluid": (
    600: clamp(1.4rem, 0.5rem + 3vw, 1.6875rem),
    800: clamp(2.5rem, 0.5rem + 7vw, 3.75rem),
    900: clamp(2.5rem, 0.5rem + 10vw, 5rem),
  ),
);
```

**Then I create custom properties and utilities classes**

```scss
:root {
 @each $font-family, $value in $font-families {
    --ff-#{$font-family}: "#{$value}", serif;
  }
}

---- Output ----
  --fs-300: 1rem;
  --fs-400: 1.125rem;
  --fs-500: 1.3125rem;
  --fs-600: 1.6875rem;
  --fs-700: 2rem;
  --fs-800: 3.75rem;
  --fs-900: 5rem;
  --fluid-fs-600: clamp(1.4rem, 0.5rem + 3vw, 1.6875rem);
  --fluid-fs-800: clamp(2.5rem, 0.5rem + 7vw, 3.75rem);
  --fluid-fs-900: clamp(2.5rem, 0.5rem + 10vw, 5rem);
```

**_Utility Classes_**

if the font-size is equal to "classic" (Gonna change on future project to static) then create a class with name .fs-#{$font-name}

- $font-name is 400, 500, 600, etc;

else create a selector with data- attribute
**.fs-600[data-type="fluid"]{} **

- $font-size is "classic or "fluid (I'm gonna change font-size name to font-type)

and inside this selector is going to be custom properties with fluid-font-size

This way i can use the data- attribute to convert my static font size to a fluid font-size.

```scss
@each $font-size, $sizes-map in $font-sizes {
  @each $size-name, $size-value in $sizes-map {
    @if $font-size == "classic" {
      .fs-#{$size-name} {
        font-size: var(--fs-#{$size-name});

        @if ($size-name > 600) {
          line-height: var(--lh-400);
        }
      }
    } @else {
      .fs-#{$size-name}[data-type="#{$font-size}"] {
        font-size: var(--#{$font-size}-fs-#{$size-name});
         @if ($size-name > 600) {
          line-height: var(--lh-400);
        }
      }
    }
  }
}

--- output ----

.fs-300 {
  font-size: var(--fs-300);
}

.fs-400 {
  font-size: var(--fs-400);
}

.fs-700 {
  font-size: var(--fs-700);
  line-height: var(--lh-400);
}

.fs-800 {
  font-size: var(--fs-800);
  line-height: var(--lh-400);
}

.fs-900 {
  font-size: var(--fs-900);
  line-height: var(--lh-400);
}

.fs-600[data-type=fluid] {
  font-size: var(--fluid-fs-600);
}

.fs-800[data-type=fluid] {
  font-size: var(--fluid-fs-800);
  line-height: var(--lh-400);
}

.fs-900[data-type=fluid] {
  font-size: var(--fluid-fs-900);
  line-height: var(--lh-400);
}

```

### Javascript Vanilla

Create a function that check if the section-header have a child with a **P** tag
If the section-header doesn't have the child node add a class of margin-block-end-36

else if the section-header have a child node add a class of margin-block-end-90

Then create a if statement to use this function, if the browser map is not null (Chrome base browser return null to this array) and browser key 0 (browser[0]) return "Firefox" execute the function

if one of this conditions is not valid just console.log Browser is not Firefox

Code:

```js
"use strict";
const browser = navigator.userAgent.match(/firefox|fxiso/i);
const sectionHeader = document.querySelectorAll(".js-section-header");

/**
 * If the section header has a paragraph, add a margin of 36px to the bottom of the header. If the
 * section header does not have a paragraph, add a margin of 90px to the bottom of the header
 */
function headerMargin() {
  for (let header of sectionHeader) {
    if (header.getElementsByTagName("p").length !== 0) {
      header.classList.add("margin-block-end-36");
    } else if (header.getElementsByTagName("p").length === 0) {
      header.classList.add("margin-block-end-90");
    }
  }
}

/* This is checking to see if the browser is Firefox. If it is, it will run the headerMargin function.
If it is not, it will log "Browser is working properly" to the console. */
if (browser !== null && browser["0"] === "Firefox") {
  headerMargin();
} else {
  console.log("Browser is not Firefox");
}

```

I got more changes on my code but they are so small that I am not going to explain them in the readme.

If you read everything first Thanks for taking your time
If you need any explanation just let me know ;).

[Zyruks](https://www.linkedin.com/in/samuel-llibre-santos-290101229/)
