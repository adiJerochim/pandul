
var MyApp = angular.module("MyApp", [
    'ngRoute',
    'SuperController',
    'ui.gravatar'
    
]);

MyApp.config(RouteConnect)

function RouteConnect($routeProvider)
{
    $routeProvider.
            when("/list", {
                templateUrl:"addon/list.html",
                controller:"ListController"
    }).
            otherwise({
                redirectTo: "/list"
    })
}