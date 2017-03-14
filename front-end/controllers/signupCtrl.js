angular.module("jobHelper")
    .controller("signupCtrl", ["$scope", "$location", "userService", function ($scope, $location, userService) {
        $scope.message = "";
        $scope.signup = function (user) {
            userService.signup(user)
                .then(function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        $location.path("/listings");
                    } else {
                        $scope.message = response.message;
                    }
                });
        }
}]);