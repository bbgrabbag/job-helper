angular.module("jobHelper")
    .service("userService", ["$http", "$localStorage", "$location", "tokenService", function ($http, $localStorage, $location, tokenService) {

        var self = this;
        this.user = {};

        this.signup = function (user) {
            return $http.post("/auth/signup", user)
                .then(function(response){
                tokenService.storeToken(response.data.token);
            $localStorage.user = response.data.user;
            self.user = $localStorage.user;
                return response;
            });
        };

        this.login = function (user) {
            return $http.post("/auth/login", user)
                .then(function(response){
                tokenService.storeToken(response.data.token);
            $localStorage.user = response.data.user;
            self.user = $localStorage.user;
                return response;
            });
        };

        this.logout = function () {
            tokenService.removeToken();
            $location.path("/home");
        };

        this.changePwd = function(user){
            return $http.post("/api/profile/change-password/" + $localStorage.user._id, user)
            .then(function(response){
                return response.data;
            }, function (response){
                return response.data;
            });
        };
        this.changeEmail = function(user){
            return $http.put("/api/profile/change-profile/" + $localStorage.user._id, user)
            .then(function(response){
                $localStorage.user.email = user.email;
                return response.data;
            }, function(response){
                return response.data;
            });
        };
        
        this.removeUser = function () {
            return $http.delete("/api/profile/remove-user/" + $localStorage.user._id, $localStorage.user._id)
                .then(function (res) {
                    tokenService.removeToken();
                    return res.data;

                }, function (res) {
                    return res.data
                });

        };

        this.isAuthenticated = function () {
            return !!tokenService.getToken();
        };

}]);