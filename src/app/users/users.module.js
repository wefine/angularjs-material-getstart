// Load the custom app ES6 modules
import UsersDataService from "./users.service";
import UsersList from "./list/users-list.component";
import UserDetails from "./details/users-details.component";

// Define the Angular 'users' module

export default angular
    .module("users", ['ngMaterial'])
    .component(UsersList.name, UsersList.config)
    .component(UserDetails.name, UserDetails.config)
    .service("UsersDataService", UsersDataService);
