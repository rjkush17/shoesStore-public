# Stylish Shoes Store

Welcome to "Stylish Shoes Store" - a MERN stack project aimed at learning web development through building an online shoe store. This project showcases a collection of stylish footwear and utilizes MongoDB, Express.js, React, and Node.js to offer a full-featured e-commerce experience.

## Introduction

This project is both a learning journey for web development enthusiasts and a platform for shoe lovers. By combining practical e-commerce functionalities with a deep dive into the MERN stack, "Stylish Shoes Store" serves as an ideal project for understanding the nuances of building web applications.

Explore the world of stylish footwear and the technologies behind this online store. Let's embark on this learning adventure together.


## Demo

You can see live demo - https://stylishshoesstore.netlify.app/

## Tech Stack

This project is built with the following technologies:

- [Vite](https://vitejs.dev/) - A modern, fast build tool for React applications, providing an optimized development experience.
- [React](https://reactjs.org/) - A powerful JavaScript library for building interactive user interfaces, ensuring a smooth and dynamic experience for users.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs, allowing for efficient styling without leaving the HTML.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database that offers flexibility and scalability for the application's data storage needs.
- [Express.js](https://expressjs.com/) - A web application framework for Node.js, designed for building web applications and APIs with ease and efficiency.

## Deployment

- **Backend (Server)**: Deployed at [Vercel](https://vercel.com/).
- **Frontend (Client)**: Deployed at [Netlify](https://www.netlify.com/).

## Screenshots

Below are some screenshots to give you a glimpse of what "Stylish Shoes Store" looks like in action.

#### Home Page and Header
![Home Page](/Screenshots/home1.png)
![Home Page](/Screenshots/home2.png)
#### Footer
![Footer Page](/Screenshots/footer.png)
#### Shop Page
![Shop Page](/Screenshots/shop.png)
#### Cart
![Cart Model](/Screenshots/cart.png)
#### Login
![Login Model](/Screenshots/login.png)
#### Seachbar Model
![SearchBar Model](/Screenshots/searchbar.png)
#### Product Page
![Product Page](/Screenshots/productpage.png)
#### prachase Page
![Home Page](/Screenshots/viewCart.png)

## Getting Started

Follow these steps to set up the project on your local machine.

### Setting Up the Client & Server

1. Navigate to the `client/src/assets/` directory.
2. Open or create the `baseURL.js` file.
3. Enter your backend API link in the following format:
   ```javascript
   export const baseURL = "ENTER YOUR API LINK HERE";

Replace "ENTER YOUR API LINK HERE" with your actual backend API URL.

Navigate to the server/ directory of your project.

Create a .env file to store your environment variables.

Add the following variables to the .env file:

1. PORT - The port number for your server (e.g., 3000).
2. DATABASE - Your MongoDB database URL.
3. JWTKEY - Your secret key for JSON Web Tokens (JWT).
For example:

 ```
PORT = 3000;
DATABASE  =mongodb://your-database-url
JWTKEY = yourSecretKey
```

### Running the Client

Change Directory to Client: Navigate to the client directory of your project by running the following command:

``` 
cd client 
```
Install Dependencies: Install all necessary npm packages by running:
```
npm install

```
Start the Development Server: Launch the development server with:

```
npm run dev
```
Open in Browser: If the development server allows, pressing o in the terminal (after running npm run dev) will automatically open the project in your default web browser. This step depends on the specific setup of your development server. If your setup uses Vite, as mentioned, Vite supports this feature and should open your project in the browser.

### Running the Server

Change Directory to Server: First, navigate to the server directory within your project by executing:

```
cd server
```

Install Dependencies: Install all required npm packages by running:

```
npm install
```
Running the Server with Nodemon for Development: If you prefer to use nodemon for automatic restarting of your server upon file changes, run:

```
npm run server
```
Ensure your app is operational and verify that shoes data in the database matches the "project_model.js" schema.

## Libraries and Dependencies

The project utilizes a range of libraries and dependencies for both the backend and frontend to enhance functionality and performance.

### Backend Libraries

- `bcrypt`: For hashing and securing passwords.
- `colors`: To add color to console logs, making them more readable.
- `cors`: To enable CORS (Cross-Origin Resource Sharing) with various options.
- `dotenv`: For loading environment variables from a `.env` file into `process.env`.
- `express`: A web application framework for creating server-side applications.
- `jsonwebtoken`: For generating and verifying JSON Web Tokens for secure authentication.
- `mongoose`: An ODM (Object Document Mapping) library for MongoDB and Node.js.
- `morgan`: An HTTP request logger middleware for node.js.
- `nodemon`: A utility that automatically restarts node application when file changes in the directory are detected (used in development).
- `zod`: For data parsing and validation with TypeScript support.

### Frontend Libraries

- `redux toolkit`: A toolset for efficient Redux development.
- `aos`: Animate On Scroll Library for animating elements as you scroll down, and up if you scroll back.
- `jwt-decode`: A small browser library that helps decoding JWTs token which are Base64Url encoded.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.
- `react-icons`: Utilizes ES6 imports that allow you to include only the icons your project is using.
- `react-parallax`: A React component for creating parallax scroll effects.
- `react-router-dom`: DOM bindings for React Router.
- `react-slick`: A carousel component built with React.

This comprehensive set of tools and libraries is chosen to create a robust, scalable, and efficient web application. 

## Features

"Stylish Shoes Store" is equipped with a suite of features aimed at providing an engaging and efficient online shopping experience, built using modern web technologies.

- **Authentication System**: Secure authentication and purchase functionalities using JWT, ensuring user data protection.
- **State Management with React Context & Redux**: Utilizes React's Context API for global state management and React Redux for managing cart operations, ensuring a smooth and consistent user experience.
- **Dynamic Loading with React Code Splitting**: Implements code splitting and lazy loading, optimizing performance and enhancing the user experience with faster page loads.
- **Interactive Modals**: Offers modals for key user interactions, including login, cart overview, profile management, and logout options.
- **Shop Page with Dynamic Filtering**: Features a dynamic shop page that categorizes products based on URL parameters (e.g., "men", "women", "sales") and includes a comprehensive filter system for sorting by price, name, and categories.
- **Smooth Animations with React AOS**: Utilizes React AOS for subtle scroll animations, adding elegance and dynamism to the browsing experience.
- **Single-Page Application**: Designed as a one-page application using React for seamless navigation without page reloads.
- **Responsive Design**: Achieves a responsive layout that ensures the site is user-friendly across all device types and screen sizes.
- **Additional Content Pages**: Incorporates search functionality, a blog section, and an about page to provide valuable content and enhance user engagement.
- **Homepage Features**:
  - **Slider**: A visually appealing slider to showcase featured products and offers.
  - **Parallax Effect**: Implements a parallax scrolling effect for an immersive visual experience.
  - **Trending Products Section**: Highlights trending products, encouraging discovery and exploration of popular items.

Together, these features make "Stylish Shoes Store" a comprehensive e-commerce experience that showcases the power of the MERN stack and modern frontend techniques.

## End 
"Stylish Shoes Store" blends modern web technologies for an innovative, user-centric shopping experience. Explore, contribute, and enjoy!

