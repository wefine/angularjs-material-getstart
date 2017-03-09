import UserDetailsController from "./users-details.controller";

export default {
    name: 'userDetails',
    config: {
        bindings: {
            selected: '<'
        },
        templateUrl: 'users/details/users-details.template.html',
        controller: [
            '$mdBottomSheet',
            '$log',
            UserDetailsController
        ]
    }
};