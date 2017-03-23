angular.module("jobHelper")
    .filter('isApplied', function () {
        return function (listings, query) {
            if (!query) return listings;
            return listings.filter(function (listing) {
                return listing.listingStatus.applied === query;
            });
        };
    })
    .filter('isResponded', function () {
        return function (listings, query) {
            if (!query) return listings;
            return listings.filter(function (listing) {
                return listing.listingStatus.responded === query;
            });
        };
    })
    .filter('isNotApplied', function () {
        return function (listings, query) {
            if (!query) return listings;
            return listings.filter(function (listing) {
                return listing.listingStatus.applied === !query;
            });
        };
    })
    .filter('isNotResponded', function () {
        return function (listings, query) {
            if (!query) return listings;
            return listings.filter(function (listing) {
                return listing.listingStatus.responded === !query;
            });
        };
    });