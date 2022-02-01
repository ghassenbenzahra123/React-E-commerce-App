# React E-commerce App (Redux, Styled Components, JWT Authen ,Stripe.js)

Shoppy is a MERN stack eCommerce App. 

Built with:
* Node.js 
* React 
* Redux
* Express
* MongoDB
* Axios




<div style="display: flex;">
    <img src="https://i.ibb.co/DKkyCz6/HomePage.gif"/>
    <img src="https://i.ibb.co/56yn33J/eeee.gif"/>
      <img src="https://i.ibb.co/nM31gnY/ezgif-7-4a68002e55.gif"/>

<div>

## Backend Server
Server-side uses JSON Web Token (JWT) to access REST API.

<a href="https://github.com/ghassenbenzahra123/Ecommerce-shop-backend" target="_blank">Shppy Backend</a>

## Run Locally
### 1. Install Dependencies
```sh
$ npm install
```

### 2. Create a new env file

Create an `env` file - Set filename`.env.prod` file for production and `.env.dev`for development and save it in the root of your project folder
and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```
// SAMPLE CONFIG .env.dev, you should put the actual config details found on your project settings

REACT_APP_STRIPE = <YOUR_STRIPE_PUBLIC_KEY> 

``` 

### 3. Configure the backend server

Follow the instructions from the server-side repository.


### 4. Run development server
```sh 
$ npm start
```

## Build the project
```sh
$ npm run build
```
