'use strict';

/* Controllers */
angular.module('cashClock', [])
.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
	var initClock = Date.now();
	var tickInterval = 1000;
	$scope.hourlyRate = 10;
	$scope.cash = "$0";

	var tick = function() {
		var time = Date.now() - initClock;
		var seconds = time / 1000;
		var mins = seconds / 60;
		var hours = mins / 60
		$scope.cash = '$' + (hours * $scope.hourlyRate);
		$timeout(tick, $scope.tickInterval);
	}

	$timeout(tick, $scope.tickInterval);
}])