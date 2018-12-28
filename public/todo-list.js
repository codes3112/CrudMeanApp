var myTodoApp= angular.module('myTodoApp', []);
myTodoApp.controller('TodoController', ['$scope', '$http', 
                              function($scope, $http) {
    
    
    $scope.message="Hi There From the Controller";
    
    var refresh=function(){
    $http.get('api/todos')
        .success(function(response) {
            console.log("I got the data I requested");
      $scope.todos = response;
      console.log(response);      
      $scope.error = "";
    }).
    error(function(reason) {
      $scope.todo = {};
      $scope.error = reason;
    });

  };
  refresh();

  $scope.addTodo = function () {
    console.log($scope.todo);
  $http.post('/api/todos', $scope.todo).success(function(response) {
    console.log(response);
    refresh();
  });
};
   

  $scope.removeTodo = function(_id) {
    console.log(_id);
    $http.delete('/api/todos/' + _id).success(function(response) {
      refresh();
    });
  };
  $scope.edit = function(_id) {
    console.log(_id);
    $http.get('/api/todos/'+ _id).success(function(response) {
        
          $scope.todo=response;
        //});
       
      $scope.todo.task=response.task;
      $scope.todo.name=response.name;
      $scope.todo.status=response.status;


    });
  };  
  
  $scope.update = function() {
    console.log($scope.todo._id);
    $http.put('/api/todos/' + $scope.todo._id, $scope.todo).success(function(response) {
      refresh();
    })
  };

  $scope.deselect = function() {
    $scope.todo = "";
  }
  }]);