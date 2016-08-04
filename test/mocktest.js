describe('CalorieService', function() {
  var $httpBackend;
  var $rootScope;
  var CalorieService;

  beforeEach(module('CalorieCounter'));
  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _CalorieService_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    CalorieService = _CalorieService_;
    
  }));
});
