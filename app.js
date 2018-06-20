// MODULE
var formulario = angular.module('formulario',['ngAria','ngMaterial', 'ngMessages' ,'chart.js']);

formulario.controller('formController', function ($scope, $window, $mdDialog,$timeout) {

	this.myDate = new Date;
	this.isOpen = false;

	$scope.labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
	$scope.series = ['Primer Turno', 'Segundo Turno', 'Tercer turno'];

	$scope.data = [
	[65, 59, 80, 81, 56, 40],
	[45, 39, 60, 51, 26, 44],
	[28, 48, 40, 19, 86, 90]
	];

	$scope.xmlHttp = new XMLHttpRequest();


	$scope.tabIndex;

	$scope.nextTab = function()
	{

		$window.scrollTo(0, 0);
		$scope.tabIndex = $scope.tabIndex +1;
	}


	
	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};

});




