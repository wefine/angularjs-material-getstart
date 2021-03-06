// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
    name: 'usersList',
    config: {
        bindings: {
            users: '<',
            selected: '<',
            showDetails: '&onSelected'
        },
        templateUrl: 'users/list/users-list.component.template.html'
    }
};
