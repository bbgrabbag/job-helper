angular.module("jobHelper")
    .controller("listingCtrl", ["$scope", "httpService", "listingService","$location", "$anchorScroll", function ($scope, httpService, listingService) {
        httpService.getAllListings("http://localhost:8000/api/postings")
            .then(function (gotten) {
                $scope.listings = listingService.postings;
            });
        $scope.isCollapsed = true;

        $scope.toggleApplied = function (listing) {
            httpService.toggleApplied("http://localhost:8000/api/postings/" + listing._id, listing)
                .then(function (toggled) {
                    $scope.listings = listingService.postings;
                });
        };

        $scope.toggleResponded = function (listing) {
            httpService.toggleResponded("http://localhost:8000/api/postings/" + listing._id, listing)
                .then(function (toggled) {
                    $scope.listings = listingService.postings;
                });
        };
        $scope.removeListing = function (listing) {
            httpService.removeListing("http://localhost:8000/api/postings/" + listing._id, listing)
                .then(function (removed) {
                    $scope.listings = listingService.postings;
                });
        };
        $scope.editListing = function (listing) {
            if (listing.editting) {
                httpService.updateListing("http://localhost:8000/api/postings/" + listing._id, listing)
                    .then(function (updated) {
                        $scope.listings = listingService.postings;
                    });
            }
        };
        
}]);