// Load the custom app ES6 modules
import UsersDataService from "./users.service";

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .service("UsersDataService", UsersDataService);
