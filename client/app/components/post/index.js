import angular from 'angular';

let postComponent = {
  restrict: 'E',
  bindings: {},
  template: `
  <div>
    <div>post works</div>
    <div>
        <input type="text" ng-model="user.title" />
    </div>
    <div>{{user.title}}</div>
    <div>{{user.value}}</div>
    <comment></comment>
</div>`,
  controller: PostController,
  controllerAs: 'postCtrl',
};

PostController.$inject = ["$scope"];
function PostController ($scope) {
  $scope.user = {title: 'guest', value: 'visitor'};
}

export {
  postComponent,
  PostController,
}
