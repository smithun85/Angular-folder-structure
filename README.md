# CrudOperation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Install bootstrap:
Summary:
1.ngx-bootstrap provides the Angular components.
2.bootstrap provides the CSS styling needed for those components to look correct.
Therefore, while ngx-bootstrap provides functionality, you often need to install bootstrap to handle the styling unless you have an alternative approach for styling.
So, the installation sequence generally looks like this:

Process:
Step-1: Install Bootstrap for the CSS:npm install bootstrap
step-2: Add Bootstrap styles:angular.json file=>Open angular.json and add the Bootstrap CSS file under the styles array.
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],

step-3: Add bootstrap script: angular.json file=>Open angular.json and add the Bootstrap js file under the script array.
"scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]

Note: We also add the dependancy in index.html file
Note: If we need to use  Angular components that are styled using Bootstrap then install 

step-4: Install ngx-bootstrap for the Angular components: ng add ngx-bootstrap  or npm i ngx-bootstrap