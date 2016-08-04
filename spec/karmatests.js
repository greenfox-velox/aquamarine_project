describe('Config factory', function() {
  var Config;

  beforeEach(angular.mock.module('CalorieCounter'));

  beforeEach(inject(function(_Config_) {
    Config = _Config_;
  }));

  it('should exist', function() {
    expect(Config).toBeDefined();
  });
});

// *************************************************

describe('Config factory', function() {
  var Config;

  beforeEach(angular.mock.module('CalorieCounter'));

  beforeEach(inject(function(_Config_) {
    Config = _Config_;
  }));

  it('should contain', function() {
    expect(JSON.stringify(Config)).toContain(JSON.stringify({
      baseUrl: 'http://localhost:3000/meals',
      extendedUrl: 'http://localhost:3000/meals/'
    }));
  });
});

// *************************************************

describe('CalorieService factory', function() {
  var factory;

  beforeEach(function() {
    module('CalorieCounter');

    inject(function ($injector) {
      factory = $injector.get('CalorieService');
    });
  });

describe('CalorieService', function() {
  it ('should exist', function () {
    expect(factory).toBeDefined()
  });
});
});

// *********************************************

describe('CalorieService factory', function() {
  var CalorieService;

  beforeEach(angular.mock.module('CalorieCounter'));

  beforeEach(inject(function(_CalorieService_) {
    CalorieService = _CalorieService_;
  }));

  it('should contain', function() {
    expect(JSON.stringify(CalorieService)).toContain(JSON.stringify({
      getAll: function() {
        return $http.get(Config.baseUrl);
      })
  });
});
});


// describe('CalorieService factory', function() {
//   var factory;
//
//   beforeEach(function() {
//     module('CalorieCounter');
//
//     inject(function ($injector) {
//       factory = $injector.get('CalorieService');
//     });
//   });
//
// describe('CalorieService', function() {
//   it ('should contain', function () {
//     expect(factory).toContain({
//       getAll: function() {
//         return $http.get(Config.baseUrl);
//       })
//   });
// });
// });

// describe('Custom directive', function() {
//   var $compile,
//       $rootScope;
//
//   beforeEach(module('myApp'));
//
//   beforeEach(inject(function(_$compile_, _$rootScope_){
//     $compile = _$compile_;
//     $rootScope = _$rootScope_;
//   }));
//
//   it('should exist', function() {
//     var element = $compile("<meal-table></meal-table>")($rootScope);
//     // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
//     $rootScope.$digest();
//     // Check that the compiled element contains the templated content
//     expect(element).toBeDefined("Filter by");
//   });
// });
