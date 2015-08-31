(function(){
	'use strict';

	angular.module('muralTricolor').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', 'APP_SETTINGS', '$firebaseArray'];

	function HomeCtrl($scope, APP_SETTINGS, $firebaseArray) {
        var vm = this;
        var ref = new Firebase(APP_SETTINGS.FIREBASE_URL + '/posts');
        ref.orderByKey().limitToFirst(25);

        vm.posts = [];

        activate();

        function activate() {
            vm.posts = $firebaseArray(ref);
        }

      }
  
})();