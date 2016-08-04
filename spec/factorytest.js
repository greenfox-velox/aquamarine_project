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
