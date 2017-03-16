angular.module("jobHelper")
    .service("httpService", function ($http, listingService) {
        this.postNew = function (url, newPosting) {
            return $http.post(url, newPosting)
                .then(function (posted) {
                    listingService.postings.push(posted.data);
                }, function (posted) {
                    return posted.data;
                });
        };
        this.getAllListings = function (url) {
            return $http.get(url)
                .then(function (gotten) {
                    listingService.postings = gotten.data
                }, function (gotten) {
                    return gotten.data;
                });
        };

        this.removeListing = function (url, listing) {
            return $http.delete(url, listing._id)
                .then(function (response) {
                    for (var i = 0; i < listingService.postings.length; i++) {
                        if (listingService.postings[i]._id === listing._id) {
                            listingService.postings.splice(i, 1);
                        }
                    }
                });
        };
        this.toggleApplied = function (url, listing) {
            listing.listingStatus.applied = !listing.listingStatus.applied;
            return $http.put(url, listing)
                .then(function (response) {
                    for (var i = 0; i < listingService.postings.length; i++) {
                        if (listingService.postings[i]._id === listing._id) {
                            listingService.postings[i] = response.data;
                        }
                    }
                }, function (response) {
                    console.log(response.data);
                });
        };
        this.toggleResponded = function (url, listing) {
            listing.listingStatus.responded = !listing.listingStatus.responded;
            return $http.put(url, listing)
                .then(function (response) {
                    for (var i = 0; i < listingService.postings.length; i++) {
                        if (listingService.postings[i]._id === listing._id) {
                            listingService.postings[i] = response.data;
                        }
                    }
                }, function (response) {
                    console.log(response.data);
                });
        };
        this.updateListing = function (url, listing) {
            return $http.put(url, listing)
                .then(function (response) {
                    for (var i = 0; i < listingService.postings.length; i++) {
                        if (listingService.postings[i]._id === listing._id) {
                            listingService.postings[i] = response.data;
                        }
                    }
                }, function (response) {
                    console.log(response.data);
                });
        }


    });