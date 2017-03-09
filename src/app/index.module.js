// Load libraries
import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import "../public/assets/app.css";
import users from "./users/users.module";
import controller from "./index.controller";

export default angular
    .module('mdApp', [
        'ngMaterial',
        'ui.router',
        users.name
    ])
    .config(($mdIconProvider, $locationProvider) => {
        $locationProvider.hashPrefix('!');

        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24);
    })
    .controller('AppController', controller);