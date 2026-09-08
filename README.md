# Qualtrics CSS spike

## WHY
We want to see if using a CSS for Qualtrics surveys gives us a higher-fidelity result, leading to a better user experience. As a start point, we need to understand everything that is configurable  in Qualtrics. To do this, we will set up a survey with all possible configuration options displayed and then get the HTML, which will allow for the CSS to be designed.

## WHAT
Set up a Qualtrics survey with every possible configuration option in place

Get the HTML for the survey to allow CSS design

## DEFINITION OF DONE

- [X] HTML from Qualtrics
- [ ] Playback to design and product for next steps  

## NOTES

- I have not extracted any of the JavaScript on these pages.
- I have extracted the colour palatte (css-variables.css) and the stylesheet (qualtrics-stylesheet.css) that Qualtrics uses to render the survey in 'Preview' mode. This may or may not be the same as the ones used when actually rendered on-device but accessing those is prooving tricky.
- Because Qualtrics automatically applies the above styles and colours. I've created reset and light/dark mode stylesheets to put these back to sensible defaults.
- I have also created a blank stylesheet, this can be used as a starting block for a new 'desired' version.

