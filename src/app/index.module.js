// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../public/assets/app.css';

import users from './users/users.module';
import controller from './index.controller';

export default angular
    .module('mdApp', [
        'ngMaterial',
        'ui.router',
        users.name
    ])
    .config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ])
    .controller('AppController', controller);