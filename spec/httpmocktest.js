describe('AppController', function() {
  var $httpBackend;
  var $rootScope;
  var createController;

   // Set up the module
  beforeEach(module('CalorieCounter'));

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    // Get hold of a scope (i.e. the root scope)
    $rootScope = $injector.get('$rootScope');
    // The $controller service is used to create instances of controllers
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


  //  it('should fail authentication', function() {
   //
  //    // Notice how you can change the response even after it was set
  //    authRequestHandler.respond(401, '');
   //
  //    $httpBackend.expectGET('/auth.py');
  //    var controller = createController();
  //    $httpBackend.flush();
  //    expect($rootScope.status).toBe('Failed...');
  //  });

  //
  // it('should send msg to server', function() {
  //   var controller = createController();
  //   $httpBackend.flush();

     // now you don’t care about the authentication, but
     // the controller will still send the request and
     // $httpBackend will respond without you having to
     // specify the expectation and response for this request
  //
  //   $httpBackend.expectPOST('http://localhost:3000/meals', 'message content').respond(201, '');
  //   $rootScope.addMeal({
  //     name: '3 peaches',
  //     calories: 240,
  //     date: new Date('2016', '07', '11')
  //   });
  //   expect($rootScope.status).toBe('Saving...');
  //   $httpBackend.flush();
  //   expect($rootScope.status).toBe('');
  // });
  //

  //  it('should send auth header', function() {
  //    var controller = createController();
  //    $httpBackend.flush();
   //
  //    $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
  //      // check if the header was sent, if it wasn't the expectation won't
  //      // match the request and the test will fail
  //      return headers['Authorization'] == 'xxx';
  //    }).respond(201, '');
   //
  //    $rootScope.saveMessage('whatever');
  //    $httpBackend.flush();
  //  });
});
