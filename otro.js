app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, $interval, hexafy) {
	$scope.valor=0;
	$scope.hex = hexafy.myFunc(Number($scope.valor));
	
  $interval(function () {
        $scope.hex = hexafy.myFunc(Number($scope.valor));
    }, 100);
});