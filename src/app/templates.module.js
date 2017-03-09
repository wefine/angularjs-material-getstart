import angular from 'angular'; export default angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('users/details/users-details-contact.template.html','<md-bottom-sheet class="md-list md-has-header">\n\n  <md-subheader>\n    Contact <span class="name">{{ $ctrl.user.name }}</span>:\n  </md-subheader>\n\n  <md-list>\n    <md-item ng-repeat="item in $ctrl.items">\n      <md-button ng-click="$ctrl.performAction(item)">\n        <md-icon md-svg-icon="{{ item.icon }}"></md-icon>\n        {{item.name}}\n      </md-button>\n    </md-item>\n  </md-list>\n\n</md-bottom-sheet>');
$templateCache.put('users/details/users-details.template.html','<md-icon md-svg-icon="{{$ctrl.selected.avatar}}" class="avatar"></md-icon>\n<h2>{{$ctrl.selected.name}}</h2>\n<p>{{$ctrl.selected.content}}</p>\n\n<md-button class="md-fab md-fab-bottom-right" ng-click="$ctrl.share($event)" aria-label="Share">\n  <md-icon md-svg-icon="share" ></md-icon>\n</md-button>\n');
$templateCache.put('users/list/users-list.component.template.html','<!-- NOTE: @see ngClick for how to pass data selection to outside expression -->\n<md-list>\n  <md-list-item ng-repeat="user in $ctrl.users">\n    <md-button ng-click="$ctrl.showDetails({user:user})" ng-class="{\'selected\' : user === $ctrl.selected }">\n      <md-icon md-svg-icon="{{user.avatar}}" class="avatar"></md-icon>\n      {{user.name}}\n    </md-button>\n  </md-list-item>\n</md-list>\n');}]);