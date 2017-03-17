angular.module("jobHelper")
    .controller("profileCtrl", ["$scope", "$location", "$http", "userService", "tokenService", function ($scope, $location, $http, userService, tokenService) {
        $scope.statusTextPwd = "";
        $scope.statusTextEmail = "";

        $scope.editProfile = function (user) {
            if (user.password) {
                userService.changePwd(user)
                    .then(function (response) {
                        $scope.statusTextPwd = response.statusText;
                    });
            };

            userService.changeEmail(user)
                .then(function (response) {
                    $scope.statusTextEmail = response.textStatus;
                });
        };
        $scope.removeUser = function () {
            userService.removeUser()
                .then(function (response) {
                    console.log(response);
                    userService.user = {};
                    $location.path("/home");
                });
        };
}]);