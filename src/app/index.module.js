// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../public/assets/app.css';

export default angular
    .module('mdApp', [
        'ngMaterial',
        'ui.router'
    ])
    .config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);