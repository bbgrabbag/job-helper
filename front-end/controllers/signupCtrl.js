angular.module("jobHelper")
    .controller("signupCtrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {
        $scope.message = "";
        $scope.signup = function (user) {
            userService.signup(user)
                .then(function (response) {
                    $location.path("/listings");
                }, function (response) {
                    $scope.message = response.data.statusText;
                });
        };
        }]);