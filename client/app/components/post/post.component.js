import template from './post.component.html';
import postController from './post.controller.js';
import './post.component.css';

let postComponent = {
  restrict: 'E',
  bindings: {},
  template: `
  <div ng-controller="ExampleController">
    <div>post works</div>
    <div>
        <input type="text" ng-model="title" />
    </div>
    <div>{{title}}</div>
    <div>{{value}}</div>
    <comment></comment>
</div>`,
  controller: angular.module('post', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.user = {title: 'guest', value: 'visitor'};
  }])
};
export default postComponent;