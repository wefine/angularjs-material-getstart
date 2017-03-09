// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import '../public/assets/app.css';

// 模板由 gulp-angular-templatecache 自动生成
import templates from "./templates.module";

export default angular
    .module('mdApp', [
        'ngMaterial',
        templates.name
    ])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);