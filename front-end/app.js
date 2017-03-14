angular.module("jobHelper", ["ngRoute", "ui.bootstrap", "ngStorage"]);
angular.module("jobHelper")
.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "./views/home.html"
    })
    .when("/listings", {
        templateUrl: "./views/listings.html",
        controller: "listingCtrl"
    })
    .when("/form", {
        templateUrl: "./views/userForm.html",
        controller: "userFormCtrl"
    })
    .when("/signup", {
        templateUrl: "./views/signup.html",
        controller: "signupCtrl"
    })
    .when("/login", {
        templateUrl: "./views/login.html",
        controller: "loginCtrl"
    })
    .when("/logout", {
        template: "",
        controller: "authCtrl"
    })
    .when("/profile", {
        templateUrl:"./views/profile.html",
        controller: "profileCtrl"
    })
    .otherwise({
        templateUrl: "./views/home.html"
    })
})
.config(["$httpProvider", function ($httpProvider) {  
    $httpProvider.interceptors.push("authInterceptor");
}]);

