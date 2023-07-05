import { createContext } from 'react';

// Step 1 of Context API: create context with any data or even null inside
// Have the context to have any data (optional)
export const PageContext = createContext(); // you can have some data inside
// console.log(PageContext);

// Step 2 of Context API: refer App.js
// Step 3 of Context API: refer ContactUsPage.js
