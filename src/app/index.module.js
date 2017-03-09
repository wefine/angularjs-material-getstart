// Load libraries
import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
// css
import "../public/assets/app.css";
// business
import users from "./users/users.module";
import controller from "./index.controller";

export default angular
    .module('mdApp', [
        'ngMaterial',
        'ui.router',
        users.name
    ])
    .config(($mdIconProvider, $locationProvider, $mdThemingProvider) => {
        $locationProvider.hashPrefix('!');

        // Register the user `avatar` icons
        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    })
    .controller('AppController', controller);