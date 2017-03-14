angular.module("jobHelper")
.service("userService", ["$http", "$localStorage", "$location", "tokenService", function ($http, $localStorage, $location, tokenService) {

    var self = this;
    this.user = {};

    function successCallback (res) {
        self.user = res.data.user;
        $localStorage.user = self.user;
        tokenService.storeToken(res.data.token);
        return res
    };

    function errorCallback (res) {
        return res.data;
    };

    this.signup = function (user) {
        return $http.post("/auth/signup", user)
            .then(successCallback, errorCallback)
    };
    
    this.login = function (user) {
        return $http.post("auth/login", user)
            .then(successCallback, errorCallback)
    };
    
    this.logout = function () {
        tokenService.removeToken();
        $location.path("/home");
    };

    this.isAuthenticated = function () {
        return !!tokenService.getToken();
    };

}]);