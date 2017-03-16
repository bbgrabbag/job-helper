angular.module("jobHelper")
    .controller("loginCtrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {
        $scope.message = "";
        $scope.login = function (user) {
            userService.login(user)
                .then(function (response) {
                    $location.path("/listings");
                }, function (response) {
                    $scope.message = response.data.statusText;
                });
        };
    }]);