'use strict';

describe('CalorieCounter', function() {
  beforeEach(module('CalorieCounter'));

  describe('AppController', function() {
    var $rootScope;
    var $scope;
    beforeEach(function() {
      inject(function(_$rootScope_, $controller) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller('AppController', { $scope: $scope });
      });
    });

    it('should check the existence of the scope', function() {
      expect($scope).toBeDefined();
    });

    it('should test a scope property', function() {
      expect($scope.tValue).toEqual(15);
    });

    it('should return proper value from a function', function() {
      $scope.tSubject();
      expect($scope.tSum).toEqual(15);
    });

    it('should sum calories properly', function() {
      $scope.meals = [
        {calories: 100},
        {calories: 99}
      ];
      $scope.getSum();
      expect($scope.sum).toEqual(199);
    });
  });
});
