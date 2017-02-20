var SuperController = angular.module("SuperController", []);

function ListController($scope, $http)
{
    $http.get('/api/feed').success(function (data) {
        $scope.feeds = data;
    });
}

var FeedsController = function ($scope, $http) 
{
    this.feed = {};
    this.feeds = [];
    this.clearFeed = function () {
        Object.assign(this.feed, { email: '', message: '' });
    };
    this.addFeed = function () {
        var self = this;
        
        if (this.feed.email && this.feed.message) {
            $http.post('/api/feed', this.feed).success(function (data) {
                $scope.feeds.push(data);
                self.clearFeed();
            });
        }
    };
};


SuperController.controller("ListController", ListController);
SuperController.controller('FeedsController', FeedsController);
