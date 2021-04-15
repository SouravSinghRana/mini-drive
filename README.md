# Mini Drive For Pictures.

## What is the use of this Repo

This Project is demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Authenticating User and User Data
4. Communicating React Application with Firebase as Database.
5. Persisting User Data
6. Communicating between parent and child component
7. Storing & Retrieving files from Firebase.

The project Template can be used to build bigger projects

## Live Application URL

### https://my-pics-mini-drive.netlify.app/
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://my-pics-mini-drive.netlify.app/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

## Authentication : 
   
   Contains Components related to authentication of user.

## G-Drive : 

  Contains Components related to dashboard, adding files folders and folderbreadcrumbs ui.

## Contexts :

   Implements Context Provider to define auth state of the application.

## Hooks :

   Customhook useFolder makes calls to retrieve and store data of a user from firebase.


#### HTTP client

**axios** library is used to make HTTP Calls

#### URL


The application has url / which ties to *Dashboard* Component

The application has url /signup which ties to *SignUp* Component

The application has url /login which ties to *Login* Component

The application has url /forgot-password which ties to *ForgotPassword* Component

The application has url /user which ties to *Profile* Component

The application has url /update-profile which ties to *UpdateProfile* Component

The application has url /folder/:folderId which ties to *Dashboard* Component



## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
