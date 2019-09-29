# ChequeWriter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Build
1. Please make sure you have installed the latest version of nodejs before running this application. This solution was developed with nodejs version v10.16.3

2. Inside the root project folder 'cheque-writer' where package.json is located, run npm install to install dependencies.
Core Dependencies include Angular 8.3.6 and PrimeNG Angular component library.

3. Once all dependencies are installed in the same folder 'cheque-writer' run npm start to build and launch the Angular application.

4. The Single Page Application should be served on the default port of 4200 at http://localhost:4200/  

## Design Choices

###Design Patterns
Dependency Injection and Inversion of Control was used in app.component.js to inject the router service into the base component, allowing the user to navigate to different components via the routes defined in app.module.ts

###Styling
PrimeNg was used to include reusable components within the app to help build it out quickly.
PrimeFlex was also used to implement the 12 column grid commonly used in popular frameworks like bootstrap. This helps scale the UI when it on a smaller screen size, while keeping everything in proportion to each other.

##Business Logic
Business logic was implemented in Angular 8. This framework was chosen as it allows the separation of concerns with UI, Business Logic and Data. This is achieved by implementing Angular components.
Three components where used to create the app.
1. App Component - This component is responsible for the side nav menu and the progress indicator at the top of each page. It is the parent component to both Home and Cheque-Output components as it encapsulated their UI through the use of a router-outlet.
2. Home Component - This component is the default and first page the user sees. It is the form where the user can enter their name and a dollar amount to be processed into words.
3. Cheque-Output Component - This component is the last page in the application where the user sees the output of the cheque program where the previously entered dollar value has been converted to words and displayed to the user. 

##How to use the App
The app consists of two pages
1. Enter Details - User must enter a name in alphabetical format and a dollar amount in numeric format, to generate a cheque before they can proceed to the next page. If the alphabetical and numeric values are not used, the user will not be able to proceed when pressing the next button. There is also a reset button which will clear all of the input fields on the page.
2. Cheque Output - The page is for display only and does not have any input fields. The name the user entered on the previous page can be seen, as well as the dollar amount in words. This page also has a back button which will take the user back to the previous page, while also retaining their entered data in the form. 

