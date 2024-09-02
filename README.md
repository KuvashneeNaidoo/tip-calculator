# Tip Calculator

Responsive tip calculator built using React. Users have the ability to calculate the correct tip and total cost of the bill per person.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Tip Calculator](https://github.com/user-attachments/assets/553a3a77-e9de-4ef4-9bc5-1c28045ef149)

### Links

- Solution URL: (https://github.com/KuvashneeNaidoo/tip-calculator)
- Live Site URL: (https://frontend-tipcalculator.netlify.app/)

## My process

### Built with

- HTML
- CSS custom properties
- [React](https://reactjs.org/) - JS library

### What I learned

One of the most challenging parts of creating this calculator was ensuring that all elements were styled correctly and responsive to different screen sizes. I made the calculator responsive through a combination of Flexbox for centering, a maximum container width, CSS Grid for button layout and a media query to add a breakpoint in order to adjust the layout. I am also glad that I used React as it helped to manage the state and rendering of the calculations, allowing for efficient updates to the UI.

```css
/* Incomplete values - reset button */
.reset-btn.incomplete {
  background-color: hsl(186, 14%, 43%);
  color: hsl(183, 100%, 15%);
}

/* Completed values - reset button */
.reset-btn.complete {
  background-color: hsl(172, 67%, 45%);
  color: hsl(183, 100%, 15%);
}
```

```js
  // Reset input values and state
  const handleReset = () => {
    setBillAmount("");
    setPeople("");
    setTipPercentage("");
    setCustomTip("");
    setSelectedTip(null);
    setShowAlert(false);
  };

```

### Continued development

I would like use Tailwind CSS to apply styles directly in the JSX using utility classes. This is what I aim to learn soon.

### Useful resources

- [React Bootstrap Grid System]([https://www.example.com](https://react-bootstrap.netlify.app/docs/layout/grid)) - This helped me to create the layout of the page. I really liked the neat structure I am able to create from using the Container, Row and Col.
- [React's UseState Hook]([https://www.example.com](https://react.dev/reference/react/useState)) - This is resource provides examples of using the useState hook to help manage the state of variables.

## Author

- Website - [Kuvashnee Naidoo](https://github.com/KuvashneeNaidoo)
- Frontend Mentor - [@KuvashneeNaidoo](https://www.frontendmentor.io/profile/KuvashneeNaidoo)
