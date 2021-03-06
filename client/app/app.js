var CalorieCounter = angular.module('CalorieCounter', ['ngAnimate']);

CalorieCounter.directive('mealTable', function() {
  return {
    restrict: 'E',
    templateUrl: '../mealTable.html'
  };
});

CalorieCounter.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/meals',
    extendedUrl: 'http://localhost:3000/meals/'
  };
});

CalorieCounter.factory('CalorieService', function(Config, $http) {
  return {
    getAll: function() {
      return $http.get(Config.baseUrl);
    },
    deleteMeal: function(item) {
      return $http.delete(Config.extendedUrl + item);
    },
    addMeal: function(newMeal) {
      return $http.post(Config.extendedUrl, newMeal);
    }
  };
});

CalorieCounter.controller('AppController', function($scope, $http, CalorieService) {
  $scope.meals = [];
  $scope.tValue = 15;

  $scope.addMeal = function() {
    var newMeal = {
      name: $scope.newMeal.name,
      calories: $scope.newMeal.calories,
      date: $scope.newMeal.date
    };
    CalorieService.addMeal(newMeal).success(function(data) {
      $scope.meals.push(data);
    });
  };

  $scope.deleteMeal = function(item) {
    var index = $scope.meals.indexOf(item);
    CalorieService.deleteMeal(item.id).success(function() {
      console.log(index);
      $scope.meals.splice(index, 1);
    });
  };

  $scope.getSum = function() {
    $scope.sum = 0;
    $scope.meals.forEach(function(meal) {
      $scope.sum += meal.calories;
    });
    return $scope.sum;
  };

  $scope.reload = function() {
    $scope.search = '';
  };

  $scope.tSubject = function() {
    var testA = 10;
    var testB = 5;
    $scope.tSum = testA + testB;
  };

  CalorieService.getAll().success(function(data) {
    $scope.meals = data;
    $scope.loading = false;
  });
});
