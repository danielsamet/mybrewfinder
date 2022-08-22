# mybrewfinder

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Overview

This was a quick exercise to create a React app that provides an interactive map for breweries. It's intended use is to
search for them by city. There are plenty of ways to improve this application, but this is where I got up to within 4
hours of development. Enjoy :)

## Getting Started

### `yarn start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

## Design Decisions & Notes

Here is a short list of some decisions made for this project:

- I decided to offer a 'by-city' interface as it easily matched with the brewery API's endpoints
- I used [chakra-ui](https://chakra-ui.com/) to help build the UI really quickly and easily
- I made use of TypeScript to help ensure code stability (and enable really quick refactoring)
- I added a utility function that calculates the central point of a number of breweries to help center the map across
  the breweries

# Credit

Thank you to [openbrewerydb](https://www.openbrewerydb.org/) for their brewery API.

Thank you to [pigeon-maps](https://pigeon-maps.js.org) for the (super-fast and lightweight) map library.
