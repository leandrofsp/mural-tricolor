(function () {
    angular.module('muralTricolor').constant('APP_SETTINGS', {
        "FIREBASE_URL": "https://mural-tricolor.firebaseio.com/"

    });

	angular.module('muralTricolor').run(function ($rootScope, $location) {
        $rootScope.user = null;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                $location.path("/login");
            }
        });
    });
    
})();
