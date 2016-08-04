describe('AppController', function() {
  var $httpBackend;
  var $rootScope;
  var createController;

  beforeEach(module('CalorieCounter'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('AppController', {'$scope': $rootScope });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should handle server response properly', function() {
    var responseObject = [{
      meal: 'scrambled eggs',
      calories: 450,
      date: new Date('2016', '07', '12')
    }];
    $httpBackend.expectGET('http://localhost:3000/meals').respond(responseObject);
    createController();
    $httpBackend.flush();
  });
});
