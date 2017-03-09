// Load the custom app ES6 modules
import UsersDataService from "./UsersDataService";

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .service("UsersDataService", UsersDataService);
