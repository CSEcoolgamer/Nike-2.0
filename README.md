
# Nike 2.0

Nike 2.0 is a modern e-commerce platform built with Next.js, Tailwind CSS, Strapi CMS, Redux, and Stripe Payment Gateway integration. It leverages the latest features of Next.js for server-side rendering (SSR), static site generation (SSG), dynamic routing, and more. This project provides a complete cart functionality with add, update, and delete actions, ensuring a seamless shopping experience for users.

## Features

- **Next.js**: Utilizes the latest features of Next.js for server-side rendering, static site generation, and dynamic routing.
- **Tailwind CSS**: Enables rapid UI building with a mobile-first responsive approach, ensuring a sleek and modern design.
- **Functional Programming**: Implements functional programming principles through utility methods for better code organization and maintainability.
- **Strapi CMS**: Utilizes Strapi as a headless CMS to manage content and provide a scalable backend solution.
- **Redux**: Implements Redux for state management, offering a centralized store for cart functionality and ensuring consistency across components.
- **Stripe Payment Gateway Integration**: Integrates Stripe payment gateway for secure and seamless payment processing.
- **Project Deployment**: Provides guidelines for deploying both frontend and backend components for seamless deployment.

## Core Features of Next.js

- Server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.
- Dynamic routing for creating dynamic pages based on data.

## How to Fetch Data from Strapi API's in Next.js Application

To fetch data from Strapi API's in your Next.js application, follow these steps:
1. Install `axios` or use `fetch` API to make HTTP requests.
2. Make API requests to Strapi endpoints to fetch data.
3. Handle the response data and integrate it into your Next.js application.

## Redux Fundamentals and Best Usage for Cart Functionality

Redux is used for managing state in Nike 2.0, particularly for cart functionality. Here's how it's used:
- Create Redux actions for adding, updating, and deleting items from the cart.
- Define Redux reducers to handle these actions and update the cart state accordingly.
- Connect Redux store to components using `connect` or `useSelector` and `useDispatch` hooks.
- Ensure to use selectors for efficient access to specific parts of the state.

## Cart Functionality

Nike 2.0 provides complete cart functionality, including:
- Adding items to the cart.
- Updating quantities of items in the cart.
- Deleting items from the cart.
- Displaying the total price of items in the cart.

## Stripe Payment Gateway Integration

Nike 2.0 integrates Stripe payment gateway for secure and seamless payment processing. Users can securely checkout and make payments using their preferred payment method.

## Project Deployment

For project deployment:
- Deploy the frontend using "Vercel" hosting service that supports Next.js applications.
- Deploy the Strapi backend to a hosting service "RENDER".


 ## Run the development servers:
   ```bash
   # Frontend
   cd ../Frontend
   npm run dev

   # Backend
   cd ../Backend
   npm run develop
   ```



 
