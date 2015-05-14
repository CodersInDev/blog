# Mobile First and Responsive Design

Create the layout for the mobile first and improve this layout for the desktop by adding more elements and css. Responsive design allow us to adapt the layout with media queries and viewport. So the two concepts, mobile first and responsive design are complementary.

A small exemple: Here we change the color if the width of the screen is bigger than 600px

    body {
      background: red;
    }

    // This applies from 600px onwards
    @media (min-width: 600px) {
      body {
         background: green;
      }
    }

    

# References
- http://www.zell-weekeat.com/how-to-write-mobile-first-css/
- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
- http://getbootstrap.com/css/
- http://www.w3schools.com/css/css_boxmodel.asp
