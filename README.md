# React Webshop using Firebase as a backend
[React application](https://github.nl/jamiebloem/shopbyjamie)  app using  [Firebase Authentication](https://firebase.google.com/docs/auth/).


### [Check the deployed version here](https://shopbyjamie.vercel.app/)

![img.png](img.png)


## Table of Contents
1. App description
2. Requirements
3. Installation
4. Other available commands

## 1.   App description
This is a self-built app in React. It is a webshop application that shows the handmade jewelery shop of a friend of mine. The user can upload their product images and see the customer orders in Firebase. The custumor can simply add products to your shoppingcart and checkout with an checkout form. 

### Technologies used
- HTML
- CSS
- React
- Firebase
- JavaScript

## 2.   Requirements
The following items are required to run this React application:
* [Firebase](#https://firebase.google.com/) account 
* Node.js (version 14.15.4)

## 3.   Installation
### A. Clone the Repository
Clone this repository to your computer:
```shell
$ git clone https://github.com/jamiebloem/shopbyjamie
```

### B. Install the Dependencies

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

On your terminal, go to the project directory and install all of the required dependencies:

```shell
# Go to the project directory.
$ cd shopbyjamie
# Install all of the dependencies.
$ npm install
# Or if you prefer to use Yarn.
$ yarn install
```
###C.0 Novi Examinator Firebase
**If you are checking this assignment for Novi Hogeschool, you can use my Firebase credentials. I've included a .env file with my assignment, so you don't need to configure Firebase to test the app.
To test the app use this email: owner@owner.com, and password: abcd1234.**


### C.1 Configure Firebase 
If you don't have a Firebase backend , you can go to their website at [firebase.google.com](https://firebase.google.com/) and create a new account for free.

After you created an account, do the following steps:
1. Go to your console
2. Click on 'Add project' and typ your project name
3. Enable Google Analytics for this project
4. Click create project
5. Register a new app
6. Copy the credentials to the .env file (see steps below)
7. Go to authentication in Firebase
8. Click: get started
9. Click: email/password
10. Click: enable
11. Create an webshopowner by adding a user with email and password
12. Go to Firebase Database
13. Create Database
14. Select Test mode and your locations
15. Click done

Creat a .env file in the root of this folder

Open the `.env` file and add the Firebase credentials in your own file:
```

REACT_APP_FIREBASE_API_KEY=<YOUR CREDENTIALS HERE>
REACT_APP_FIREBASE_AUTH_DOMAIN=<YOUR CREDENTIALS HERE>
REACT_APP_FIREBASE_PROJECT_ID=<YOUR CREDENTIALS HERE>
REACT_APP_FIREBASE_STORAGE_BUCKET=<YOUR CREDENTIALS HERE>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<YOUR CREDENTIALS HERE>
REACT_APP_FIREBASE_APP_ID=<YOUR CREDENTIALS HERE>

```
### D. Run the application
To run the application within the development mode, type the following command:
```shell
npm run start
# Or if you prefer to use Yarn
yarn start
```
It will start the development server. You can visit the application at [localhost:3000](http://localhost:3000). Play around with the code on `src` directory. The application will be reloaded automatically if you make any changes.
## 4. Other available commands
```shell
#Builds the app for production to the `build` folder.
$ npm run build
```
```shell
# Launches the test runner in the interactive watch mode.
$ npm test
```
```shell
# This command will remove the single build dependency from your project.
$ npm eject
```
### Note: **NPM EJECT** is a one-way operation. Once you `eject`, you can’t go back!
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
