angular.module("jobHelper")
    .controller("profileCtrl", ["$scope","$location", "$http", "userService","tokenService", function ($scope,$location, $http, userService, tokenService) {
        $scope.editProfile = function (user) {
            userService.editProfile(user)
            .then(function (response){
                console.log(response);
                $location.path("/home");
            });
        };
        $scope.removeUser = function () {
            userService.removeUser()
            .then(function(response){
                console.log(response);
                userService.user = {};
                $location.path("/home");
            });
        };
}]);