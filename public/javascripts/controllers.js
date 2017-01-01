'use strict';

/* Controllers */
var myusername;

function IndexCtrl($scope, $location, $rootScope, $http) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      console.log(data);
      $scope.posts = data.posts;
      $rootScope.user = data.user;
      $scope.currentUserName = data.user.username;
      console.log(data.user);
    });
  $scope.hiddenBlog = function(articalId){
    $http.put('/api/post/'+ articalId +'/hidden').
        success(function(data){
          $location.path('/');
    })
  }
}

function SigninCtrl($scope, $http, $location) {
  $scope.error = false;
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/signin/post', $scope.form).
    success(function(response) {
      if(response=="true") {
        $location.path('/');
      }else
        $scope.error = true;
    });

  };


}
function SignupCtrl($scope, $http, $location) {
  $scope.error = false;

  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/signup/post', $scope.form).
    success(function(response) {
      if(response=="true") {
        $location.path('/');
      }else
        $scope.error = true;
    });

  };
}
function SigninPostCtrl($scope, $http, $location) {

}

function SignupPostCtrl($scope, $http, $location) {

}

function SignoutCtrl($scope, $http, $location) {
  $http.get('/signout').success(function(data) {
    console.log(data);
    $location.path('/');
  })
}
function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        console.log(data);
        $location.path('/');
      });
  };
}

function ReadPostCtrl($scope, $rootScope, $http, $location, $routeParams) {
  $scope.myusername = $rootScope.user.username;
  $scope.edit = false;
  $scope.articalId = $routeParams.id;
  console.log($routeParams.id);
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
  $http.get('/api/post/' + $routeParams.id +"/comment").
      success(function(data){
        console.log("data",data);
        $scope.comments = data.comments;
  })
  $scope.deleteComment = function(commentId){
    $http.delete('/api/post/' + $routeParams.id +"/comment/" + commentId + '/delete').
        success(function(data){
          $location.url('/');
    })
  }
  $scope.editComment = function(commentId){
    $scope.edit = true;
    $scope.editCommentId = commentId;
  }
  $scope.editCommentPost = function () {
    $http.put('/api/post/'+ $routeParams.id +'/comment/' + $scope.editCommentId,  $scope.form).
    success(function(data){
      $location.url('/');
    });
  };
  $scope.hiddenComment = function(commentId){
    $http.put('/api/post/'+ $routeParams.id +'/comment/' + commentId +'/hidden')
        .success(function(data){
          $location.url('/');
        })
  }
  $scope.commentPost = function(){
    $scope.form.commentUser = $rootScope.user.username;
    console.log($scope.form);
    $http.post('/api/post/' + $routeParams.id + '/comment', $scope.form).
        success(function(data){
          console.log(data);
          console.log('/readPost/' + $routeParams.id);
          $location.url('/');
    })
  }
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}
